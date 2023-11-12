export type AMapControlBarProps = Pick<AMap.ControlBarConfig, 'offset'> & {
  position?: AMap.ControlBarConfig['position'];
  showControlButton?: boolean;
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
};
