/* eslint-disable react/default-props-match-prop-types */
import type { FC } from 'react';
import {
  memo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useControlContainerUpdater from '../../hooks/useControlContainerUpdater';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import type { AMapScaleProps } from './interface';
/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */

const defaultProps = {
  position: 'LB' as AMapScaleProps['position'],
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const initInstance = (AMap: any) => new AMap.Scale();

const AMapScale: FC<AMapScaleProps> = ({
  position, offset, visible, onShow, onHide,
}) => {
  const curInstance = useAMapPluginInstance('Scale', initInstance);

  useControlContainerUpdater(curInstance, position!, offset);

  useVisible(curInstance, visible!);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapScale.defaultProps = defaultProps;

const AMapScaleMemo = memo(AMapScale);

AMapScaleMemo.displayName = 'AMapScale'; // for auto-docs

export default AMapScaleMemo;
