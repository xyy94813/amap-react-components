import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapMapType, AMapMapTypeProps } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onShow', 'onHide');

export default {
  title: '组件(Components)/地图控件(Control)/AMapMapType',
  component: AMapMapType,
  decorators: [
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    defaultType: 0,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    defaultType: {
      description: '初始化默认图层类型。 默认底图: 0; 卫星图: 1。',
      table: {
        type: { summary: '0|1' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'select',
        options: [0, 1],
      },
    },
    showTraffic: {
      description: '叠加实时交通图层',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    showRoad: {
      description: '叠加路网图层',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    visible: {
      description: '显示或隐藏',
      control: 'boolean',
    },
    onShow: {
      description: '显示时触发此事件',
    },
    onHide: {
      description: '隐藏时触发此事件',
    },
  },
} as Meta;

const Template: Story<AMapMapTypeProps> = (args) => <AMapMapType {...args} />;

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '一般使用';
CommonUse.args = {};

export const DefaultType: typeof Template = Template.bind({});
DefaultType.storyName = '默认卫星图';
DefaultType.args = { defaultType: 1 };

export const DefaultShowTraffic: typeof Template = Template.bind({});
DefaultShowTraffic.storyName = '默认开启路况';
DefaultShowTraffic.args = { showTraffic: true };

export const DefaultShowRoad: typeof Template = Template.bind({});
DefaultShowRoad.storyName = '默认叠加路网图层';
DefaultShowRoad.args = { showRoad: true };
