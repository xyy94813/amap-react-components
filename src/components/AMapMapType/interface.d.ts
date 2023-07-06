export type AMapMapTypeProps = AMap.MapTypeOptions & {
  visible: boolean;
  onHide: (event?: any) => void;
  onShow: (event?: any) => void;
};
