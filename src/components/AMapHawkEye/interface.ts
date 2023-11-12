export type AMapHawkEyeProps = AMap.HawkEyeOptions & {
  showButton?: boolean;
  isOpen?: boolean;
  visible?: boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
};
