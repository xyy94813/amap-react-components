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

import type { AMapPolylineProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#polyline
 */

const defaultProps = {
  visible: true,
};

const AMapPolyline = forwardRef<AMap.Polyline, AMapPolylineProps>(({
  path,
  //   height,
  extData,
  visible,
  // style options
  zIndex,
  strokeColor,
  strokeWeight,
  strokeOpacity,
  strokeStyle,
  strokeDasharray,
  borderWeight,
  showDir,
  dirColor,
  dirImg,
  isOutline,
  outlineColor,
  cursor,
  lineJoin,
  lineCap,
  geodesic,
  // other options
  draggable,
  bubble,
  zooms,
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
  onDragstart,
  onDragging,
  onDragend,
  onTouchstart,
  onTouchmove,
  onTouchend,
}, ref) => {
  const initInstance = useCallback((AMap: typeof global.AMap) => new AMap!.Polyline(), []);
  const curInstance = useAMapPluginInstance<AMap.Polyline>('Polyline', initInstance);

  useImperativeHandle(ref, () => curInstance!, [curInstance]);

  useSetter<Parameters<AMap.Polyline['setExtData']>>(curInstance, 'setExtData', extData!);

  const options: Parameters<AMap.Polyline['setOptions']>[0] = useMemo(() => {
    const tmp = Object.entries({
      // style options
      zIndex,
      strokeColor,
      strokeWeight,
      strokeOpacity,
      strokeStyle,
      strokeDasharray,
      borderWeight,
      showDir,
      dirColor,
      dirImg,
      isOutline,
      outlineColor,
      cursor,
      lineJoin,
      lineCap,
      geodesic,
      // other options
      draggable,
      bubble,
      zooms,
    })
      .filter(([,val]) => val !== undefined && val !== null)
      .reduce((finallyObj: Record<string, any>, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        finallyObj[key] = val;
        return finallyObj;
      }, {});
    return tmp;
  }, [
    // style options
    zIndex,
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    strokeDasharray,
    borderWeight,
    showDir,
    dirColor,
    dirImg,
    isOutline,
    outlineColor,
    cursor,
    lineJoin,
    lineCap,
    geodesic,
    // other options
    draggable,
    bubble,
    zooms,
  ]);

  useSetter<Parameters<AMap.Polyline['setOptions']>>(curInstance, 'setOptions', options!);
  //   useSetter<Parameters<AMap.Polyline['setHeight']>>(curInstance, 'setHeight', height!);
  useSetter<Parameters<AMap.Polyline['setPath']>>(curInstance, 'setPath', path!);

  useVisible(curInstance, !!visible);

  useAMapEventBinder(curInstance, 'hide', onHide);
  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'click', onClick);
  useAMapEventBinder(curInstance, 'dblclick', onDBLClick);
  useAMapEventBinder(curInstance, 'rightclick', onRightClick);
  useAMapEventBinder(curInstance, 'mousedown', onMousedown);
  useAMapEventBinder(curInstance, 'mouseup', onMouseup);
  useAMapEventBinder(curInstance, 'mouseover', onMouseover);
  useAMapEventBinder(curInstance, 'mouseout', onMouseout);
  useAMapEventBinder(curInstance, 'dragstart', onDragstart);
  useAMapEventBinder(curInstance, 'dragging', onDragging);
  useAMapEventBinder(curInstance, 'dragend', onDragend);
  useAMapEventBinder(curInstance, 'touchstart', onTouchstart);
  useAMapEventBinder(curInstance, 'touchmove', onTouchmove);
  useAMapEventBinder(curInstance, 'touchend', onTouchend);

  useAMapOverlayBinder(curInstance);

  return null;
});

AMapPolyline.defaultProps = defaultProps;

export default AMapPolyline;
