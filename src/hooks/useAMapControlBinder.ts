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
      // amap 与 control 进行解绑存在 BUG
      controlInstance.remove(map);
    };

    controlInstance.addTo(map);

    return clearEffect;
  }, [map, controlInstance]);
};

export default useAMapControlBinder;
