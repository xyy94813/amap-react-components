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

import type { AMapPolygonProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#polygon
 */

const defaultProps = {
  visible: true,
};

const AMapPolygon = forwardRef<AMap.Polygon, AMapPolygonProps>(({
  path,
  //   height,
  extrusionHeight,
  extData,
  // options
  zIndex,
  bubble,
  cursor,
  strokeColor,
  strokeWeight,
  strokeOpacity,
  fillColor,
  fillOpacity,
  draggable,
  roofColor,
  wallColor,
  strokeStyle,
  strokeDasharray,
  zooms,
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
  onDragstart,
  onDragging,
  onDragend,
  onTouchstart,
  onTouchmove,
  onTouchend,
}, ref) => {
  const initInstance = useCallback((AMap: typeof global.AMap) => new AMap!.Polygon(), []);
  const curInstance = useAMapPluginInstance<AMap.Polygon>('Polygon', initInstance);

  useImperativeHandle(ref, () => curInstance!, [curInstance]);

  useSetter<Parameters<AMap.Polygon['setExtData']>>(curInstance, 'setExtData', extData!);

  const options: Parameters<AMap.Polygon['setOptions']>[0] = useMemo(() => {
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
      zooms,
      roofColor,
      wallColor,
    })
      .filter(([,val]) => val !== undefined && val !== null)
      .reduce((finallyObj: Record<string, any>, [key, val]) => {
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
    zooms,
    roofColor,
    wallColor,
  ]);

  useSetter<Parameters<AMap.Polygon['setOptions']>>(curInstance, 'setOptions', options!);
  //   useSetter<Parameters<AMap.Polygon['setHeight']>>(curInstance, 'setHeight', height!);
  useSetter<Parameters<AMap.Polygon['setExtrusionHeight']>>(curInstance, 'setExtrusionHeight', extrusionHeight!);
  useSetter<Parameters<AMap.Polygon['setPath']>>(curInstance, 'setPath', path!);

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

AMapPolygon.defaultProps = defaultProps;

export default AMapPolygon;
