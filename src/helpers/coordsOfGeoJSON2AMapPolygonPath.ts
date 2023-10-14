import { isLineCoords, isRingLineCoords } from './geoJSONHelper';

const coordsOfGeoJSONRingLine2AMapPolygonPath = (coords: GeoJSON.Position[]): typeof coords => {
  const len = coords.length;
  return coords.slice(0, len - 1);
};

/**
 * 去掉最后一个 Position 点。
 * 支持 GeoJSON.Polygon 和 GeoJSON.MultiplePolygon 转换
 */
const coordsOfGeoJSON2AMapPolygonPath = (
  coords: GeoJSON.Position[] | GeoJSON.Polygon['coordinates'] | GeoJSON.MultiPolygon['coordinates'],
): typeof coords => {
  if (isRingLineCoords(coords as GeoJSON.Position[])) {
    return coordsOfGeoJSONRingLine2AMapPolygonPath(coords as GeoJSON.Position[]);
  }

  if (isLineCoords(coords)) {
    return coords;
  }

  // trick way
  return (coords as GeoJSON.MultiPolygon['coordinates']).map(coordsOfGeoJSON2AMapPolygonPath) as typeof coords;
};

export default coordsOfGeoJSON2AMapPolygonPath;
