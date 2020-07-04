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
  children?: React.ReactElement;
}

export type MapInstance = any;

const safelyDestroyMapInstance = ($ref: React.RefObject<MapInstance>) => {
  if (!$ref.current) {
    return;
  }
  $ref.current.destroy();
};

const safelyHandleMapInstance = (mapInstance: MapInstance, method: string, ...args: any[]) => {
  if (!mapInstance || !mapInstance[method]) {
    return;
  }
  mapInstance[method](...args);
};

const Map = React.forwardRef<MapInstance, MapProps>(
  ({
    children, center, cityName, zoom,
  }: MapProps, ref) => {
    const { __AMAP__: AMap } = useAMapAPI();

    // container ref
    const $mapConatanier = useRef(null);
    // map instance ref
    const $map = useRef(null);
    const [, setInitialized] = useState(false);

    useEffect(() => {
      if (!$mapConatanier.current || !AMap) {
        return () => {};
      }

      const initMap = () => {
        $map.current = new AMap.Map($mapConatanier.current);
        setInitialized(true); // fire re-render
      };

      initMap();

      const clearEffect = () => {
        $map.current = null;
        /**
         * 异步的 destroy map，
         * 避免子组件 effect 的 “返回值函数” 中调用组件与 map container 进行解绑
         */
        Promise.resolve($map).then(safelyDestroyMapInstance);
      };

      return clearEffect;
    }, [AMap]);

    const curMap = $map.current;

    useImperativeHandle(ref, () => curMap, [curMap]);

    // set city
    useEffect(() => {
      if (cityName) {
        safelyHandleMapInstance(curMap, 'setCity', cityName);
      }
    }, [cityName, curMap]);

    // set zoom
    useEffect(() => {
      if (zoom) {
        safelyHandleMapInstance(curMap, 'setZoom', zoom);
      }
    }, [zoom, curMap]);

    // set center
    useEffect(() => {
      if (center) {
        safelyHandleMapInstance(curMap, 'setCenter', center);
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
