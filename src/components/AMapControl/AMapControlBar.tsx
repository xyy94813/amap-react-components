import React, { useEffect, useState, useMemo } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import AMapType from '../../types/AMapType';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#ControlBar
 */
export interface AMapControlBarConfig extends AMapType.ControlConfig {
  showControlButton?: boolean;
}

export interface AMapControlBarProps extends AMapControlBarConfig {
  visiable?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapControlBar = ({
  position,
  offset,
  showControlButton = true,
  visiable = true,
  onHide,
  onShow,
}: AMapControlBarProps) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMapControlBarConfig = {};

    if (showControlButton !== undefined) conf.showControlButton = showControlButton;
    if (position !== undefined) conf.position = position;
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
      if (visiable) {
        curInstance.show();
      } else {
        curInstance.hide();
      }
    }
  }, [curInstance, visiable]);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

export default React.memo<React.ComponentType<AMapControlBarProps>>(AMapControlBar);
