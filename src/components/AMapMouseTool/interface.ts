export type AMapMouseToolProps = {
  type:
  | 'marker'
  | 'circle'
  | 'rectangle'
  | 'polyline'
  | 'polygon'
  | 'measureArea'
  | 'rule'
  | 'rectZoomIn'
  | 'rectZoomOut';
  options?:
  | AMap.MarkerOptions
  | AMap.PolylineOptions
  | AMap.PolygonOptions
  | AMap.RectangleOptions
  | AMap.CircleOptions
  | AMap.PolylineOptions
  | AMap.PolygonOptions
  | AMap.PolygonOptions
  | AMap.PolygonOptions;
  onCompleted?: (e: any) => void;
};
