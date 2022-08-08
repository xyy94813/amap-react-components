import { useContext } from 'react';

import { AMapMapContext, AMapMapContextValue } from '../components/AMapMap';
import { AMapAPIContextValue } from '../components/AMapAPIContainer';

import useAMapAPI from './useAMapAPI';

const useAMap = (): AMapAPIContextValue & { map: AMapMapContextValue } => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { __AMAP__, __AMAP_UI__ } = useAMapAPI();
  const map = useContext(AMapMapContext);
  return { __AMAP__, __AMAP_UI__, map };
};

export default useAMap;
