/* eslint-disable react/default-props-match-prop-types */
import {
  forwardRef,
  useImperativeHandle,
  useCallback,
  useMemo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useSetter from '../../hooks/useSetter';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import type { AMapRectangleProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#rectangle
 */

const defaultProps = {
  visible: true,
};

const AMapRectangle = forwardRef<AMap.Rectangle, AMapRectangleProps>(({
  bounds,
  zIndex,
  bubble,
  cursor,
  draggable,
  visible,
  extData,
  height,

  // styles
  strokeColor,
  strokeOpacity,
  strokeWeight,
  strokeStyle,
  strokeDasharray,
  fillColor,
  fillOpacity,
  // event properties
  onShow,
  onHide,
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
}, ref) => {
  const initInstance = useCallback((AMap: typeof global.AMap) => new AMap!.Rectangle(), []);
  const curInstance = useAMapPluginInstance<AMap.Rectangle>(
    'Rectangle',
    initInstance,
  );

  useImperativeHandle(ref, () => curInstance!, [curInstance]);

  useSetter<Parameters<AMap.Rectangle['setExtData']>>(
    curInstance,
    'setExtData',
    extData!,
  );

  const options: Parameters<AMap.Rectangle['setOptions']>[0] = useMemo(() => {
    const opts = Object.entries({
      // style options
      zIndex,
      cursor,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      strokeStyle,
      strokeDasharray,
      fillColor,
      fillOpacity,
      // other options
      draggable,
      bubble,
    })
      .filter(([, val]) => val !== undefined && val !== null)
      .reduce((finallyObj: Record<string, any>, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        finallyObj[key] = val;
        return finallyObj;
      }, {});
    return opts;
  }, [
    bubble,
    cursor,
    draggable,
    fillColor,
    fillOpacity,
    strokeColor,
    strokeDasharray,
    strokeOpacity,
    strokeStyle,
    strokeWeight,
    zIndex,
  ]);
  useSetter<Parameters<AMap.Rectangle['setOptions']>>(
    curInstance,
    'setOptions',
    options!,
  );

  useSetter<Parameters<AMap.Rectangle['setBounds']>>(
    curInstance,
    'setBounds',
    bounds!,
  );
  useSetter<Parameters<AMap.Rectangle['setHeight']>>(curInstance, 'setHeight', height || 0);

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
});

AMapRectangle.defaultProps = defaultProps;

export default AMapRectangle;
