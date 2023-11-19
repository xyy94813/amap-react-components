import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapToolBar, AMapToolBarProps } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onShow', 'onHide');

const meta: Meta<typeof AMapToolBar> = {
  title: '组件(Components)/地图控件(Control)/AMapToolBar',
  component: AMapToolBar,
  decorators: [
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    position: 'LT',
    offset: [10, 10],
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    position: {
      description: '控件停靠位置',
      type: {
        required: true,
        name: 'union',
        value: [
          { name: 'enum', value: ['LT', 'RT', 'LB', 'RB'] },
          {
            name: 'object',
            value: {
              top: { required: false, name: 'string' },
              left: { required: false, name: 'string' },
              right: { required: false, name: 'string' },
              bottom: { required: false, name: 'string' },
            },
          }],
      },
      table: {
        type: { summary: [['LT', 'RT', 'LB', 'RB'].join('|'), 'object'].join('|') },
        defaultValue: { summary: 'LB' },
      },
      options: {
        'LT(左上)': 'LT',
        'RT(右上)': 'RT',
        'LB(左下)': 'LB',
        'RB(右下)': 'RB',
      },
      control: 'select',
    },
    offset: {
      description:
        '相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'array' },
      },
      control: 'object',
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
    onShow: {
      description: '显示时触发此事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onHide: {
      description: '隐藏时触发此事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
  },
};

export default meta;

const Template: Story<AMapToolBarProps> = (args) => <AMapToolBar {...args} />;

export const ChangeOffset: typeof Template = Template.bind({});
ChangeOffset.storyName = '设置偏移量';
ChangeOffset.args = { offset: [20, 20] };

export const ChangePosition: typeof Template = Template.bind({});
ChangePosition.storyName = '指定位置';
ChangePosition.args = { position: 'RT' };
