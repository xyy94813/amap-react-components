import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapControlBar, AMapControlBarProps } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onShow', 'onHide');

export default {
  title: '组件(Components)/地图控件(Control)/AMapControlBar',
  component: AMapControlBar,
  decorators: [
    withAMap,
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    position: 'LT',
    offset: [10, 10],
    showControlButton: true,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    position: {
      description: '控件停靠位置',
      table: {
        type: { summary: 'string|object' },
        defaultValue: { summary: 'LT' },
      },
      control: {
        type: 'select',
        options: ['LT', 'RT', 'LB', 'RB'],
      },
    },
    offset: {
      description:
        '相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。',
      type: { summary: 'array', required: false },
      control: 'array',
    },
    showControlButton: {
      description: '是否显示倾斜、旋转按钮。',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
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

const Template: Story<AMapControlBarProps> = (args) => <AMapControlBar {...args} />;

export const ChangeOffset: typeof Template = Template.bind({});
ChangeOffset.storyName = '设置偏移量';
ChangeOffset.args = { offset: [200, 200] };

export const ChangePosition: typeof Template = Template.bind({});
ChangePosition.args = { position: 'RT' };
ChangePosition.storyName = '指定位置';

export const HideControlButton: typeof Template = Template.bind({});
HideControlButton.args = { showControlButton: false };
HideControlButton.storyName = '显示/隐藏控制按钮';
