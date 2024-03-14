/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
// import '@amap/amap-jsapi-types';
import 'amap-jsapi-v2-types';

declare global {
  namespace AMap {}
  // 对 amap type 做扩展
  namespace AMapUI {
    export type SimpleMarkerOptions = Omit<AMap.MarkerOptions, 'content'> & {
      iconTheme?: string;
      iconStyle?: string | object;
      iconLabel?: string | object;
      showPositionPoint?: boolean | object;
      containerClassNames?: string;
    };

    export class SimpleMarker extends AMap.Marker {
      constructor(opts?: SimpleMarkerOptions);
      setIconStyle(iconStyle: string): void;
      setIconThemeAndStyle(iconTheme: string, iconStyle: string): void;
      setIconLabel(iconLabel: string | object): void;
      setContainerClassNames(containerClassNames: string): void;
      showPositionPoint(): void;
      hidePositionPoint(): void;
    }

    export const loadUI: (plugins: string | string[], cb: any) => void;
  }
}
