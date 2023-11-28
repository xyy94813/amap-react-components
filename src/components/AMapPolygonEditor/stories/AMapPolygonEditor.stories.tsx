import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapGeoJSON,
  AMapPolygon,
  AMapPolygonEditor,
  AMapPolygonEditorProps,
  coordsOfGeoJSON2AMapPolygonPath,
} from '../../../index';

import withAutoFitView from '../../../storybook-decorators/withAutoFitView';
import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions(
  'onChange',
);

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
      geometry: commonPolygon,
      properties: {},
    },
    {
      type: 'Feature',
      geometry: polygonWithHole,
      properties: {},
    },
    {
      type: 'Feature',
      geometry: multiPolygon,
      properties: {},
    },
  ],
};

const meta: Meta<typeof AMapPolygonEditor> = {
  title: '组件(Components)/工具(Tools)/AMapPolygonEditor',
  component: AMapPolygonEditor,
  render: (args) => (
    <>
      <AMapPolygon
        path={coordsOfGeoJSON2AMapPolygonPath(commonPolygon.coordinates) as AMap.LngLatLike[]}
      />
      <AMapPolygon
        path={coordsOfGeoJSON2AMapPolygonPath(polygonWithHole.coordinates) as AMap.LngLatLike[][]}
      />
      <AMapPolygon
        path={coordsOfGeoJSON2AMapPolygonPath(multiPolygon.coordinates) as AMap.LngLatLike[][][]}
      />
      <AMapPolygonEditor {...args} />
    </>
  ),
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    computeTarget: (polygons: Parameters<AMapPolygonEditorProps['computeTarget']>[0]) => polygons[0],
    onChange: eventHandler.onChange,
  },
  argTypes: {
    computeTarget: {
      description: '设置编辑对象',
      type: { required: true, name: 'function' },
      table: {
        type: { summary: '(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined' },
      },
      control: false,
    },
    disabled: {
      description: '禁用 PolygonEditor',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    computeAdsorbPolygons: {
      description: '设置吸附多边形。默认地图上所有多边形都可吸附',
      type: { required: false, name: 'function' },
      table: {
        type: { summary: '(allPolygons: AMap.Polygon[]) => AMap.Polygon[] | null | undefined' },
        defaultValue: {
          summary: '(allPolygons: AMap.Polygon[]) => allPolygons',
        },
      },
      control: false,
    },
    onChange: {
      description: 'Target 变化时的回调',
      type: { required: true, name: 'function' },
      table: {
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
  },
};

export default meta;

type AMapPolygonEditorStory = StoryObj<typeof AMapPolygonEditor>;

export const WithGeoJSON: AMapPolygonEditorStory = {
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: (polygons) => polygons[1],
  },
  render: (args) => (
    <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolygonEditor {...args} />
    </>
  ),
};

export const SetAdsorbPolygons: AMapPolygonEditorStory = {
  name: '自定义磁吸围栏',
  args: {
    computeAdsorbPolygons: (polygons) => polygons.filter((_, index) => index === 1),
  },
};

export const DisablePolygonEditor: AMapPolygonEditorStory = {
  name: '禁用编辑器',
  args: {
    disabled: true,
  },
};
