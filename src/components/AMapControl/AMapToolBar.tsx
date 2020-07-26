import React, { useEffect, useState, useMemo } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */
export interface AMapToolBarProps extends AMap.ToolBarConfig {
  visiable?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapToolBar = ({
  position, offset, visiable = true, onShow, onHide,
}: AMapToolBarProps) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMap.ControlConfig = { position };

    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [position, offset]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.ToolBar(initConfig);
      setInstance(newInstance);
    };

    if (AMap.ToolBar) {
      initInstance();
    } else {
      AMap.plugin('AMap.ToolBar', initInstance);
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

export default React.memo<React.ComponentType<AMapToolBarProps>>(AMapToolBar);
