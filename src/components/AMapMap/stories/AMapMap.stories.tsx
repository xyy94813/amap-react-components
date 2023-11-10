import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { AMapMap, AMapMapProps } from '../../../index';

import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

AMapMap.displayName = 'AMapMap';

export default {
  title: '组件(Components)/基础组件(Basic)/AMapMap',
  component: AMapMap,
  decorators: [
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    features: ['bg', 'point', 'road', 'building'],
  },
  argTypes: {
    viewMode: {
      description: '地图视图模式。注意，切换地图模式会创建新的地图实例，同时销毁原有地图实例。',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2D' },
      },
      control: {
        type: 'select',
        options: ['2D', '3D'],
      },
    },
    center: {
      description: '中心经纬度',
      table: {
        type: { summary: 'array' },
      },
      control: 'object',
    },
    cityName: {
      description:
        '行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。',
      control: 'text',
    },
    zoom: {
      description:
        '地图显示的缩放级别，可以设置为浮点数；若 center 与level 未赋值，地图初始化默认显示用户所在城市范围。',
      control: {
        type: 'number',
        min: 2,
        max: 20,
        step: 1,
      },
    },
    features: {
      description: '设置地图上显示的元素种类',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['bg', 'point', 'road', 'building']" },
      },
      control: {
        type: 'check',
        options: {
          地图背景: 'bg',
          POI: 'point',
          道路: 'road',
          建筑物: 'building',
        },
      },
    },
    mapStyle: {
      description: [
        '设置地图样式：',
        '官方样式模版，如 "amap://styles/grey"',
        '地图自定义平台定制地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86"',
      ].join('<br/>'),
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
  },
} as Meta;

const Template: Story<AMapMapProps> = (args) => <AMapMap {...args} />;

export const SetCenter: typeof Template = Template.bind({});
SetCenter.args = {
  center: [114.021769, 22.530421],
};
SetCenter.storyName = '设置中心点';

export const SetCityName: typeof Template = Template.bind({});
SetCityName.args = {
  cityName: '深圳',
};
SetCityName.storyName = '设置城市名称';

export const SetZoom: typeof Template = Template.bind({});
SetZoom.args = {
  zoom: 12,
};
SetZoom.storyName = '设置缩放比例';

export const SetFeatures: typeof Template = Template.bind({});
SetFeatures.args = {
  features: ['bg', 'point'],
};
SetFeatures.storyName = '设置地图上显示的元素种类';

export const setMapStyle: typeof Template = Template.bind({});
setMapStyle.args = {
  mapStyle: 'amap://styles/grey',
};
setMapStyle.storyName = '自定义地图样式';

export const ViewModeIs3D: typeof Template = Template.bind({});
ViewModeIs3D.storyName = '3D 模式';
ViewModeIs3D.args = {
  viewMode: '3D',
};
