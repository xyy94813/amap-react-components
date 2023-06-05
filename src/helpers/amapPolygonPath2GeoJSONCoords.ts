const isLatLng = (p: any): p is AMap.LngLat => !!('lat' in p && 'lng' in p);
const isLatLngArr = (p: any): p is AMap.LngLat[] => p.every(isLatLng);

/**
 * 补充最后一个 Position。
 * 支持转换至 GeoJSON.Polygon 和 GeoJSON.MultiplePolygon 的 coords
 */
const amapPolygonPath2GeoJSONCoords = (
  path: ReturnType<AMap.Polygon['getPath']>,
): typeof path => {
  if (isLatLngArr(path)) {
    const coords = path.map((item) => item.toArray());
    coords.push(coords[0].slice(0) as [number, number]);
    return coords;
  }

  // trick way
  return (path as AMap.LngLat[][][])!.map(amapPolygonPath2GeoJSONCoords);
};

export default amapPolygonPath2GeoJSONCoords;
