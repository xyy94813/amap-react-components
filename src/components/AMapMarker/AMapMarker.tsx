/* eslint-disable react/default-props-match-prop-types */
import type { FC } from 'react';
import {
  useCallback,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useSetter from '../../hooks/useSetter';
import useVisible from '../../hooks/useVisible';

import type { AMapMarkerProps } from './interface';

/**
 * More Details See:
 *
 * https://a.amap.com/jsapi/static/doc/index.html?v=2#marker
 * https://lbs.amap.com/api/javascript-api/reference/overlay#marker
 *
 */

const defaultProps = {
  anchor: 'center' as AMapMarkerProps['anchor'],
  cursor: 'pointer',
  angle: 0,
  zIndex: 12,
  // isTop: false,
  clickable: true,
  draggable: false,
  visible: true,
};

const AMapMarker: FC<AMapMarkerProps> = ({
  title,
  icon,
  zooms,
  label,
  clickable,
  draggable,
  cursor,
  extData,
  position,
  anchor,
  offset,
  angle,
  size,
  zIndex,
  content,
  //
  // isTop, // 推荐 z-index 控制
  visible,
  // event
  onHide,
  onShow,
  onClick,
  onDBLClick,
  onRightClick,
  onMousemove,
  onMousedown,
  onMouseup,
  onMouseover,
  onMouseout,
  onTouchstart,
  onTouchmove,
  onTouchend,
  onDragstart,
  onDragging,
  onDragend,
  onMoving,
  onMoveEnd,
  onMoveAlong,
}) => {
  const initInstance = useCallback((AMap) => new AMap!.Marker({ zooms }), [zooms]);
  const curInstance = useAMapPluginInstance<AMap.Marker>('Marker', initInstance);

  useVisible(curInstance, !!visible);

  useSetter<Parameters<AMap.Marker['setPosition']>>(curInstance, 'setPosition', position!);

  useSetter<Parameters<AMap.Marker['setTitle']>>(curInstance, 'setTitle', title!);
  // useSetter<Parameters<AMap.Marker['setHeight']>>(curInstance, 'setHeight', height);
  useSetter<Parameters<AMap.Marker['setIcon']>>(curInstance, 'setIcon', icon!);
  useSetter<Parameters<AMap.Marker['setLabel']>>(curInstance, 'setLabel', label!);
  useSetter<Parameters<AMap.Marker['setClickable']>>(curInstance, 'setClickable', clickable);
  useSetter<Parameters<AMap.Marker['setDraggable']>>(curInstance, 'setDraggable', draggable!);
  // useSetter<Parameters<AMap.Marker['setTop']>>(curInstance, 'setTop', isTop);
  useSetter<Parameters<AMap.Marker['setCursor']>>(curInstance, 'setCursor', cursor!);
  useSetter<Parameters<AMap.Marker['setExtData']>>(curInstance, 'setExtData', extData);
  useSetter<Parameters<AMap.Marker['setAnchor']>>(curInstance, 'setAnchor', anchor!);
  useSetter<Parameters<AMap.Marker['setOffset']>>(curInstance, 'setOffset', offset!);
  useSetter<Parameters<AMap.Marker['setAngle']>>(curInstance, 'setAngle', angle!);
  useSetter<Parameters<AMap.Marker['setSize']>>(curInstance, 'setSize', size!);
  useSetter<Parameters<AMap.Marker['setzIndex']>>(curInstance, 'setzIndex', zIndex!);
  useSetter<Parameters<AMap.Marker['setContent']>>(curInstance, 'setContent', content);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);
  useAMapEventBinder(curInstance, 'click', onClick);
  useAMapEventBinder(curInstance, 'dblclick', onDBLClick);
  useAMapEventBinder(curInstance, 'rightclick', onRightClick);
  useAMapEventBinder(curInstance, 'mousemove', onMousemove);
  useAMapEventBinder(curInstance, 'mousedown', onMousedown);
  useAMapEventBinder(curInstance, 'mouseup', onMouseup);
  useAMapEventBinder(curInstance, 'mouseover', onMouseover);
  useAMapEventBinder(curInstance, 'mouseout', onMouseout);
  useAMapEventBinder(curInstance, 'touchstart', onTouchstart);
  useAMapEventBinder(curInstance, 'touchmove', onTouchmove);
  useAMapEventBinder(curInstance, 'touchend', onTouchend);
  useAMapEventBinder(curInstance, 'dragstart', onDragstart);
  useAMapEventBinder(curInstance, 'dragging', onDragging);
  useAMapEventBinder(curInstance, 'dragend', onDragend);
  useAMapEventBinder(curInstance, 'moving', onMoving);
  useAMapEventBinder(curInstance, 'moveend', onMoveEnd);
  useAMapEventBinder(curInstance, 'movealong', onMoveAlong);

  useAMapOverlayBinder(curInstance);

  return null;
};

AMapMarker.defaultProps = defaultProps;

export default AMapMarker;
