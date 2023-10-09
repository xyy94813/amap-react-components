import {
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';

import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';

import type { AMapMouseToolProps } from './interface';

const initInstance = (AMap: typeof global.AMap, map: AMap.Map) => new AMap!.MouseTool(map!);
/**
 *
 * Origin Docs See:
 * https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool
 *
 */
const AMapMouseTool = forwardRef<AMap.MouseTool, AMapMouseToolProps>(
  ({
    type,
    options,
    onCompleted,
  }, ref) => {
    const curInstance = useAMapPluginInstance<AMap.MouseTool>(
      'MouseTool',
      initInstance,
    );

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
