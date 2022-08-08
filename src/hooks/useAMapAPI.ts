import { useContext } from 'react';

import { AMapAPIContext } from '../components/AMapAPIContainer';

const useAMapAPI = () => useContext(AMapAPIContext);

export default useAMapAPI;
