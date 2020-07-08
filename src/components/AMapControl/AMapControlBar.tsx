import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import { AMapControlConfig } from './types';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#ControlBar
 */
export interface AMapControlBarConfig extends AMapControlConfig {
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
  const $instance = useRef<any>(null);
  const [, forceUpdate] = useState(NaN); // forceUpdate after async init

  const initConfig = useMemo(() => {
    const conf: AMapControlBarConfig = {};

    if (position !== undefined) conf.position = position;
    if (offset !== undefined) conf.offset = offset;
    if (showControlButton !== undefined) conf.showControlButton = showControlButton;

    return conf;
  }, [position, offset]);

  useEffect(() => {
    let clearEffect;
    if (!AMap) {
      return clearEffect;
    }

    const initInstance = () => {
      const instance = new AMap.ControlBar(initConfig);
      $instance.current = instance;

      clearEffect = () => {
        $instance.current = null;
      };
    };

    if (AMap.ControlBar) {
      initInstance();
    } else {
      AMap.plugin('AMap.ControlBar', () => {
        initInstance();
        forceUpdate(NaN); // NaN !== NaN
      });
    }

    return clearEffect;
  }, [AMap, initConfig]);

  const curInstance = $instance.current;

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
