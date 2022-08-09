import type { FC } from 'react';
import {
  useEffect, useState, useMemo, memo,
} from 'react';

import useAMap from '../../hooks/useAMap';
import useAMapControlBinder from '../../hooks/useAMapControlBinder';
import useAMapEventBinder from '../../hooks/useAMapEventBinder';

/**
 * Origin API see:
 * https://lbs.amap.com/api/jsapi-v2/documentation#hawkeye
 */

export type AMapScaleProps = Pick<AMap.ScaleConfig, 'offset'> & {
  position?: AMap.ScaleConfig['position'];
  visible?: boolean;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
};

const defaultProps = {
  position: 'LB' as AMapScaleProps['position'],
  visible: true,
};

const AMapScale: FC<AMapScaleProps> = ({
  position, offset, visible, onShow, onHide,
}) => {
  const { __AMAP__: AMap } = useAMap();
  const [curInstance, setInstance] = useState<any>(null);

  const initConfig = useMemo(() => {
    const conf: AMap.ControlConfig = {
      position: position!,
    };

    if (offset !== undefined) conf.offset = offset;

    return conf;
  }, [position, offset]);

  useEffect(() => {
    if (!AMap) {
      return;
    }

    const initInstance = () => {
      const newInstance = new AMap.Scale(initConfig);
      setInstance(newInstance);
    };

    if (AMap.Scale) {
      initInstance();
    } else {
      AMap.plugin('AMap.Scale', initInstance);
    }
  }, [AMap, position, offset, initConfig]);

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

AMapScale.defaultProps = defaultProps;

export default memo(AMapScale);
