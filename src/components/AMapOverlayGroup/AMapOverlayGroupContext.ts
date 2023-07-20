import { createContext } from 'react';

const AMapOverlayGroupContext = createContext<AMap.OverlayGroup | null>(null);

export default AMapOverlayGroupContext;
