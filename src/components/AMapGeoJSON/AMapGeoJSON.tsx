import type { FC } from 'react';
import { useEffect, useCallback } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useVisible from '../../hooks/useVisible';
import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';

import type {
  AMapGeoJSONGetOverlayCallback,
  AMapGeoJSONProps,
} from './interface';

const defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  visible: true,
};

const useWithAMap = () => {
  const { __AMAP__: AMap, map } = useAMap();
  return useCallback(
    (fn?: AMapGeoJSONGetOverlayCallback) => {
      if (typeof fn !== 'function') {
        return fn;
      }
      return (geojson: GeoJSON.GeoJSON, lnglat: any) => fn(geojson, lnglat, map, AMap);
    },
    [AMap, map],
  );
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
  const initInstance = useCallback((AMap: typeof global.AMap) => new AMap!.GeoJSON({}), []);
  const curInstance = useAMapPluginInstance<AMap.GeoJSON>('GeoJSON', initInstance);
  const withMap = useWithAMap();

  // change getPolyline function
  useEffect(() => {
    if (!curInstance) return;
    // 绕过 API 文档提供接口，不确定是否存在问题
    // eslint-disable-next-line no-underscore-dangle
    (curInstance as any)._opts.getPolyline = withMap(getPolyline);
  }, [curInstance, getPolyline, withMap]);

  // change getMarker function
  useEffect(() => {
    if (!curInstance) return;
    // 绕过 API 文档提供接口，不确定是否存在问题
    // eslint-disable-next-line no-underscore-dangle
    (curInstance as any)._opts.getMarker = withMap(getMarker);
  }, [curInstance, getMarker, withMap]);

  // change getPolygon function
  useEffect(() => {
    if (!curInstance) return;
    // 绕过 API 文档提供接口，不确定是否存在问题
    // eslint-disable-next-line no-underscore-dangle
    (curInstance as any)._opts.getPolygon = withMap(getPolygon);
  }, [curInstance, getPolygon, withMap]);

  // change data
  useEffect(() => {
    curInstance?.importData?.(geoJSON);
  }, [geoJSON, curInstance]);

  // change options
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
