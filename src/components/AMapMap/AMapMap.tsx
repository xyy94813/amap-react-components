import * as React from 'react';
import type { PropsWithChildren } from 'react';
import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react';

import useAMapAPI from '../../hooks/useAMapAPI';
import useSetter from '../../hooks/useSetter';

import { AMapMapProps } from './interface';
import AMapMapContext from './AMapMapContext';

const CONTAINER_STYLE = { width: '100%', height: '100%' };

const defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  viewMode: '2D' as AMap.MapOptions['viewMode'],
  // eslint-disable-next-line react/default-props-match-prop-types
  features: ['bg', 'point', 'road', 'building'],
};

// More DOC see: https://a.amap.com/jsapi/static/doc/index.html?v=2#map
const AMapMap = forwardRef<any, PropsWithChildren<AMapMapProps>>(
  ({
    children,
    center,
    cityName,
    zoom,
    features,
    mapStyle,
    viewMode,
    pitch,
  }, ref) => {
    const { __AMAP__: AMap } = useAMapAPI();

    // container ref
    const $mapContainer = useRef<HTMLDivElement>(null);
    const [curMap, setInstance] = useState<AMap.Map | null>(null);

    useEffect(() => {
      let clearEffect;
      if (!$mapContainer.current || !AMap) {
        return clearEffect;
      }

      const initMap = () => {
        const newInstance = new AMap.Map($mapContainer.current!, { viewMode });

        // 使用代理调整 map 实例的实现
        // 添加和删除时，发布事件通知
        const mapProxy = new Proxy(newInstance, {
          get(target, p) {
            if (p === 'add') {
              const newAddFunc: typeof target.add = (overlays) => {
                const result = target.add(overlays);
                newInstance.emit('overlaysAdded', overlays);
                return result;
              };
              return newAddFunc;
            }

            if (p === 'remove') {
              const newRemoveFunc: typeof target.remove = (overlays) => {
                const result = target.remove(overlays);
                newInstance.emit('overlaysRemoved', overlays);
                return result;
              };
              return newRemoveFunc;
            }
            return target[p];
          },
        });

        clearEffect = () => {
          /**
           * 异步的 destroy map，
           * 根据 Effect 的执行顺序，先执行父组件的 Effect，后执行子组件 Effect。
           * 如果此处直接调用 destroy，后面 `useAMapControlBinder` 清除副作用时会导致报错，
           *
           * AMap API 会报错，TypeError: Cannot read property 'remove' of undefined
           * （不太确定）
           *
           * 地图对象还存在，如何判断 amap 实例已经 destroy???
           *
           */
          newInstance.destroy();
        };
        setInstance(mapProxy); // fire re-render
      };

      initMap();

      return clearEffect;
    }, [AMap, viewMode]);

    useImperativeHandle(ref, () => curMap, [curMap]);

    useSetter<Parameters<AMap.Map['setMapStyle']>>(curMap, 'setMapStyle', mapStyle!);

    // set city
    useEffect(() => {
      if (cityName) {
        curMap?.setCity(cityName);
      }
    }, [cityName, curMap]);

    // set zoom
    useEffect(() => {
      if (zoom) {
        curMap?.setZoom(zoom);
      }
    }, [zoom, curMap]);

    // set center
    useEffect(() => {
      if (center) {
        curMap?.setCenter(center);
      }
    }, [center, curMap]);

    useSetter<Parameters<AMap.Map['setFeatures']>>(curMap, 'setFeatures', features!);
    useSetter<Parameters<AMap.Map['setPitch']>>(curMap, 'setPitch', pitch!);

    return (
      <div style={CONTAINER_STYLE} ref={$mapContainer}>
        <AMapMapContext.Provider value={curMap}>{children}</AMapMapContext.Provider>
      </div>
    );
  },
);

AMapMap.defaultProps = defaultProps;

const AMapMapMemo = memo(AMapMap);

AMapMapMemo.displayName = 'AMapMap'; // for auto-docs

export default AMapMapMemo;
