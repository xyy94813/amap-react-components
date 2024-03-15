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

import type { AMapBezierCurveProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#beziercurve
 */
const defaultProps = {
  visible: true,
};

const AMapBezierCurve = forwardRef<AMap.BezierCurve, AMapBezierCurveProps>(({
  path,
  // style option
  zIndex,
  cursor,
  strokeColor,
  strokeOpacity,
  strokeWeight,
  strokeStyle,
  borderWeight,
  isOutline,
  outlineColor,
  // other options
  visible,
  draggable,
  bubble,
  //   zooms,
  extData,
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
}, ref) => {
  const initInstance = useCallback((AMap) => new AMap!.BezierCurve(), []);
  const curInstance = useAMapPluginInstance<AMap.BezierCurve>('BezierCurve', initInstance);

  useImperativeHandle(ref, () => curInstance!, [curInstance]);

  useSetter<Parameters<AMap.BezierCurve['setExtData']>>(curInstance, 'setExtData', extData!);

  const options: Parameters<AMap.BezierCurve['setOptions']>[0] = useMemo(() => {
    const opts = Object.entries({
      // style options
      zIndex,
      cursor,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      strokeStyle,
      borderWeight,
      isOutline,
      outlineColor,
      // other options
      draggable,
      bubble,
    })
      .filter(([,val]) => val !== undefined && val !== null)
      .reduce((finallyObj, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        finallyObj[key] = val;
        return finallyObj;
      }, {});
    return opts;
  }, [
    zIndex,
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    borderWeight,
    isOutline,
    outlineColor,
    cursor,
    draggable,
    bubble,
  ]);
  useSetter<Parameters<AMap.BezierCurve['setOptions']>>(curInstance, 'setOptions', options!);

  useSetter<Parameters<AMap.BezierCurve['setPath']>>(curInstance, 'setPath', path!);

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

AMapBezierCurve.defaultProps = defaultProps;

export default AMapBezierCurve;
