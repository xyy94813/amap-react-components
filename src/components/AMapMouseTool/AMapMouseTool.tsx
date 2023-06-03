import {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

import type { AMapMouseToolProps } from './interface';

/**
 *
 * Origin Docs See:
 * https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool
 *
 */
const AMapMouseTool = forwardRef<AMap.MouseTool, AMapMouseToolProps>(
  ({
    type, options, onCompleted,
  }, ref) => {
    const { __AMAP__: AMap, map } = useAMap();
    const [curInstance, setInstance] = useState<AMap.MouseTool | null>(null);

    useEffect(() => {
      if (!AMap || !map) return;

      const init = () => {
        const instance = new AMap.MouseTool(map);
        setInstance(instance);
      };

      if (AMap.MouseTool) {
        init();
      } else {
        AMap.plugin(['AMap.MouseTool'], init);
      }
    }, [AMap, map]);

    useImperativeHandle(ref, () => curInstance!, [curInstance]);

    useAMapEventBinder(curInstance, 'draw', onCompleted);

    useEffect(() => {
      let clearEffect;
      if (!curInstance) return clearEffect;

      clearEffect = () => curInstance.close(false);

      curInstance[type]((options ?? {}) as { [k: string]: any });

      return clearEffect;
    }, [curInstance, options, type]);

    return null;
  },
);

AMapMouseTool.defaultProps = {
  options: {},
  onCompleted: undefined,
};

export default AMapMouseTool;
