import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapContainerBinder from '../../hooks/useAMapContainerBinder';

export type AMapGeoJSONGetOverlayCallback = (
  geojson?: GeoJSON.GeoJSON,
  lnglat?: GeoJSON.Point[] | GeoJSON.Point[][] | GeoJSON.Point[][][],
  map?: AMap.Map | null,
  AMap?: (typeof global.AMap) | null,
) => any;

export type AMapGeoJSONProps = AMap.GeoJSONOptions & {
  geoJSON: GeoJSON.GeoJSON;
  getMarker?: AMapGeoJSONGetOverlayCallback;
  getPolygon?: AMapGeoJSONGetOverlayCallback;
  getPolyline?: AMapGeoJSONGetOverlayCallback;
  options: any;
};

const defaultProps = {
  getMarker: undefined,
  getPolygon: undefined,
  getPolyline: undefined,
};

// more see
const AMapGeoJSON: FC<AMapGeoJSONProps> = ({
  geoJSON,
  getPolyline,
  getMarker,
  getPolygon,
  options,
}) => {
  const { __AMAP__: AMap, map } = useAMap();
  const [curInstance, setInstance] = useState<AMap.GeoJSON | null>(null);

  const withMap = useCallback(
    (fn?: AMapGeoJSONGetOverlayCallback) => {
      if (typeof fn !== 'function') {
        return fn;
      }
      return (geojson: GeoJSON.GeoJSON, lnglat: any) => fn(geojson, lnglat, map, AMap);
    },
    [AMap, map],
  );

  useEffect(() => {
    let clearEffect;
    if (!AMap) {
      return clearEffect;
    }

    const initInstance = () => {
      const newInstance = new AMap.GeoJSON({
        // geoJSON,
        getMarker: withMap(getMarker),
        getPolygon: withMap(getPolygon),
        getPolyline: withMap(getPolyline),
      });
      setInstance(newInstance);
    };

    if (AMap.GeoJSON) {
      initInstance();
    } else {
      AMap.plugin('AMap.GeoJSON', initInstance);
    }

    return clearEffect;
  }, [AMap, geoJSON, getPolyline, getMarker, getPolygon, withMap]);

  // change data
  useEffect(() => {
    curInstance?.importData?.(geoJSON);
  }, [geoJSON, curInstance]);

  // change data
  useEffect(() => {
    if (options) {
      curInstance?.setOptions?.(options);
    }
  }, [options, curInstance]);

  // bind map
  useAMapContainerBinder(curInstance);

  return null;
};

AMapGeoJSON.defaultProps = defaultProps;

export default AMapGeoJSON;
