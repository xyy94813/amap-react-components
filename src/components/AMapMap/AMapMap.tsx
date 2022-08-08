import React, {
  useEffect, useRef, useState, useImperativeHandle,
} from 'react';

import useAMapAPI from '../../hooks/useAMapAPI';

import AMapMapContext from './AMapMapContext';

const CONTAINER_STYLE = { width: '100%', height: '100%' };

// More DOC see: https://a.amap.com/jsapi/static/doc/index.html?v=2#map
export interface MapProps {
  center?: [number, number];
  cityName?: string;
  zoom?: number;
  children?: React.ReactNode;
}

export type MapInstance = any;

const Map = React.forwardRef<MapInstance, MapProps>(
  ({
    children, center, cityName, zoom,
  }: MapProps, ref) => {
    const { __AMAP__: AMap } = useAMapAPI();

    // container ref
    const $mapConatanier = useRef<HTMLDivElement>(null);
    const [curMap, setInstance] = useState<any>(null);

    useEffect(() => {
      let clearEffect;
      if (!$mapConatanier.current || !AMap) {
        return clearEffect;
      }

      const initMap = () => {
        const newInstance = new AMap.Map($mapConatanier.current!);
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
          // Promise.resolve(newInstance).then((instance) => instance.destroy());
        };
        setInstance(newInstance); // fire re-render
      };

      initMap();

      return clearEffect;
    }, [AMap]);

    useImperativeHandle(ref, () => curMap, [curMap]);

    // set city
    useEffect(() => {
      if (cityName) {
        curMap?.setCity?.(cityName);
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
        curMap?.setCenter?.(center);
      }
    }, [center, curMap]);

    return (
      <div style={CONTAINER_STYLE} ref={$mapConatanier}>
        <AMapMapContext.Provider value={curMap}>{children}</AMapMapContext.Provider>
      </div>
    );
  },
);

export default React.memo(Map);
