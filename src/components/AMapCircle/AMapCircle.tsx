import {
  forwardRef,
  useMemo,
  useImperativeHandle,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';
import useSetter from '../../hooks/useSetter';

import type { AMapCircleProps } from './interface';

const init = (AMap: Parameters<
Parameters<typeof useAMapPluginInstance>[1]
>[0]) => new AMap!.Circle();

// https://lbs.amap.com/api/javascript-api/reference/overlay#Circle
const AMapCircle = forwardRef<AMap.Circle, AMapCircleProps>(
  (
    {
      center,
      radius,
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
      extData,
      draggable,
      visible,
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
    },
    ref,
  ) => {
    const curInstance = useAMapPluginInstance<AMap.Circle>('Circle', init);

    useImperativeHandle(ref, () => curInstance!, [curInstance]);

    const options: Parameters<AMap.Circle['setOptions']>[0] = useMemo(() => {
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
    ]);
    useSetter<Parameters<AMap.Circle['setOptions']>>(curInstance, 'setOptions', options!);

    useSetter<Parameters<AMap.Circle['setCenter']>>(curInstance, 'setCenter', center!);
    useSetter<Parameters<AMap.Circle['setRadius']>>(curInstance, 'setRadius', radius!);
    useSetter<Parameters<AMap.Circle['setExtData']>>(curInstance, 'setExtData', extData!);

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
  },
);

AMapCircle.defaultProps = {
  visible: true,
};

export default AMapCircle;
