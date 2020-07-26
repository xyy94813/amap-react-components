import { useContext } from 'react';

import { AMapMapContext, AMapMapContextValue } from '../components/AMapMap';

import { useAMapAPIValue, useAMapAPI } from './useAMapAPI';

export interface useAMapValue extends useAMapAPIValue {
  map: AMapMapContextValue;
}

export const useAMap: () => useAMapValue = () => {
  const { __AMAP__, __AMAP_UI__ } = useAMapAPI();
  const map = useContext(AMapMapContext);
  return { __AMAP__, __AMAP_UI__, map };
};

export default useAMap;
