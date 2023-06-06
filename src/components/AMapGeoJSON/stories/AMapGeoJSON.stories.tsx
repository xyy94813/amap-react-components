import React from 'react';
import { Meta, Story } from '@storybook/react';

import type { AMapGeoJSONGetOverlayCallback, AMapGeoJSONProps } from 'index';
import { AMapGeoJSON, coordsOfGeoJSON2AMapPolygonPath } from 'index';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';
import withAutoFitView from '../../AMapAutoFitView/stories/withAutoFitView';

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

export default {
  title: 'Components/Overlay/AMapGeoJSON',
  decorators: [withAutoFitView, withAMapContainer],
  argTypes: {
    geoJSON: {
      description: '要加载的标准 GeoJSON 对象',
      type: { name: 'other', value: '', required: true },
      table: {
        type: {
          summary: 'GeoJSON',
          detail: 'AMap 暂时不支持 `Feature`，需要转换成 `FeatureCollection`',
        },
      },
    },
    options: {
      description: '修改覆盖物属性(包括线样式、样色等等)',
      type: { name: 'other', value: '', required: false },
      table: {
        type: {
          summary: 'Object',
          detail: '具体字段参考高德 JS API 文档',
        },
      },
    },
    getMarker: {
      description: '指定点要素的绘制方式，缺省时为 Marker 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolyline: {
      description: '指定点要素的绘制方式，缺省时为 Polyline 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolygon: {
      description: '指定点要素的绘制方式，缺省时为 Polygon 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
  },
} as Meta;

const Template: Story<AMapGeoJSONProps> = (args) => (
  <AMapGeoJSON {...args} />
);

export const WithGeoJSON = Template.bind({});
WithGeoJSON.args = {
  geoJSON: mockData,
};

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

export const CustomOverlay = Template.bind({});
CustomOverlay.args = {
  geoJSON: mockData,
  options: {
    strokeColor: 'red',
    strokeWeight: 4,
  },
  getMarker,
  getPolyline,
  getPolygon,
};
