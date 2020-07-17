import { useEffect } from 'react';
import useAMap from './useAMap';

const useAMapControlBinder = (controlInstance: any) => {
  const { map } = useAMap();

  useEffect(() => {
    let clearEffect;

    if (!controlInstance || !map) {
      return clearEffect;
    }

    clearEffect = () => {
      map.removeControl(controlInstance);
    };

    map.addControl(controlInstance);

    return clearEffect;
  }, [map, controlInstance]);
};

export default useAMapControlBinder;
