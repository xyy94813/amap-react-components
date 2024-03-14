export type AMapMarkerProps = AMap.MarkerOptions & {
  position: AMap.LngLatLike;
  anchor?:
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
  //
  visible?: boolean;
  // isTop?: boolean;
  //
  onHide?: (event?: any) => void;
  onShow?: (event?: any) => void;
  onClick?: (event?: any) => void;
  onDBLClick?: (event?: any) => void;
  onRightClick?: (event?: any) => void;
  onMousemove?: (event?: any) => void;
  onMousedown?: (event?: any) => void;
  onMouseup?: (event?: any) => void;
  onMouseover?: (event?: any) => void;
  onMouseout?: (event?: any) => void;
  onTouchstart?: (event?: any) => void;
  onTouchmove?: (event?: any) => void;
  onTouchend?: (event?: any) => void;
  onDragstart?: (event?: any) => void;
  onDragging?: (event?: any) => void;
  onDragend?: (event?: any) => void;
  onMoving?: (event?: any) => void;
  onMoveEnd?: (event?: any) => void;
  onMoveAlong?: (event?: any) => void;
};
