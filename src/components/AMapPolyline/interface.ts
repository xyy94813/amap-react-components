export type AMapPolylineProps = AMap.PolylineOptions & {
  visible?: boolean;
  onHide?: (e: any) => void;
  onShow?: (e: any) => void;
  onClick?: (e: any) => void;
  onDBLClick?: (e: any) => void;
  onRightClick?: (e: any) => void;
  onMousedown?: (e: any) => void;
  onMouseup?: (e: any) => void;
  onMouseover?: (e: any) => void;
  onMouseout?: (e: any) => void;
  onDragstart?: (e: any) => void;
  onDragging?: (e: any) => void;
  onDragend?: (e: any) => void;
  onTouchstart?: (e: any) => void;
  onTouchmove?: (e: any) => void;
  onTouchend?: (e: any) => void;
};
