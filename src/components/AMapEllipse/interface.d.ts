export type AMapEllipseProps = AMap.EllipseOptions & {
  visible?: boolean;
  onShow?: (event?: AMap.Event<'show'>) => void;
  onHide?: (event?: AMap.Event<'hide'>) => void;
  onClick: (event?: AMap.Event<'click'>) => void;
  onDBLClick: (event?: AMap.Event<'dblclick'>) => void;
  onRightClick: (event?: AMap.Event<'rightclick'>) => void;
  onMousedown: (event?: AMap.Event<'mousedown'>) => void;
  onMouseup: (event?: AMap.Event<'mouseup'>) => void;
  onMouseover: (event?: AMap.Event<'mouseover'>) => void;
  onMouseout: (event?: AMap.Event<'mouseout'>) => void;
  onTouchstart: (event?: AMap.Event<'touchstart'>) => void;
  onTouchmove: (event?: AMap.Event<'touchmove'>) => void;
  onTouchend: (event?: AMap.Event<'touchend'>) => void;
};
