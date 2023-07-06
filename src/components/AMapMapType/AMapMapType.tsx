/* eslint-disable react/default-props-match-prop-types */
import type { FC } from 'react';
import {
  useCallback,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import type { AMapMapTypeProps } from './interface';

/**
 * Origin API see:
 * https://lbs.amap.com/api/javascript-api-v2/documentation#maptype
 */

const defaultProps = {
  defaultType: 0,
  showTraffic: false,
  showRoad: false,
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const AMapMapType: FC<AMapMapTypeProps> = ({
  defaultType,
  showTraffic,
  showRoad,
  visible,
  onHide,
  onShow,
}) => {
  const initInstance = useCallback((AMap) => new AMap!.MapType({
    defaultType,
    showTraffic,
    showRoad,
  }), [defaultType, showRoad, showTraffic]);
  const curInstance = useAMapPluginInstance<AMap.MapType>('MapType', initInstance);

  useVisible(curInstance, !!visible);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapMapType.defaultProps = defaultProps;

export default AMapMapType;
