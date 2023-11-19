import React from 'react';
import type { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapEllipse, AMapEllipseProps } from '../../../index';

import withAutoFitView from '../../../storybook-decorators/withAutoFitView';
import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions(
  'onShow',
  'onHide',
  'onClick',
  'onDBLClick',
  'onRightClick',
  'onMousedown',
  'onMouseup',
  'onMouseover',
  'onMouseout',
  'onTouchstart',
  'onTouchmove',
  'onTouchend',
);

const presetColors = ['#ff0000', '#00ff00', '#0000ff'];

const meta: Meta<typeof AMapEllipse> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapEllipse',
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    center: [116.39, 39.9],
    radius: [10_000, 5_000],
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    center: {
      description: '圆心位置',
      type: { required: true, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'LngLatLike' },
      },
      control: 'object',
    },
    radius: {
      description: '圆半径，单位:米',
      type: { required: true, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
      },
      control: 'object',
    },
    zIndex: {
      description: '多边形覆盖物的叠加顺序',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
      control: {
        type: 'number',
        step: 1,
      },
    },
    fillColor: {
      description: '多边形填充颜色',
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
    fillOpacity: {
      description: '多边形填充透明度，取值范围 [0,1]',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 0.5 },
      },
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    strokeColor: {
      description: '轮廓线颜色，使用16进制颜色代码赋值。',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#00D3FC' },
      },
      control: {
        type: 'color',
        presetColors,
      },
    },
    strokeStyle: {
      description: '轮廓线样式',
      type: { required: false, name: 'enum', value: ['solid', 'dashed'] },
      table: {
        type: { summary: ['solid', 'dashed'].join('|') },
        defaultValue: { summary: 'solid' },
      },
      options: {
        'solid(实线)': 'solid',
        'dashed(虚线)': 'dashed',
      },
      control: 'select',
    },
    strokeOpacity: {
      description: '轮廓线透明度，取值范围 [0,1]',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.9 },
      },
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    strokeWeight: {
      description: '轮廓线宽度',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
    strokeDasharray: {
      description: '勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
      },
      control: 'object',
    },
    cursor: {
      description: '指定鼠标悬停时的鼠标样式',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    extData: {
      description: '设置用户自定义属性',
      type: { required: false, name: 'object', value: {} },
      table: {
        type: { summary: 'object' },
      },
      control: 'object',
    },
    draggable: {
      description: '是否可拖动',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
    bubble: {
      description: '是否将覆盖物的鼠标或touch等事件冒泡到地图上',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    onShow: {
      description: '显示，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onHide: {
      description: '隐藏，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onClick: {
      description: '左键单击，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onDBLClick: {
      description: '左键双击，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onRightClick: {
      description: '右键单击，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMousedown: {
      description: '鼠标按下，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMouseup: {
      description: '鼠标抬起，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMouseover: {
      description: '鼠标经过，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMouseout: {
      description: '鼠标移出，回调函数',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onTouchmove: {
      description: '触摸移动，回调函数，仅移动设备有效',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onTouchend: {
      description: '触摸结束，回调函数，仅移动设备有效',
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

type AMapEllipseStory = Story<AMapEllipseProps>;
const Template: AMapEllipseStory = (args) => (
  <AMapEllipse {...args} />
);

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '基本使用';
CommonUse.args = {};

export const CustomStyle: typeof Template = Template.bind({});
CustomStyle.storyName = '自定义样式';
CustomStyle.args = {
  fillColor: 'yellow',
  fillOpacity: 0.5,
  strokeColor: 'red',
  strokeStyle: 'dashed',
  strokeOpacity: 0.1,
  strokeWeight: 20,
  strokeDasharray: [10, 40],
};

export const ClickEvent: typeof Template = Template.bind({});
ClickEvent.storyName = '点击事件（左单/左双/右单）';
ClickEvent.args = {
  onClick: eventHandler.onClick,
  onDBLClick: eventHandler.onDBLClick,
  onRightClick: eventHandler.onRightClick,
};

export const MouseEvent: typeof Template = Template.bind({});
MouseEvent.storyName = '鼠标事件（按下/抬起/经过/移出）';
MouseEvent.args = {
  onMousedown: eventHandler.onMousedown,
  onMouseup: eventHandler.onMouseup,
  onMouseover: eventHandler.onMouseover,
  onMouseout: eventHandler.onMouseout,
};

export const TouchEvent: typeof Template = Template.bind({});
TouchEvent.storyName = '触摸事件（触摸开始/触摸移动/触摸结束）';
TouchEvent.args = {
  onTouchstart: eventHandler.onTouchstart,
  onTouchmove: eventHandler.onTouchmove,
  onTouchend: eventHandler.onTouchend,
};
