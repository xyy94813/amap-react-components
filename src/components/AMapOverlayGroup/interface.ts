import type { ReactNode } from 'react';

export type AMapOverlayGroupProps = {
  options?: AMap.PolygonSharedOptions;
  children: ReactNode;
  visible?: Boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
  onClick?: (event?: any) => void;
  onDBLClick?: (event?: any) => void;
  onRightClick?: (event?: any) => void;
  onMousedown?: (event?: any) => void;
  onMouseup?: (event?: any) => void;
  onMouseover?: (event?: any) => void;
  onMouseout?: (event?: any) => void;
  onTouchstart?: (event?: any) => void;
  onTouchmove?: (event?: any) => void;
  onTouchend?: (event?: any) => void;
};
