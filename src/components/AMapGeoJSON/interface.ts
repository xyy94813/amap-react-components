export type AMapGeoJSONGetOverlayCallback = (
  geojson?: GeoJSON.GeoJSON,
  lnglat?: GeoJSON.Position[] | GeoJSON.Position[][] | GeoJSON.Position[][][],
  map?: AMap.Map | null,
  AMap?: (typeof global.AMap) | null,
) => any;

export type AMapGeoJSONProps = AMap.GeoJSONOptions & {
  geoJSON: GeoJSON.GeoJSON;
  getMarker?: AMapGeoJSONGetOverlayCallback;
  getPolygon?: AMapGeoJSONGetOverlayCallback;
  getPolyline?: AMapGeoJSONGetOverlayCallback;
  visible?: boolean;
  options?: Parameters<AMap.OverlayGroup['setOptions']>[0];
};
