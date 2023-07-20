/* eslint-disable react/default-props-match-prop-types */
import type { FC } from 'react';
import {
  useCallback,
  useMemo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useSetter from '../../hooks/useSetter';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import type { AMapEllipseProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#maptype
 */

const defaultProps = {
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const AMapEllipse: FC<AMapEllipseProps> = ({
  center,
  radius,
  zIndex,
  //   height,
  draggable,
  extData,
  cursor,
  bubble,
  // style properties
  fillColor,
  fillOpacity,
  strokeColor,
  strokeOpacity,
  strokeWeight,
  strokeStyle,
  strokeDasharray,
  //
  visible,
  // event properties
  onHide,
  onShow,
  onClick,
  onDBLClick,
  onRightClick,
  onMousedown,
  onMouseup,
  onMouseover,
  onMouseout,
  onTouchstart,
  onTouchmove,
  onTouchend,
}) => {
  const initInstance = useCallback((AMap) => new AMap!.Ellipse(), []);
  const curInstance = useAMapPluginInstance<AMap.MapType>('MapType', initInstance);

  useSetter<Parameters<AMap.Ellipse['setCenter']>>(curInstance, 'setCenter', center!);
  useSetter<Parameters<AMap.Ellipse['setRadius']>>(curInstance, 'setRadius', radius!);
  //   useSetter<Parameters<AMap.Ellipse['setHeight']>>(curInstance, 'setHeight', height!);
  useSetter<Parameters<AMap.Ellipse['setExtData']>>(curInstance, 'setExtData', extData!);

  const options: Parameters<AMap.Ellipse['setOptions']>[0] = useMemo(() => {
    const tmp = Object.entries({
      zIndex,
      bubble,
      cursor,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeStyle,
      strokeOpacity,
      strokeWeight,
      strokeDasharray,
      draggable,
    })
      .filter(([,val]) => val !== undefined && val !== null)
      .reduce((finallyObj, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        finallyObj[key] = val;
        return finallyObj;
      }, {});
    return tmp;
  }, [
    zIndex,
    bubble,
    cursor,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeStyle,
    strokeOpacity,
    strokeWeight,
    strokeDasharray,
    draggable,
  ]);

  useSetter<Parameters<AMap.Ellipse['setOptions']>>(curInstance, 'setOptions', options!);

  useVisible(curInstance, !!visible);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);
  useAMapEventBinder(curInstance, 'click', onClick);
  useAMapEventBinder(curInstance, 'dblclick', onDBLClick);
  useAMapEventBinder(curInstance, 'rightclick', onRightClick);
  useAMapEventBinder(curInstance, 'mousedown', onMousedown);
  useAMapEventBinder(curInstance, 'mouseup', onMouseup);
  useAMapEventBinder(curInstance, 'mouseover', onMouseover);
  useAMapEventBinder(curInstance, 'mouseout', onMouseout);
  useAMapEventBinder(curInstance, 'touchstart', onTouchstart);
  useAMapEventBinder(curInstance, 'touchmove', onTouchmove);
  useAMapEventBinder(curInstance, 'touchend', onTouchend);

  useAMapOverlayBinder(curInstance);

  return null;
};

AMapEllipse.defaultProps = defaultProps;

export default AMapEllipse;
