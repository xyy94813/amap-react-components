import React, { useEffect, useState, useMemo } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#ControlBar
 */

export interface AMapControlBarProps extends AMap.ControlBarConfig {
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapControlBar = ({
  position = 'LT',
  offset,
  showControlButton = true,
  visible = true,
  onHide,
  onShow,
}: AMapControlBarProps) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMap.ControlBarConfig = {
      position,
    };

    if (showControlButton !== undefined) conf.showControlButton = showControlButton;
    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [showControlButton, position, offset]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.ControlBar(initConfig);
      setInstance(newInstance);
    };

    if (AMap.ControlBar) {
      initInstance();
    } else {
      AMap.plugin('AMap.ControlBar', initInstance);
    }
  }, [AMap, initConfig]);

  useEffect(() => {
    if (curInstance) {
      if (visible) {
        curInstance.show();
      } else {
        curInstance.hide();
      }
    }
  }, [curInstance, visible]);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

export default React.memo<React.ComponentType<AMapControlBarProps>>(AMapControlBar);
