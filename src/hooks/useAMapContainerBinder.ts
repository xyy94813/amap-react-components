import { useEffect } from 'react';

import useAMap from './useAMap';

const useAMapContainerBinder = (curInstance: any) => {
  const { map } = useAMap();
  useEffect(() => {
    let clearEffect;
    if (!curInstance || !map) {
      return clearEffect;
    }

    map.add(curInstance);

    clearEffect = () => {
      map.remove(curInstance);
    };
    return clearEffect;
  }, [curInstance, map]);
};

export default useAMapContainerBinder;
