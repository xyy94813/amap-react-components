import React, { PureComponent } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

import AMapAPIContext from './AMapAPIContext';

const DEFAULT_AMAP_VERSION = '2.0';

export interface createAMapAPIContainerOptions {
  apiKey: string; // 首次调用load必须填写key
  version: string; // JSAPI 版本号
  plugins?: Array<string>; // 同步加载的插件列表
}

export interface AMapAPIHocProps {
  children: React.ReactElement
}

export const createAMapAPIContainer = (options: createAMapAPIContainerOptions) => {
  const { apiKey, version = DEFAULT_AMAP_VERSION, plugins = [] } = options;
  const loadAMapAPI = () => AMapLoader.load({
    key: apiKey,
    version,
    plugins,
  });

  return class AMapAPIContainer extends PureComponent<AMapAPIHocProps> {
    state = {
      AMap: null,
    };

    componentDidMount() {
      let retryTime = 0;
      loadAMapAPI().then(
        (AMap) => {
          this.setState({
            AMap,
          });
        },
        ((reason) => {
          // eslint-disable-next-line no-console
          console.error(reason);
          if (retryTime > 3) {
            throw Error(reason);
          }

          retryTime += 1;

          return loadAMapAPI();
        }),
      );
    }

    render() {
      const { children } = this.props;
      const { AMap } = this.state;

      return (
        <AMapAPIContext.Provider value={{ __AMAP__: AMap }}>{children}</AMapAPIContext.Provider>
      );
    }
  };
};

export default createAMapAPIContainer;
