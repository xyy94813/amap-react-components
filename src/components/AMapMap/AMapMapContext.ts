import * as React from 'react';

export type AMapMapContextValue = AMap.Map | null;

const defaultContext = null;

export const AMapMapContext = React.createContext<AMapMapContextValue>(defaultContext);

export default AMapMapContext;
