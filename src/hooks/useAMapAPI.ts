import { useContext } from 'react';

import { AMapAPIContext } from '../components/AMapAPIContainer';

export const useAMapAPI = () => useContext(AMapAPIContext);

export default useAMapAPI;
