import type { FC } from 'react';
import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';

import type { AMapPolygonEditorProps } from './interface';

const isPolygonFeature = (feature: any) => feature.className === 'Overlay.Polygon';

const AMapPolygonEditor: FC<AMapPolygonEditorProps> = ({
  computeTarget,
  disabled,
  computeAdsorbPolygons,
  onChange,
}) => {
  const $lastOnChange = useRef<AMapPolygonEditorProps['onChange']>(onChange);
  $lastOnChange.current = onChange;

  const initInstance = useCallback((AMap, map) => new AMap!.PolygonEditor(map), []);
  const curInstance = useAMapPluginInstance<AMap.PolygonEditor>('PolygonEditor', initInstance);
  const { map } = useAMap();

  const reSetTarget = useCallback(() => {
    if (!map) return;
    if (!curInstance) return;
    const allPolygons: AMap.Polygon[] = map.getAllOverlays('polygon') || [];
    const newTarget = computeTarget(allPolygons) ?? null;
    curInstance.setTarget(newTarget);
  }, [map, computeTarget, curInstance]);

  // 获取重新计算 target 然后更新
  // computeTarget 更新 => reSetTarget 更新
  // 更新后重新计算并执行
  useEffect(() => {
    reSetTarget();
  }, [map, reSetTarget]);

  // 监听地图中 overlays 的增加和减少
  // 重新基于 computeTarget 计算 target
  useEffect(() => {
    let clearEffect;
    if (!map) return clearEffect;

    const handleOverlayChanged = (features: any[]) => {
      if (isPolygonFeature(features) || (
        Array.isArray(features)
        && features.some(isPolygonFeature)
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

  const reSetAdsorbPolygons = useCallback(() => {
    if (!map) return;
    if (!curInstance) return;
    const allPolygons: AMap.Polygon[] = map.getAllOverlays('polygon') || [];
    const adsorbPolygons = computeAdsorbPolygons?.(allPolygons);
    if (adsorbPolygons) {
      curInstance.setAdsorbPolygons(adsorbPolygons);
    } else {
      curInstance.clearAdsorbPolygons();
    }
  }, [map, computeAdsorbPolygons, curInstance]);

  // 获取重新计算 adsorbPolygons 然后更新
  // computeAdsorbPolygons 更新 => reSetAdsorbPolygons 更新
  // 更新后重新计算并执行
  useEffect(() => {
    reSetAdsorbPolygons();
  }, [map, reSetAdsorbPolygons]);

  // 监听地图中 overlays 的增加和减少
  // 重新基于 computeTarget 计算 target
  useEffect(() => {
    let clearEffect;
    if (!map) return clearEffect;

    const handleOverlayChanged = (features: any[]) => {
      if (isPolygonFeature(features) || (
        Array.isArray(features)
        && features.some(isPolygonFeature)
      )) {
        reSetAdsorbPolygons();
      }
    };

    clearEffect = () => {
      map.off('overlaysRemoved' as AMap.EventType, handleOverlayChanged);
      map.off('overlaysAdded' as AMap.EventType, handleOverlayChanged);
    };
    map.on('overlaysRemoved' as AMap.EventType, handleOverlayChanged);
    map.on('overlaysAdded' as AMap.EventType, handleOverlayChanged);

    return clearEffect;
  }, [map, reSetAdsorbPolygons]);

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

AMapPolygonEditor.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  disabled: false,
  // eslint-disable-next-line react/default-props-match-prop-types
  computeAdsorbPolygons: (allPolygons) => allPolygons,
};

export default AMapPolygonEditor;
