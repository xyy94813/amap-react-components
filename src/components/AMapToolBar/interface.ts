export type AMapToolBarProps = Pick<AMap.ToolBarConfig, 'offset'> & {
  position?: AMap.ControlBarConfig['position'];
  visible?: boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
};
