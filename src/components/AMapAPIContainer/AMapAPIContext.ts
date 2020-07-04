import React from 'react';

export interface AMapAPIContextType {
  __AMAP__: any;
  __AMAP_UI__?: any;
}

const defaultContext: AMapAPIContextType = {
  __AMAP__: null,
  __AMAP_UI__: null,
};

export const AMapAPIContext: React.Context<AMapAPIContextType> = React.createContext(
  defaultContext,
);

export default AMapAPIContext;
