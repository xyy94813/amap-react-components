import React, { useRef, useEffect } from 'react';

import createAMapAPIContainer from '../createAMapAPIContainer';
import useAMapAPI, { useAMapAPIValue } from '../../../hooks/useAMapAPI';

const AMAP_API_KEY: string = process.env.STORYBOOK_AMAP_API_KEY || '';

const SyncPluginAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
  plugins: ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
    (pluginName) => `AMap.${pluginName}`,
  ),
});

const WithoutPluginAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
});

const MapSyncPluginContentDrawer = () => {
  const { __AMAP__: AMap }: useAMapAPIValue = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

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

export const WithSyncPugin = () => (
  <SyncPluginAPIContainer>
    <MapSyncPluginContentDrawer />
  </SyncPluginAPIContainer>
);

const MapAsyncPluginContentDrawer = () => {
  const { __AMAP__: AMap }: useAMapAPIValue = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    AMap.plugin(
      ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
        (pluginName) => `AMap.${pluginName}`,
      ),
      () => {
        new AMap.ControlBar().addTo(map);
        new AMap.ToolBar().addTo(map);
        new AMap.Scale().addTo(map);
        new AMap.MapType().addTo(map);
        new AMap.HawkEye().addTo(map);
      },
    );

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap]);
  return <div ref={$container} style={{ height: 'calc(100vh - 8px * 2)' }} />;
};

export const WithAsyncPugin = () => (
  <WithoutPluginAPIContainer>
    <MapAsyncPluginContentDrawer />
  </WithoutPluginAPIContainer>
);

export default {
  title: 'createAMapAPIContainer',
  component: WithSyncPugin,
};
