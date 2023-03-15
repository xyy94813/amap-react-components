import { useEffect } from 'react';

import useAMap from './useAMap';

const useAMapContainerBinder = (curInstance: any) => {
  const { map } = useAMap();
  useEffect(() => {
    let clearEffect;
    if (!curInstance || !map) {
      return clearEffect;
    }

    clearEffect = () => {
      try {
        // trick way
        map.remove(curInstance);
      } catch (error) {
        // undo anything
      }
    };

    map.add(curInstance);

    return clearEffect;
  }, [curInstance, map]);
};

export default useAMapContainerBinder;
