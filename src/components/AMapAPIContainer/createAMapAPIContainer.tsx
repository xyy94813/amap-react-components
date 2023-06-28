import type { FC } from 'react';
import React, { lazy } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

import getGlobalObject from '../../helpers/getGlobalObject';
import AMapAPIContext from './AMapAPIContext';

const DEFAULT_AMAP_VERSION = '2.0';
const DEFAULT_AMAP_UI_VERSION = '1.1';

const defaultOptions = {
  version: DEFAULT_AMAP_VERSION,
};

export type CreateAMapApiContainerOptions = Parameters<typeof AMapLoader.load>[0];

export type AMapAPIHocProps = {
  children: React.ReactNode;
};

export const createAMapAPIContainer = (options: CreateAMapApiContainerOptions) => {
  const { AMapUI: AMapUIOptions, ...otherOptions } = (options || {});
  const loadAMapAPI = () => AMapLoader.load({
    ...defaultOptions,
    ...otherOptions,
    AMapUI: AMapUIOptions && {
      version: DEFAULT_AMAP_UI_VERSION,
      ...AMapUIOptions,
    },
  });

  let { AMap, AMapUI } = getGlobalObject();

  return lazy(async () => {
    if (!AMap || !AMapUI) {
      await loadAMapAPI();
      AMap = getGlobalObject().AMap;
      AMapUI = getGlobalObject().AMapUI;
    } else {
      const promises = [];

      if ((otherOptions?.plugins?.length ?? 0) > 0) {
        promises.push(
          new Promise((r) => {
            AMap.plugin(otherOptions.plugins!, r);
          }),
        );
      }

      /**
       * AMapUI.loadUI 不会将异步加载的 UI 插件
       * 添加的 window.AMapUI 对象上
       * 以下逻辑暂时无意义。
       */
      // if ((AMapUIOptions?.plugins?.length ?? 0) > 0) {
      //   promises.push(
      //     new Promise((r) => {
      //       AMapUI.loadUI(AMapUIOptions!.plugins!, r);
      //     }),
      //   );
      // }

      await Promise.all(promises);
    }

    const AMapAPIContainer: FC = ({ children }) => (
      <AMapAPIContext.Provider value={{
        __AMAP__: AMap,
        __AMAP_UI__: AMapUI,
      }}
      >
        {children}
      </AMapAPIContext.Provider>
    );

    return {
      default: AMapAPIContainer,
    };
  });
};

export default createAMapAPIContainer;
