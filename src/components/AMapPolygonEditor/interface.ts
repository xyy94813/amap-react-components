export type AMapPolygonEditorProps = {
  computeTarget(allPolygons: AMap.Polygon[]): AMap.Polygon | null | undefined;
  disabled?: boolean;
  //
  computeAdsorbPolygons?:
  ((allPolygons: AMap.Polygon[])=> AMap.Polygon[] | null | undefined) | null;
  onChange?: (obj: any) => void;
};
