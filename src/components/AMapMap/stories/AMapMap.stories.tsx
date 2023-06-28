import React from 'react';
import { Meta, Story } from '@storybook/react';

import { AMapMap, AMapMapProps } from 'index';

import { AsyncPluginAPIContainer as APIContainer } from '../../AMapAPIContainer/stories/createAMapAPIContainer.stories';

AMapMap.displayName = 'AMapMap';

const withAPIContainer = (renderStory: Story, context: any) => (
  <APIContainer>
    <div style={{ height: '400px' }}>{renderStory({}, context)}</div>
  </APIContainer>
);

export default {
  title: '组件(Components)/基础组件(Basic)/AMapMap',
  component: AMapMap,
  decorators: [withAPIContainer],
  args: {
    center: undefined,
    cityName: undefined,
    zoom: undefined,
  },
  argTypes: {
    center: {
      description: '中心经纬度',
      table: {
        type: { summary: 'array' },
      },
      control: 'array',
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
  },
  excludeStories: ['withAMapContainer'],
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

export const withAMapContainer = (renderStory: Story, context: any) => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 70px)' }}>
      <AMapMap>{renderStory({}, context)}</AMapMap>
    </div>
  </APIContainer>
);
