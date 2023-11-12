export type AMapAPIContextValue = {
  __AMAP__: typeof global.AMap | null;
  __AMAP_UI__: typeof global.AMapUI | null;
};

export type AMapAPIHocProps = {
  children: React.ReactNode;
};
