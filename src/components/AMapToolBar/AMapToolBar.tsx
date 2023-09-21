import type { FC } from 'react';
import {
  useCallback,
  memo,
} from 'react';

import useAMapPluginInstance from '../../hooks/useAMapPluginInstance';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useControlContainerUpdater from '../../hooks/useControlContainerUpdater';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';
import useVisible from '../../hooks/useVisible';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */
export type AMapToolBarProps = Pick<AMap.ToolBarConfig, 'offset'> & {
  position?: AMap.ControlBarConfig['position'];
  visible?: boolean;
  onShow?: (event?: any) => void;
  onHide?: (event?: any) => void;
};

const defaultProps = {
  position: 'LT' as AMapToolBarProps['position'],
  visible: true,
  onShow: undefined,
  onHide: undefined,
};

const AMapToolBar: FC<AMapToolBarProps> = ({
  position, offset, visible, onShow, onHide,
}) => {
  const initInstance = useCallback((AMap) => new AMap.ToolBar(), []);
  const curInstance = useAMapPluginInstance<AMap.ToolBar>('ToolBar', initInstance);

  // 自行控制 Control container dom
  // 避免多起创建实例
  useControlContainerUpdater(curInstance, position!, offset);

  useVisible(curInstance, visible!);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapToolBar.defaultProps = defaultProps;

export default memo(AMapToolBar);
