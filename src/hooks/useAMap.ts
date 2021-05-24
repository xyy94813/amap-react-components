import { useContext } from 'react';

import { AMapMapContext, AMapMapContextValue } from '../components/AMapMap';
import { AMapAPIContextValue } from '../components/AMapAPIContainer';

import { useAMapAPI } from './useAMapAPI';

export const useAMap = (): AMapAPIContextValue & { map: AMapMapContextValue } => {
  const { __AMAP__, __AMAP_UI__ } = useAMapAPI();
  const map = useContext(AMapMapContext);
  return { __AMAP__, __AMAP_UI__, map };
};

export default useAMap;
