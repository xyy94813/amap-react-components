import type { FC } from 'react';
import { useState, useEffect } from 'react';

import useAMap from '../../hooks/useAMap';

import type { AMapAutoFitViewProps } from './interface';

const AMapAutoFitView: FC<AMapAutoFitViewProps> = ({ delay }) => {
  const { map } = useAMap();
  const [fitViewed, setFitViewed] = useState(false);
  useEffect(() => {
    let clearEffect;
    if (fitViewed) {
      return clearEffect;
    }
    const timeoutKey = setTimeout(() => {
      if (map) {
        map.setFitView();
        setFitViewed(true);
      }
    }, delay);
    clearEffect = () => {
      global.clearTimeout(timeoutKey);
    };
    return clearEffect;
  }, [delay, map, fitViewed]);

  return null;
};

AMapAutoFitView.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  delay: 2000,
};

export default AMapAutoFitView;
