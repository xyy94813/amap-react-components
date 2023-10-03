import type { FC } from 'react';
import {
  memo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useControlContainerUpdater from '../../hooks/useControlContainerUpdater';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */

export type AMapScaleProps = Pick<AMap.ScaleConfig, 'offset'> & {
  position?: AMap.ScaleConfig['position'];
  visible?: boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
};

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

export default memo(AMapScale);
