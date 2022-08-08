/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
import '@amap/amap-jsapi-types';

// 对 amap type 做扩展
declare global {
  namespace AMap {

    export interface ControlBarConfig extends AMap.ControlConfig {
      showControlButton?: boolean;
    }
    export class ControlBar extends AMap.Control {
      constructor(conf: ControlBarConfig);
    }

    export interface ToolBarConfig extends AMap.ControlConfig {}

    export class ToolBar extends AMap.Control {
      constructor(conf: ToolBarConfig);
    }

    export interface ScaleConfig extends AMap.ControlConfig {}

    export class Scale extends AMap.Control {
      constructor(conf: ScaleConfig);
    }

    export interface HawkEyeOptions {
      autoMove?: boolean; // 是否随主图视口变化移动
      showRectangle?: boolean; // 是否显示视口矩形
      showButton?: boolean; // 是否显示打开关闭的按钮
      isOpen?: boolean; // 默认是否展开
      mapStyle?: string; // 缩略图要显示的地图自定义样式，如'amap://styles/dark'
      // layers: array; // 缩略图要显示的图层类型，默认为普通矢量地图
      width?: string; // 缩略图的宽度，同CSS，如'200px'
      height?: string; // 缩略图的高度，同CSS，如'200px'
      offset?: [number, number]; // 缩略图距离地图右下角的像素距离，如 [2,2]
      borderStyle?: string; // 缩略图的边框样式，同CSS，如"double solid solid double"
      borderColor?: string; // 缩略图的高度，同CSS，如'silver'
      borderRadius?: string; // 缩略图的高度，同CSS，如'5px'
      borderWidth?: string; // 缩略图的高度，同CSS，如'2px'
      buttonSize?: string; // 箭头按钮的像素尺寸，同CSS，如'12px'
    }

    export class HawkEye extends AMap.Control {
      constructor(options: HawkEyeOptions);
      open(): void;
      close(): void;
    }

    export interface GeoJSONGetOverlayCallBack {
      (
        geojson?: GeoJSON.GeoJSON,
        lnglat?: GeoJSON.Point[] | GeoJSON.Point[][] | GeoJSON.Point[][][],
      ): any;
    }

    export interface GeoJSONOptions {
      geoJSON?: GeoJSON.GeoJSON | null;
      getMarker?: GeoJSONGetOverlayCallBack;
      getPolyline?: GeoJSONGetOverlayCallBack;
      getPolygon?: GeoJSONGetOverlayCallBack;
    }

    export class GeoJSON extends OverlayGroup {
      constructor(options: GeoJSONOptions);

      importData: (data: GeoJSON.GeoJSON) => {};

      toGeoJSON: () => GeoJSON.GeoJSON;
    }
  }
}
