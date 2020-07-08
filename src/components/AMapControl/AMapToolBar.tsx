import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

import { AMapControlConfig } from './types';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */
export interface AMapToolBarConfig extends AMapControlConfig {}

export interface AMapToolBarProps extends AMapToolBarConfig {
  visiable?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapToolBar = ({
  position, offset, visiable = true, onShow, onHide,
}: AMapToolBarProps) => {
  const { __AMAP__: AMap } = useAMap();
  const $instance = useRef<any>(null);
  const [, forceUpdate] = useState(NaN);

  const initConfig = useMemo(() => {
    const conf: AMapControlConfig = {};

    if (position !== undefined) conf.position = position;
    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [position, offset]);

  useEffect(() => {
    let clearEffect;
    if (!AMap) {
      return clearEffect;
    }

    const initInstance = () => {
      const instance = new AMap.ToolBar(initConfig);
      $instance.current = instance;

      clearEffect = () => {
        $instance.current = null;
      };
    };

    if (AMap.AMapToolBar) {
      initInstance();
    } else {
      AMap.plugin('AMap.ToolBar', () => {
        initInstance();
        forceUpdate(NaN); // NaN !== NaN
      });
    }

    return clearEffect;
  }, [AMap, position, offset]);

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

export default React.memo<React.ComponentType<AMapToolBarProps>>(AMapToolBar);
