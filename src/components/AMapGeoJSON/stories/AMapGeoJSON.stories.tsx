import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { AMapGeoJSONGetOverlayCallback, AMapGeoJSONProps } from '../../../index';
import { AMapGeoJSON, coordsOfGeoJSON2AMapPolygonPath } from '../../../index';

import withAutoFitView from '../../../storybook-decorators/withAutoFitView';
import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const point: GeoJSON.Point = {
  type: 'Point',
  coordinates: [116.39, 39.9],
};

const line: GeoJSON.LineString = {
  type: 'LineString',
  coordinates: [
    [116.388904, 39.903423],
    [116.392122, 39.901176],
  ],
};

const commonPolygon: GeoJSON.Polygon = {
  type: 'Polygon',
  coordinates: [
    [
      [116.386069, 39.898857],
      [116.386023, 39.897477],
      [116.387719, 39.897539],
      [116.386069, 39.898857],
    ],
  ],
};
const polygonWithHole: GeoJSON.Polygon = {
  type: 'Polygon',
  coordinates: [
    [
      [116.384595, 39.901321],
      [116.383526, 39.899865],
      [116.386284, 39.900917],
      [116.384595, 39.901321],
    ],
    [
      [116.384594, 39.901],
      [116.384, 39.9003],
      [116.3861, 39.900917],
      [116.384594, 39.901],
    ],
  ],
};
const multiPolygon: GeoJSON.MultiPolygon = {
  type: 'MultiPolygon',
  coordinates: [
    [
      [
        [116.388624, 39.900055],
        [116.390452, 39.898583],
        [116.391294, 39.900003],
        [116.388624, 39.900055],
      ],
      [
        [116.389113, 39.899924],
        [116.390251, 39.898962],
        [116.391055, 39.899899],
        [116.389113, 39.899924],
      ],
    ],
    [
      [
        [116.387884, 39.899645],
        [116.38796, 39.898347],
        [116.390175, 39.898394],
        [116.387884, 39.899645],
      ],
    ],
  ],
};

const mockData: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'GeometryCollection',
        geometries: [
          point,
          line,
          commonPolygon,
          polygonWithHole,
          multiPolygon,
        ],
      },
    },
  ],
};

const meta: Meta<typeof AMapGeoJSON> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapGeoJSON',
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    geoJSON: mockData,
    visible: true,
  },
  argTypes: {
    geoJSON: {
      description: '要加载的标准 GeoJSON 对象',
      type: { required: true, name: 'object', value: {} },
      table: {
        type: {
          summary: 'GeoJSON.FeatureCollection',
          detail: 'AMap 暂时不支持 `Feature`，需要转换成 `FeatureCollection`',
        },
      },
    },
    visible: {
      description: '显示或隐藏',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    options: {
      description: '修改覆盖物属性(包括线样式、样色等等)',
      type: { required: false, name: 'object', value: {} },
      table: {
        type: { summary: 'object', detail: '具体字段参考高德 JS API 文档' },
      },
      control: 'object',
    },
    getMarker: {
      description: '指定点要素的绘制方式，缺省时为 Marker 的默认样式。',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolyline: {
      description: '指定点要素的绘制方式，缺省时为 Polyline 的默认样式。',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolygon: {
      description: '指定点要素的绘制方式，缺省时为 Polygon 的默认样式。',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
  },
};

export default meta;

const Template: Story<AMapGeoJSONProps> = (args) => (
  <AMapGeoJSON {...args} />
);

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '基本使用';

const getMarker: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const options = {
    position: lnglat as AMap.MarkerOptions['position'],
    map: map!,
    label: {
      offset: [],
      direction: 'Top',
      content: 'MyMarker',
    },
  };
  return new AMap!.Marker(options);
};

const getPolyline: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const options = {
    path: lnglat as AMap.PolylineOptions['path'],
    map,
  };
  return new AMap!.Polyline(options);
};

const getPolygon: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const polygon = new AMap!.Polygon();
  const path = coordsOfGeoJSON2AMapPolygonPath(lnglat!);
  polygon.setPath(path as AMap.PolygonOptions['path']);
  polygon.setOptions({
    strokeColor: 'yellow',
  });
  polygon.setMap(map!);
  return polygon;
};

export const CustomStyle: typeof Template = Template.bind({});
CustomStyle.storyName = '自定义样式';
CustomStyle.args = {
  options: {
    strokeColor: 'red',
    strokeWeight: 4,
  },
};

export const CustomOverlay: typeof Template = Template.bind({});
CustomOverlay.storyName = '自定义覆盖物';
CustomOverlay.args = {
  options: {
    strokeColor: 'red',
    strokeWeight: 4,
  },
  getMarker,
  getPolyline,
  getPolygon,
};
