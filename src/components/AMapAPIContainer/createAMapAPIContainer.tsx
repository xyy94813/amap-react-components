import React, { PureComponent } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

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
  const { AMapUI: AMapUIOptions, ...otherProps } = (options || {});
  const loadAMapAPI = () => AMapLoader.load({
    ...defaultOptions,
    ...otherProps,
    AMapUI: AMapUIOptions && {
      version: DEFAULT_AMAP_UI_VERSION,
      ...AMapUIOptions,
    },
  });

  return class AMapAPIContainer extends PureComponent<AMapAPIHocProps> {
    state = {
      AMap: null,
      AMapUI: null,
    };

    componentDidMount() {
      let retryTime = 0;
      loadAMapAPI().then(
        (AMap) => {
          this.setState({
            AMap,
            AMapUI: global.AMapUI,
          });
        },
        (reason) => {
          // eslint-disable-next-line no-console
          console.error(reason);
          if (retryTime > 3) {
            throw Error(reason);
          }

          retryTime += 1;

          return loadAMapAPI();
        },
      );
    }

    render() {
      const { children } = this.props;
      const { AMap, AMapUI } = this.state;

      return (
        <AMapAPIContext.Provider value={{
          __AMAP__: AMap,
          __AMAP_UI__: AMapUI,
        }}
        >
          {children}

        </AMapAPIContext.Provider>
      );
    }
  };
};

export default createAMapAPIContainer;
