import { useContext } from 'react';

import { AMapMapContextType, AMapMapContext } from '../components/AMapMap';

import { useAMapAPIValue, useAMapAPI } from './useAMapAPI';

export interface useAMapValue extends useAMapAPIValue {
  map: any;
}

export const useAMap: () => useAMapValue = () => {
  const { __AMAP__, __AMAP_UI__ } = useAMapAPI();
  const map: AMapMapContextType = useContext(AMapMapContext);
  return { __AMAP__, __AMAP_UI__, map };
};

export default useAMap;
