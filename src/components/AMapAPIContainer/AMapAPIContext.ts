import { createContext } from 'react';

export type AMapAPIContextValue = {
  __AMAP__: typeof global.AMap | null;
  __AMAP_UI__: typeof global.AMapUI | null;
};

const defaultContext: AMapAPIContextValue = {
  __AMAP__: null,
  __AMAP_UI__: null,
};

const AMapAPIContext = createContext<AMapAPIContextValue>(defaultContext);

export default AMapAPIContext;
