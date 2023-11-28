import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapPolyline,
  AMapGeoJSON,
  AMapPolylineEditor,
  AMapPolylineEditorProps,
} from '../../../index';

import withAutoFitView from '../../../storybook-decorators/withAutoFitView';
import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions(
  'onChange',
);

const commonPolyline: GeoJSON.LineString = {
  type: 'LineString',
  coordinates: [
    [116.386069, 39.898857],
    [116.386023, 39.897477],
    [116.387719, 39.897539],
  ],
};

const mockData: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: commonPolyline,
      properties: {},
    },
  ],
};

const meta: Meta<typeof AMapPolylineEditor> = {
  title: '组件(Components)/工具(Tools)/AMapPolylineEditor',
  component: AMapPolylineEditor,
  render: (args) => (
    <>
      <AMapPolyline path={commonPolyline.coordinates as AMap.LngLatLike[]} />
      <AMapPolylineEditor {...args} />
    </>
  ),
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    computeTarget: (polylines: Parameters<AMapPolylineEditorProps['computeTarget']>[0]) => polylines[0],
    onChange: eventHandler.onChange,
  },
  argTypes: {
    computeTarget: {
      description: '设置编辑对象',
      type: { required: true, name: 'function' },
      table: {
        type: { summary: '(allPolyline: AMap.Polyline[]) => AMap.Polyline | null | undefined' },
      },
      control: false,
    },
    disabled: {
      description: '禁用 PolylineEditor',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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

type AMapPolylineEditorStory = StoryObj<typeof AMapPolylineEditor>;

export const WithGeoJSON: AMapPolylineEditorStory = {
  name: '与AMapGeoJSON一同使用',
  args: {
    computeTarget: (polylineList) => polylineList[0],
  },
  render: (args) => (
    <>
      <AMapGeoJSON geoJSON={mockData} />
      <AMapPolylineEditor {...args} />
    </>
  ),
};

export const DisablePolylineEditor: AMapPolylineEditorStory = {
  name: '禁用编辑器',
  args: {
    disabled: true,
  },
};
