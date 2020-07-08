import React, {
  useEffect, useState, useRef, useMemo,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */
export interface AMapHawkEyeOptions {
  autoMove?: boolean; // 是否随主图视口变化移动
  showRectangle?: boolean; // 是否显示视口矩形
  showButton?: boolean; // 是否显示打开关闭的按钮
  isOpen?: boolean; // 默认是否展开
  mapStyle?: string; // 缩略图要显示的地图自定义样式，如'amap://styles/dark'
  // layers: array; // 缩略图要显示的图层类型，默认为普通矢量地图
  width?: string; // 缩略图的宽度，同CSS，如'200px'
  height?: string; // 缩略图的高度，同CSS，如'200px'
  offset?: [number, number]; // 缩略图距离地图右下角的像素距离，如 [2,2]
  borderStyle?: string; // 缩略图的边框样式，同CSS，如"double solid solid double"
  borderColor?: string; // 缩略图的高度，同CSS，如'silver'
  borderRadius?: string; // 缩略图的高度，同CSS，如'5px'
  borderWidth?: string; // 缩略图的高度，同CSS，如'2px'
  buttonSize?: string; // 箭头按钮的像素尺寸，同CSS，如'12px'
}

export interface AMapHawkEyeProps extends AMapHawkEyeOptions {
  visiable?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
}

const AMapHawkEye = ({
  autoMove,
  showRectangle,
  showButton,
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
  visiable = true,
  onShow,
  onHide,
}: AMapHawkEyeProps) => {
  const { __AMAP__: AMap } = useAMap();
  const $instance = useRef<any>(null);
  const [, forceUpdate] = useState(NaN);

  const initConfig = useMemo(() => {
    const conf: AMapHawkEyeOptions = {};

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
    let clearEffect;
    if (!AMap) {
      return clearEffect;
    }

    const initInstance = () => {
      const instance = new AMap.HawkEye(initConfig);
      $instance.current = instance;

      clearEffect = () => {
        $instance.current = null;
      };
    };

    if (AMap.AMapHawkEye) {
      initInstance();
    } else {
      AMap.plugin('AMap.HawkEye', () => {
        initInstance();
        forceUpdate(NaN); // NaN !== NaN
      });
    }

    return clearEffect;
  }, [AMap, initConfig]);

  const curInstance = $instance.current;

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

export default React.memo<React.ComponentType<AMapHawkEyeProps>>(AMapHawkEye);
