import React from 'react';
import { Meta, Story } from '@storybook/react';

import type { AMapPolygonEditorProps } from 'index';
import { AMapGeoJSON, AMapPolygonEditor } from 'index';
import { actions } from '@storybook/addon-actions';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';
import withAutoFitView from '../../AMapAutoFitView/stories/withAutoFitView';

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

export default {
  title: '组件(Components)/工具(Tools)/AMapPolygonEditor',
  decorators: [withAutoFitView, withAMapContainer],
  args: {
    computeTarget: (polygons: Parameters<AMapPolygonEditorProps['computeTarget']>[0]) => polygons[0],
    onChange: eventHandler.onChange,
  },
  argTypes: {
    computeTarget: {
      description: '设置编辑对象',
      type: { required: true, summary: '(allPolygons: AMap.Polygon[]): AMap.Polygon[] | null | undefined' },
      control: false,
    },
    disabled: {
      description: '禁用 PolygonEditor',
      type: { required: false, summary: 'boolean', defaultValue: true },
      table: {
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'boolean',
      },
    },
    computeAdsorbPolygons: {
      description: '设置吸附多边形。默认地图上所有多边形都可吸附',
      type: { required: false, summary: '(allPolygons: AMap.Polygon[]): AMap.Polygon[] | null | undefined' },
      table: {
        defaultValue: {
          summary: '(allPolygons: AMap.Polygon[]) => allPolygons',
        },
      },
      control: false,
    },
    onChange: {
      description: 'Target 变化时的回调',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
  },
} as Meta;

const Template: Story<AMapPolygonEditorProps> = (args) => (
  <>
    <AMapGeoJSON geoJSON={mockData} />
    <AMapPolygonEditor {...args} />
  </>
);

export const WithGeoJSON: typeof Template = Template.bind({});
WithGeoJSON.storyName = '与AMapGeoJSON一同使用';
WithGeoJSON.args = {
  computeTarget: (polygons) => polygons[1],
};

export const SetAdsorbPolygons: typeof Template = Template.bind({});
SetAdsorbPolygons.storyName = '自定义磁吸围栏';
SetAdsorbPolygons.args = {
  computeAdsorbPolygons: (polygons) => polygons.filter((_, index) => index === 1),
};

export const DisablePolygonEditor: typeof Template = Template.bind({});
DisablePolygonEditor.storyName = '禁用编辑器';
DisablePolygonEditor.args = {
  disabled: true,
};
