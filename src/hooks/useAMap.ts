import { useContext } from 'react';

import { MapContextType, MapContext } from '../components/Map';

import { useAMapAPIValue, useAMapAPI } from './useAMapAPI';

export interface useAMapValue extends useAMapAPIValue {
  map: any;
}

export const useAMap: () => useAMapValue = () => {
  const { __AMAP__, __AMAP_UI__ } = useAMapAPI();
  const map: MapContextType = useContext(MapContext);
  return { __AMAP__, __AMAP_UI__, map };
};

export default useAMap;
