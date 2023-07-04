import { useEffect, useState } from 'react';

import useAMap from './useAMap';

type UseAMapFNReturnType = ReturnType<typeof useAMap>;

const useAMapPluginInstance = <T = any>(
  pluginName: string,
  initInstance: (AMap: UseAMapFNReturnType['__AMAP__'], amap: UseAMapFNReturnType['map']) => T,
) => {
  const { __AMAP__: AMap, map } = useAMap();
  const [curInstance, setInstance] = useState<T | null>(null);

  useEffect(() => {
    if (!AMap || !map) return;

    const init = () => {
      const instance = initInstance(AMap, map);
      setInstance(instance);
    };

    if (AMap[pluginName]) {
      init();
    } else {
      AMap.plugin([`AMap.${pluginName}`], init);
    }
  }, [AMap, map, pluginName, initInstance]);

  return curInstance;
};

export default useAMapPluginInstance;
