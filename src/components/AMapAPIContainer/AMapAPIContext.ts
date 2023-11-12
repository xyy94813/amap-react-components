import { createContext } from 'react';

import type { AMapAPIContextValue } from './interface';

const defaultContext: AMapAPIContextValue = {
  __AMAP__: null,
  __AMAP_UI__: null,
};

const AMapAPIContext = createContext<AMapAPIContextValue>(defaultContext);

export default AMapAPIContext;
