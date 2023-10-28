import { createContext } from 'react';

import type { AMapMapContextValue } from './interface';

const defaultContext = null;

const AMapMapContext = createContext<AMapMapContextValue>(defaultContext);

export default AMapMapContext;
