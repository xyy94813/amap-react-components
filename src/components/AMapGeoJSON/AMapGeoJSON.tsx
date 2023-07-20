import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useVisible from '../../hooks/useVisible';

import type {
  AMapGeoJSONGetOverlayCallback,
  AMapGeoJSONProps,
} from './interface';

const defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  visible: true,
};

// more see
const AMapGeoJSON: FC<AMapGeoJSONProps> = ({
  geoJSON,
  getPolyline,
  getMarker,
  getPolygon,
  visible,
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

  useVisible(curInstance, visible!);

  // bind map
  useAMapOverlayBinder(curInstance);

  return null;
};

AMapGeoJSON.defaultProps = defaultProps;

export default AMapGeoJSON;
