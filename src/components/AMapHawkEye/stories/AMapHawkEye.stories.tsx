import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapHawkEye, AMapHawkEyeProps } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onShow', 'onHide', 'onOpen', 'onClose');

const presetColors = ['#ff0000', '#00ff00', '#0000ff'];

export default {
  title: '组件(Components)/地图控件(Control)/AMapHawkEye',
  component: AMapHawkEye,
  decorators: [
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    autoMove: true,
    showRectangle: true,
    showButton: true,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    offset: {
      description: '缩略图距离地图右下角的像素距离',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
      },
      control: 'object',
    },
    autoMove: {
      description: '是否随主图视口变化移动',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    showRectangle: {
      description: '是否显示视口矩形',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    showButton: {
      description: '是否显示打开关闭的按钮',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    isOpen: {
      description: '默认是否展开',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    mapStyle: {
      description: '缩略图要显示的地图自定义样式，如 "amap://styles/dark"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    width: {
      description: '缩略图的宽度，同CSS，如 "200px"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    height: {
      description: '缩略图的高度，同CSS，如"200px"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    borderStyle: {
      description: '缩略图的边框样式，同CSS，如 "double solid solid double"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    borderColor: {
      description: '缩略图的边框颜色，同CSS，如 "silver"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#00B2D5' },
      },
      control: {
        type: 'color',
        presetColors,
      },
    },
    borderRadius: {
      description: '缩略图的圆角半径，同CSS，如 "5px"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    borderWidth: {
      description: '缩略图的边框宽度，同CSS，如 "5px"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    buttonSize: {
      description: '箭头按钮的像素尺寸，同CSS，如 "12px"',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
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
} as Meta;

const Template: Story<AMapHawkEyeProps> = (args) => <AMapHawkEye {...args} />;

export const ChangePosition: typeof Template = Template.bind({});
ChangePosition.args = { offset: [10, 10] };
ChangePosition.storyName = '设置偏移量';

export const ChangeStyle: typeof Template = Template.bind({});
ChangeStyle.args = {
  height: '200px',
  width: '100px',
  borderStyle: 'dashed',
  borderColor: 'red',
  borderRadius: '4px',
  borderWidth: '5px',
  buttonSize: '10px',
};
ChangeStyle.storyName = '设置样式';

export const ChangeTheme: typeof Template = Template.bind({});
ChangeTheme.args = {
  mapStyle: 'amap://styles/dark',
};
ChangeTheme.storyName = '设置主题';

export const NotAutoMove: typeof Template = Template.bind({});
ChangeTheme.args = {
  autoMove: false,
};
NotAutoMove.storyName = '不随主视图变化';
