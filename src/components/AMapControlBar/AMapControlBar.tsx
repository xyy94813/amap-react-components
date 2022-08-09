import type { FC } from 'react';
import {
  useEffect, useState, useMemo, memo,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#ControlBar
 */

export type AMapControlBarProps = Pick<AMap.ControlBarConfig, 'offset' | 'showControlButton'> & {
  position?: AMap.ControlBarConfig['position'];
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
};

const defaultProps = {
  position: 'LT' as AMapControlBarProps['position'],
  showControlButton: true,
  visible: true,
};

const AMapControlBar: FC<AMapControlBarProps> = ({
  position,
  offset,
  showControlButton,
  visible,
  onHide,
  onShow,
}) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMap.ControlBarConfig = {
      position: position!,
    };

    if (showControlButton !== undefined) conf.showControlButton = showControlButton;
    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [showControlButton, position, offset]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.ControlBar(initConfig);
      setInstance(newInstance);
    };

    if (AMap.ControlBar) {
      initInstance();
    } else {
      AMap.plugin('AMap.ControlBar', initInstance);
    }
  }, [AMap, initConfig]);

  useEffect(() => {
    if (visible) {
      curInstance?.show?.();
    } else {
      curInstance?.hide?.();
    }
  }, [curInstance, visible]);

  useAMapEventBinder(curInstance, 'show', onShow);
  useAMapEventBinder(curInstance, 'hide', onHide);

  useAMapControlBinder(curInstance);

  return null;
};

AMapControlBar.defaultProps = defaultProps;

export default memo(AMapControlBar);
