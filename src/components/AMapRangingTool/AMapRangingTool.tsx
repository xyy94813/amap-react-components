import type { FC } from 'react';
import { useEffect } from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

import type { AMapRangingToolProps } from './interface';

const initInstance = (
  AMap: typeof globalThis.AMap,
  map: AMap.Map, //
) => new AMap!.RangingTool(map, {} as any);

const AMapRangingTool: FC<AMapRangingToolProps> = ({
  disabled,
  onNodeAdded,
  onNodeRemoved,
  onEnd,
}) => {
  const curInstance = useAMapPluginInstance<AMap.RangingTool>('RangingTool', initInstance);

  useEffect(() => {
    if (!curInstance) return;
    if (disabled) {
      curInstance.turnOff();
    } else {
      curInstance.turnOn();
    }
  }, [disabled, curInstance]);

  useAMapEventBinder(curInstance, 'addnode', onNodeAdded);
  useAMapEventBinder(curInstance, 'removenode', onNodeRemoved);
  useAMapEventBinder(curInstance, 'end', onEnd);

  return null;
};

AMapRangingTool.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  disabled: false,
};

export default AMapRangingTool;
