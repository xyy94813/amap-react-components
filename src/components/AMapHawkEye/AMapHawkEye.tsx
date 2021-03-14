import React, { useEffect, useState, useMemo } from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */

export interface AMapHawkEyeProps extends AMap.HawkEyeOptions {
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapHawkEye = ({
  autoMove,
  showRectangle,
  showButton = true,
  isOpen = true,
  mapStyle,
  width,
  height,
  offset,
  borderStyle,
  borderColor,
  borderRadius,
  borderWidth,
  buttonSize,
  visible = true,
  onShow,
  onHide,
}: AMapHawkEyeProps) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMap.HawkEyeOptions = {};

    if (autoMove !== undefined) conf.autoMove = autoMove;
    if (showRectangle !== undefined) conf.showRectangle = showRectangle;
    if (showButton !== undefined) conf.showButton = showButton;
    // if (isOpen !== undefined) conf.isOpen = isOpen; 有额外的 effect 处理该属性
    if (mapStyle !== undefined) conf.mapStyle = mapStyle;
    if (width !== undefined) conf.width = width;
    if (height !== undefined) conf.height = height;
    if (offset !== undefined) conf.offset = offset;
    if (borderStyle !== undefined) conf.borderStyle = borderStyle;
    if (borderColor !== undefined) conf.borderColor = borderColor;
    if (borderRadius !== undefined) conf.borderRadius = borderRadius;
    if (borderWidth !== undefined) conf.borderWidth = borderWidth;
    if (buttonSize !== undefined) conf.buttonSize = buttonSize;

    return conf;
  }, [
    autoMove,
    showRectangle,
    showButton,
    mapStyle,
    width,
    height,
    offset,
    borderStyle,
    borderColor,
    borderRadius,
    borderWidth,
    buttonSize,
  ]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.HawkEye(initConfig);
      setInstance(newInstance);
    };

    if (AMap.HawkEye) {
      initInstance();
    } else {
      AMap.plugin('AMap.HawkEye', initInstance);
    }
  }, [AMap, initConfig]);

  // 是否展开
  useEffect(() => {
    if (curInstance) {
      if (isOpen) {
        curInstance.open();
      } else {
        curInstance.close();
      }
    }
  }, [curInstance, isOpen]);

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

export default React.memo<React.ComponentType<AMapHawkEyeProps>>(AMapHawkEye);
