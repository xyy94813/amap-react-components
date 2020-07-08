import { useEffect } from 'react';
import useAMap from './useAMap';

const useAMapControlBinder = (controlInstance: any) => {
  const { map } = useAMap();

  useEffect(() => {
    let clearEffect;

    if (!controlInstance || !map) {
      return clearEffect;
    }

    controlInstance.addTo(map);
    clearEffect = () => {
      controlInstance.remove(map);
    };

    return clearEffect;
  }, [map, controlInstance]);
};

export default useAMapControlBinder;
