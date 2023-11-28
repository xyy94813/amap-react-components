import type { Meta, StoryObj } from '@storybook/react';

import { AMapMap } from '../../../index';

import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

AMapMap.displayName = 'AMapMap';

const meta: Meta<typeof AMapMap> = {
  title: '组件(Components)/基础组件(Basic)/AMapMap',
  component: AMapMap,
  decorators: [
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    features: ['bg', 'point', 'road', 'building'],
    viewMode: '2D',
  },
  argTypes: {
    viewMode: {
      description: '地图视图模式。注意，切换地图模式会创建新的地图实例，同时销毁原有地图实例。',
      type: { required: false, name: 'enum', value: ['2D', '3D'] },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2D' },
      },
      options: ['2D', '3D'],
      control: 'select',
    },
    center: {
      description: '中心经纬度',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
      },
      control: 'object',
    },
    cityName: {
      description:
        '行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    zoom: {
      description:
        '地图显示的缩放级别，可以设置为浮点数；若 center 与level 未赋值，地图初始化默认显示用户所在城市范围。',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
      },
      control: {
        type: 'number',
        min: 2,
        max: 20,
        step: 1,
      },
    },
    features: {
      description: '设置地图上显示的元素种类',
      type: {
        required: false,
        name: 'array',
        value: { name: 'enum', value: ['bg', 'point', 'road', 'building'] },
      },
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: "['bg', 'point', 'road', 'building']" },
      },
      options: {
        'bg(地图背景)': 'bg',
        'point(POI)': 'point',
        'road(道路)': 'road',
        'building(建筑物)': 'building',
      },
      control: 'check',
    },
    mapStyle: {
      description: [
        '设置地图样式：',
        '官方样式模版，如 "amap://styles/grey"',
        '地图自定义平台定制地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86"',
      ].join('<br/>'),
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    pitch: {
      description: '俯仰角度，值范围：0-90。2D地图下无效 。',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
        min: 0,
        max: 90,
        step: 15,
      },
    },
  },
};

export default meta;

type AMapMapStory = StoryObj<typeof AMapMap>;

export const SetCenter: AMapMapStory = {
  name: '设置中心点',
  args: {
    center: [114.021769, 22.530421],
  },
};

export const SetCityName: AMapMapStory = {
  name: '设置城市名称',
  args: {
    cityName: '深圳',
  },
};

export const SetZoom: AMapMapStory = {
  name: '设置缩放比例',
  args: {
    zoom: 12,
  },
};

export const SetFeatures: AMapMapStory = {
  name: '设置地图上显示的元素种类',
  args: {
    features: ['bg', 'point'],
  },
};

export const SetsMapStyle: AMapMapStory = {
  name: '自定义地图样式',
  args: {
    mapStyle: 'amap://styles/grey',
  },
};

export const ViewModeIs3D: AMapMapStory = {
  name: '3D 模式',
  args: {
    viewMode: '3D',
    pitch: 75,
    zoom: 18,
  },
};
