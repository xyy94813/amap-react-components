import type { FC } from 'react';
import {
  useCallback,
  memo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useControlContainerUpdater from '../../hooks/useControlContainerUpdater';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

import useControlButtonUpdater from './useControlButtonUpdater';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#ControlBar
 */

export type AMapControlBarProps = Pick<AMap.ControlBarConfig, 'offset'> & {
  position?: AMap.ControlBarConfig['position'];
  showControlButton?: boolean;
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
};

const defaultProps = {
  position: 'LT' as AMapControlBarProps['position'],
  showControlButton: true,
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const AMapControlBar: FC<AMapControlBarProps> = ({
  position,
  offset: propOffset,
  showControlButton,
  visible,
  onHide,
  onShow,
}) => {
  const initInstance = useCallback((AMap) => new AMap!.ControlBar(), []);
  const curInstance = useAMapPluginInstance<AMap.ControlBar>('ControlBar', initInstance);

  // 避免重新创建 ControlBar 实例，自行修改 dom 节点
  // position 改变
  useControlContainerUpdater(curInstance, position!, propOffset ?? [10, 10]);

  // 避免重新创建 ControlBar 实例，自行修改 dom 节点
  // controlButtons 显示/隐藏
  useControlButtonUpdater(curInstance!, !!showControlButton);

  useVisible(curInstance, visible!);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapControlBar.defaultProps = defaultProps;

export default memo(AMapControlBar);
