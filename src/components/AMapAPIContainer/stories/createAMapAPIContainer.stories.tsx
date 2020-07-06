import React, { useRef, useEffect } from 'react';

import createAMapAPIContainer from '../createAMapAPIContainer';
import useAMapAPI, { useAMapAPIValue } from '../../../hooks/useAMapAPI';

const AMAP_API_KEY: string = process.env.STORYBOOK_AMAP_API_KEY || '';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
  plugins: ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
    (pluginName) => `AMap.${pluginName}`,
  ),
});

const MapContentDrawer = () => {
  const { __AMAP__: AMap }: useAMapAPIValue = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }
    // eslint-disable-next-line react/no-find-dom-node
    const map = new AMap.Map($container.current);
    $map.current = map;

    new AMap.ControlBar().addTo(map);
    new AMap.ToolBar().addTo(map);
    new AMap.Scale().addTo(map);
    new AMap.MapType().addTo(map);
    new AMap.HawkEye().addTo(map);

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap]);
  return <div ref={$container} style={{ height: 'calc(100vh - 8px * 2)' }} />;
};

export const NormalUse = () => (
  <APIContainer>
    <MapContentDrawer />
  </APIContainer>
);

export default {
  title: 'createAMapAPIContainer',
  component: NormalUse,
};
