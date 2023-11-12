export type AMapScaleProps = Pick<AMap.ScaleConfig, 'offset'> & {
  position?: AMap.ScaleConfig['position'];
  visible?: boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
};
