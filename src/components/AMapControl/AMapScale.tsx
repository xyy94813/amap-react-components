import React, { useEffect, useState, useMemo } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

import { AMapControlConfig } from './types';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */
export interface AMapScaleConfig extends AMapControlConfig {}

export interface AMapScaleProps extends AMapScaleConfig {
  visiable?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapScale = ({
  position, offset, visiable = true, onShow, onHide,
}: AMapScaleProps) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMapControlConfig = {};

    if (position !== undefined) conf.position = position;
    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [position, offset]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.Scale(initConfig);
      setInstance(newInstance);
    };

    if (AMap.Scale) {
      initInstance();
    } else {
      AMap.plugin('AMap.Scale', initInstance);
    }
  }, [AMap, position, offset]);

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

export default React.memo<React.ComponentType<AMapScaleProps>>(AMapScale);
