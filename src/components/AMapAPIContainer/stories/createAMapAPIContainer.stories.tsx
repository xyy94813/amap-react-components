import React, { useRef, useEffect } from 'react';
import { Meta } from '@storybook/react';

import { createAMapAPIContainer, useAMapAPI } from 'index';

const AMAP_API_KEY: string = process.env.STORYBOOK_AMAP_API_KEY || '';

export default {
  title: 'Components/Basic/AMapAPIContainer',
  excludeStories: ['AsyncPluginAPIContainer'],
} as Meta;

const SyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  plugins: ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
    (pluginName) => `AMap.${pluginName}`,
  ),
  AMapUI: {
    version: '1.1',
    plugins: ['overlay/SimpleMarker'],
  },
});

export const AsyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

const initPlugin = (AMap: typeof global.AMap, map: AMap.Map) => {
  new AMap.ControlBar().addTo(map);
  new AMap.ToolBar({ position: 'LT', offset: [50, 120] }).addTo(map);
  new AMap.Scale().addTo(map);
  new AMap.HawkEye().addTo(map);
};

const initUIPlugin = (SimpleMarker: typeof AMapUI.SimpleMarker, map: AMap.Map) => {
  new SimpleMarker({
    iconTheme: 'numv1',
    iconStyle: 'start',
    position: [116.405285, 39.904989],
  }).addTo(map);
};

const AsyncPluginContentDrawer = () => {
  const { __AMAP__: AMap } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
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
      () => initPlugin(AMap, map),
    );

    AMapUI.loadUI('overlay/SimpleMarker', (SimpleMarker: typeof AMapUI.SimpleMarker) => {
      initUIPlugin(SimpleMarker, map);
    });

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap]);

  return <div ref={$container} style={{ height: 400 }} />;
};

export const AsyncPlugin = () => (
  <AsyncPluginAPIContainer>
    <AsyncPluginContentDrawer />
  </AsyncPluginAPIContainer>
);

/**
 * TODO：更好的自动生成 Code
 */
const AsyncPluginCode = `
const AsyncPluginAPIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

${initPlugin.toString()}

${initUIPlugin.toString()}

const AsyncPluginContentDrawer = () => {
  const { __AMAP__: AMap } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    AMap.plugin(
      ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
        (pluginName) => \`AMap.\${pluginName}\`,
      ),
      () => initPlugin(AMap, map),
    );

    AMapUI.loadUI('overlay/SimpleMarker', (SimpleMarker: typeof AMapUI.SimpleMarker) => {
      initUIPlugin(SimpleMarker, map);
    });

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap]);

  return <div ref={$container} style={{ height: 400 }} />;
};
`;
AsyncPlugin.parameters = {
  docs: {
    source: {
      code: AsyncPluginCode,
    },
  },
};

const SyncPluginContentDrawer = () => {
  const { __AMAP__: AMap, __AMAP_UI__: AMapUI } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    initPlugin(AMap, map);
    initUIPlugin(AMapUI!.SimpleMarker, map);

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap, AMapUI]);
  return <div ref={$container} style={{ height: 400 }} />;
};

export const SyncPlugin = () => (
  <SyncPluginAPIContainer>
    <SyncPluginContentDrawer />
  </SyncPluginAPIContainer>
);

const SyncPluginCode = `
const SyncPluginAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
  plugins: ['ControlBar', 'ToolBar', 'Scale', 'MapType', 'HawkEye'].map(
    (pluginName) => \`AMap.\${pluginName}\`,
  ),
  AMapUI: {
    version: '1.1',
    plugins: ['overlay/SimpleMarker'],
  },
});

${initPlugin.toString()}

${initUIPlugin.toString()}

const SyncPluginContentDrawer = () => {
  const { __AMAP__: AMap, __AMAP_UI__: AMapUI } = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef<AMap.Map | null>(null);
  useEffect(() => {
    let clearEffect;
    if (!AMap || !$container.current) {
      return clearEffect;
    }

    const map = new AMap.Map($container.current);
    $map.current = map;

    initPlugin(AMap, map);
    initUIPlugin(AMapUI!.SimpleMarker, map);

    clearEffect = () => {
      map.destroy();
    };

    return clearEffect;
  }, [AMap, AMapUI]);
  return <div ref={$container} style={{ height: 400 }} />;
};

() => (
  <SyncPluginAPIContainer>
    <SyncPluginContentDrawer />
  </SyncPluginAPIContainer>
)
`;
SyncPlugin.parameters = {
  docs: {
    source: {
      code: SyncPluginCode,
    },
  },
};
