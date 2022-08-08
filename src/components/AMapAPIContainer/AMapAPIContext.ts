import React from 'react';

export interface AMapAPIContextValue {
  __AMAP__: typeof global.AMap | null;
  __AMAP_UI__?: any;
}

const defaultContext: AMapAPIContextValue = {
  __AMAP__: null,
  __AMAP_UI__: null,
};

const AMapAPIContext = React.createContext<AMapAPIContextValue>(defaultContext);

export default AMapAPIContext;
