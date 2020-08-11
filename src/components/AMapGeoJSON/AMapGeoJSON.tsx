import { useState, useEffect, useCallback } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapContainerBinder from '../../hooks/useAMapContainerBinder';

export type AMapGeoJSONGetOverlayCallback = (
  geojson?: GeoJSON.GeoJSON,
  lnglat?: GeoJSON.Point[] | GeoJSON.Point[][] | GeoJSON.Point[][][],
  map?: AMap.Map | null,
  AMap?: AMap.AMap,
) => any;

export interface AMapGeoJSONProps extends AMap.GeoJSONOptions {
  geoJSON: GeoJSON.GeoJSON;
  getMarker?: AMapGeoJSONGetOverlayCallback;
  getPolygon?: AMapGeoJSONGetOverlayCallback;
  getPolyline?: AMapGeoJSONGetOverlayCallback;
}

// more see
function AMapGeoJSON({
  geoJSON, getPolyline, getMarker, getPolygon,
}: AMapGeoJSONProps) {
  const { __AMAP__: AMap, map } = useAMap();
  const [curInstance, setInstance] = useState<AMap.GeoJSON | null>(null);

  const withMap = useCallback((fn?: AMapGeoJSONGetOverlayCallback) => {
    if (typeof fn !== 'function') {
      return fn;
    }
    return (geojson: GeoJSON.GeoJSON, lnglat: any) => fn(geojson, lnglat, map, AMap);
  }, [AMap, map]);

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
    if (!curInstance) return;

    curInstance.importData(geoJSON);
  }, [geoJSON, curInstance]);

  // bind map
  useAMapContainerBinder(curInstance);

  return null;
}

export default AMapGeoJSON;
