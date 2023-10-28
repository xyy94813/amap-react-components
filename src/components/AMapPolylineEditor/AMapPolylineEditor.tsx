import type { FC } from 'react';
import {
  useCallback,
  useEffect,
  useRef,
} from 'react';
import type {
  _PolylineEditor as PolylineEditor,
} from '@amap/amap-jsapi-types/plugins/PolylineEditor';

import useAMap from '../../hooks/useAMap';
import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import { isPolyline } from '../../helpers/amapHelper';

import type { AMapPolylineEditorProps } from './interface';

// https://lbs.amap.com/api/javascript-api-v2/documentation#polylineeditor
const AMapPolylineEditor: FC<AMapPolylineEditorProps> = ({
  computeTarget,
  disabled,
  onChange,
}) => {
  const $lastOnChange = useRef<AMapPolylineEditorProps['onChange']>(onChange);
  $lastOnChange.current = onChange;

  const initInstance = useCallback((AMap, map) => new AMap!.PolylineEditor(map), []);
  // why PolylineEditor2, see: https://github.com/AMap-Web/amap-jsapi-types/pull/22
  const curInstance = useAMapPluginInstance<PolylineEditor>('PolylineEditor', initInstance);
  const { map } = useAMap();

  const reSetTarget = useCallback(() => {
    if (!map) return;
    if (!curInstance) return;
    const allPolyline: AMap.Polyline[] = map.getAllOverlays('polyline') || [];
    const newTarget = computeTarget(allPolyline) ?? null;
    curInstance.setTarget(newTarget!);
  }, [map, computeTarget, curInstance]);

  // 获取重新计算 target 然后更新
  // computeTarget 更新 => reSetTarget 更新
  // 更新后重新计算并执行
  useEffect(() => {
    reSetTarget();
  }, [reSetTarget]);

  // 监听地图中 overlays 的增加和减少
  // 重新基于 computeTarget 计算 target
  useEffect(() => {
    let clearEffect;
    if (!map) return clearEffect;

    const handleOverlayChanged = (features: any[]) => {
      if (isPolyline(features) || (
        Array.isArray(features)
        && features.some(isPolyline)
      )) {
        reSetTarget();
      }
    };

    clearEffect = () => {
      map.off('overlaysRemoved' as AMap.EventType, handleOverlayChanged);
      map.off('overlaysAdded' as AMap.EventType, handleOverlayChanged);
    };
    map.on('overlaysRemoved' as AMap.EventType, handleOverlayChanged);
    map.on('overlaysAdded' as AMap.EventType, handleOverlayChanged);

    return clearEffect;
  }, [map, reSetTarget]);

  // 监听变化，触发 onChange 通知
  useEffect(() => {
    let clearEffect;
    if (!curInstance) return clearEffect;

    const triggerChangeHandler = (obj: any) => {
      $lastOnChange.current?.(obj);
    };

    const memoInstance = curInstance;

    clearEffect = () => {
      memoInstance.off('add', triggerChangeHandler);
      memoInstance.off('addnode', triggerChangeHandler);
      memoInstance.off('adjust', triggerChangeHandler);
      memoInstance.off('removenode', triggerChangeHandler);
    };

    memoInstance.on('add', triggerChangeHandler);
    memoInstance.on('addnode', triggerChangeHandler);
    memoInstance.on('adjust', triggerChangeHandler);
    memoInstance.on('removenode', triggerChangeHandler);

    return clearEffect;
  }, [curInstance]);

  // 是否打开
  useEffect(() => {
    if (!curInstance) return;

    if (disabled) {
      curInstance.close();
    } else {
      curInstance.open();
    }
  }, [curInstance, disabled]);

  return null;
};

AMapPolylineEditor.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  disabled: false,
};

export default AMapPolylineEditor;
