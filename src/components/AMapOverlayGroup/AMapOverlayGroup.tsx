import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useEffect,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapOverlayBinder from '../../hooks/useAMapOverlayBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import AMapOverlayGroupContext from './AMapOverlayGroupContext';
import type { AMapOverlayGroupProps } from './interface';

// https://lbs.amap.com/api/javascript-api/reference/overlay#overlaygroup
const AMapOverlayGroup = forwardRef<AMap.OverlayGroup, AMapOverlayGroupProps>(
  (
    {
      children,
      visible,
      options,
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
    const initInstance = useCallback((AMap) => new AMap!.OverlayGroup(), []);
    const curInstance = useAMapPluginInstance<AMap.OverlayGroup>('OverlayGroup', initInstance);

    useImperativeHandle(ref, () => curInstance!, [curInstance]);

    /**
     * TODO: 解决基于 Effect 实现存在缺陷父组件覆盖自组件的 options 的反直觉效果
     *
     * 嵌套使用 OverlayGroup 时， options 是否有效取决于 setOptions 的调用顺序。例如，
     *
     * var overlayGroup = new AMap.OverlayGroup([ polyline, polygon ])
     * overlayGroup.setOptions({
     *   strokeColor: "red" //线颜色
     * });
     * var overlayGroup1 = new AMap.OverlayGroup([ overlayGroup, circle ]);
     * overlayGroup1.setOptions({
     *   strokeColor: "yellow" //线颜色
     * });
     *
     * 此时 polyline，polygon，circle 的 strokeColor 为 "yellow"
     *
     * */
    // change options
    useEffect(() => {
      if (!options) return;
      curInstance?.setOptions?.(options);
    }, [options, curInstance]);

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

    return (
      <AMapOverlayGroupContext.Provider value={curInstance}>
        {children}
      </AMapOverlayGroupContext.Provider>
    );
  },
);

AMapOverlayGroup.defaultProps = {
  visible: true,
};

export default AMapOverlayGroup;
