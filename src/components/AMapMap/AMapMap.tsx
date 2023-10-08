import type { PropsWithChildren } from 'react';
import * as React from 'react';
import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react';

import useAMapAPI from '../../hooks/useAMapAPI';

import AMapMapContext from './AMapMapContext';

const CONTAINER_STYLE = { width: '100%', height: '100%' };

// More DOC see: https://a.amap.com/jsapi/static/doc/index.html?v=2#map
export type AMapMapProps = PropsWithChildren<{
  center?: [number, number];
  cityName?: string;
  zoom?: number;
}>;

const defaultProps = {
  center: undefined,
  cityName: undefined,
  zoom: undefined,
};

const AMapMap = forwardRef<any, AMapMapProps>(
  ({
    children, center, cityName, zoom,
  }: AMapMapProps, ref) => {
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
        const newInstance = new AMap.Map($mapContainer.current!);

        // 使用代理调整 map 实例的实现
        // 添加和删除时，发布事件通知
        const mapProxy = new Proxy(newInstance, {
          get(target, p) {
            if (p === 'add') {
              const newAddFunc: typeof target.add = (features) => {
                const result = target.add(features);
                newInstance.emit('overlaysAdded' as AMap.EventType, features);
                return result;
              };
              return newAddFunc;
            }

            if (p === 'remove') {
              const newRemoveFunc: typeof target.remove = (features) => {
                const result = target.remove(features);
                newInstance.emit('overlaysRemoved' as AMap.EventType, features);
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
    }, [AMap]);

    useImperativeHandle(ref, () => curMap, [curMap]);

    // set city
    useEffect(() => {
      if (cityName) {
        curMap?.setCity(cityName, () => {});
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

    return (
      <div style={CONTAINER_STYLE} ref={$mapContainer}>
        <AMapMapContext.Provider value={curMap}>{children}</AMapMapContext.Provider>
      </div>
    );
  },
);

AMapMap.defaultProps = defaultProps;

export default memo(AMapMap);
