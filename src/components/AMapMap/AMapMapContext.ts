import * as React from 'react';

export type AMapMapContextType = any;

const defaultContext: AMapMapContextType = null;

export const AMapMapContext: React.Context<AMapMapContextType> = React.createContext(
  defaultContext,
);

export default AMapMapContext;
