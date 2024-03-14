import { isLatLngArr } from './amapHelper';

/**
 * 补充最后一个 Position。
 * 支持转换至 GeoJSON.Polygon 和 GeoJSON.MultiplePolygon 的 coords
 * 将 AMap 多边形路径转换为 GeoJSON 坐标。
 *
 * @param path - 要转换的 AMap.Polygon 路径。
 * @returns 转换后的 GeoJSON 坐标。
  */
const amapPolygonPath2GeoJSONCoords = (path: ReturnType<AMap.Polygon['getPath']>): any => {
  if (!Array.isArray(path)) throw Error('invalid path');

  // 检查路径是否是一个 LatLng 数组，并且至少有一个元素
  if (isLatLngArr(path) && path.length > 0) {
    // 将路径中的每个 LatLng 项转换为一个坐标数组
    const coords = path.map((item) => item.toArray());
    // 将第一个坐标添加到末尾以闭合多边形
    coords.push(coords[0].slice(0) as [number, number]);
    return coords;
  }

  // 递归地将每个嵌套的路径转换为 GeoJSON 坐标
  return (path as any)!.map(amapPolygonPath2GeoJSONCoords);
};

export default amapPolygonPath2GeoJSONCoords;
