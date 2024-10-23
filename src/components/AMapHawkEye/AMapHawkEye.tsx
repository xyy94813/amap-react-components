/* eslint-disable react/default-props-match-prop-types */
import type { FC } from 'react';
import {
  useEffect, useMemo, useCallback, memo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useVisible from '../../hooks/useVisible';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

import type { AMapHawkEyeProps } from './interface';
/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */

const defaultProps = {
  showButton: true,
  isOpen: true,
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const AMapHawkEye: FC<AMapHawkEyeProps> = ({
  autoMove,
  showRectangle,
  showButton,
  isOpen,
  mapStyle,
  width,
  height,
  offset,
  borderStyle,
  borderColor,
  borderRadius,
  borderWidth,
  buttonSize,
  visible,
  onShow,
  onHide,
}) => {
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

  const initInstance = useCallback(
    (AMap: typeof global.AMap) => new AMap!.HawkEye(initConfig),
    [initConfig],
  );
  const curInstance = useAMapPluginInstance<AMap.HawkEye>(
    'HawkEye',
    initInstance,
  );

  // 是否展开
  useEffect(() => {
    if (isOpen) {
      curInstance?.open?.();
    } else {
      curInstance?.close?.();
    }
  }, [curInstance, isOpen]);

  useVisible(curInstance, !!visible);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapHawkEye.defaultProps = defaultProps;

const AMapHawkEyeMemo = memo(AMapHawkEye);

AMapHawkEyeMemo.displayName = 'AMapHawkEye'; // for auto-docs

export default AMapHawkEyeMemo;
