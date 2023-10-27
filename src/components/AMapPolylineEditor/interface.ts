export type AMapPolylineEditorProps = {
  computeTarget(allPolyline: AMap.Polyline[]): AMap.Polyline | null | undefined;
  disabled?: boolean;
  //
  onChange?: (obj: any) => void;
};
