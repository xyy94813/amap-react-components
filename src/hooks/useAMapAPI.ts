import { useContext } from 'react';

import { AMapAPIContextValue, AMapAPIContext } from '../components/AMapAPIContainer/AMapAPIContext';

export type useAMapAPIValue = AMapAPIContextValue;

export const useAMapAPI: () => useAMapAPIValue = () => {
  const context: useAMapAPIValue = useContext(AMapAPIContext);
  return context;
};

export default useAMapAPI;
