import React from 'react';
import { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapEllipse, AMapEllipseProps } from 'index';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';
import withAutoFitView from '../../AMapAutoFitView/stories/withAutoFitView';

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

export default {
  title: '组件(Components)/覆盖物(Overlay)/AMapEllipse',
  decorators: [withAutoFitView, withAMapContainer],
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
      type: { required: true, summary: 'LngLatLike' },
    },
    radius: {
      description: '圆半径，单位:米',
      type: { required: true, summary: 'array' },
      control: {
        type: 'array',
        min: 0,
        step: 1,
      },
    },
    zIndex: {
      description: '多边形覆盖物的叠加顺序',
      type: { required: false, summary: 'number', defaultValue: 10 },
      table: { defaultValue: 10 },
      control: {
        type: 'number',
        step: 1,
      },
    },
    fillColor: {
      description: '多边形填充颜色',
      type: { required: false, summary: 'color', defaultValue: '#00B2D5' },
      table: { defaultValue: '#00B2D5' },
      control: { type: 'color' },
    },
    fillOpacity: {
      description: '多边形填充透明度，取值范围 [0,1]',
      type: { required: false, summary: 'number', defaultValue: 0.5 },
      table: { defaultValue: 0.5 },
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    strokeColor: {
      description: '轮廓线颜色，使用16进制颜色代码赋值。',
      type: { required: false, summary: 'color', defaultValue: '#00D3FC' },
      table: { defaultValue: '#00D3FC' },
      control: { type: 'color' },
    },
    strokeStyle: {
      description: '轮廓线样式',
      type: { required: false, summary: 'solid | dashed', defaultValue: 'solid' },
      table: { defaultValue: 'solid' },
      control: {
        type: 'select',
        options: ['solid', 'dashed'],
      },
    },
    strokeOpacity: {
      description: '轮廓线透明度，取值范围 [0,1]',
      type: { required: false, summary: 'number', defaultValue: 0.9 },
      table: { defaultValue: 0.9 },
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    strokeWeight: {
      description: '轮廓线宽度',
      type: { required: false, summary: 'number', defaultValue: 2 },
      table: { defaultValue: 2 },
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
    strokeDasharray: {
      description: '勾勒形状轮廓的虚线和间隙的样式',
      type: { required: false, summary: 'Array<number>' },
    },
    cursor: {
      description: '指定鼠标悬停时的鼠标样式',
      type: { required: false, summary: 'string' },
    },
    extData: {
      description: '设置用户自定义属性',
      type: { required: false, summary: 'Object' },
    },
    draggable: {
      description: '是否可拖动',
      type: { required: false, summary: 'type', defaultValue: false },
      table: { defaultValue: false },
      control: {
        type: 'boolean',
      },
    },
    visible: {
      description: '显示或隐藏',
      type: { required: false, summary: 'boolean', defaultValue: true },
      table: { defaultValue: true },
      control: {
        type: 'boolean',
      },
    },
    bubble: {
      description: '是否将覆盖物的鼠标或touch等事件冒泡到地图上',
      type: { required: false, summary: 'boolean', defaultValue: false },
      table: { defaultValue: false },
      control: { type: 'boolean' },
    },
    onShow: {
      description: '显示，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onHide: {
      description: '隐藏，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onClick: {
      description: '左键单击，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onDBLClick: {
      description: '左键双击，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onRightClick: {
      description: '右键单击，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onMousedown: {
      description: '鼠标按下，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onMouseup: {
      description: '鼠标抬起，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onMouseover: {
      description: '鼠标经过，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onMouseout: {
      description: '鼠标移出，回调函数',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onTouchstart: {
      description: '触摸开始，回调函数，仅移动设备有效',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onTouchmove: {
      description: '触摸移动，回调函数，仅移动设备有效',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
    onTouchend: {
      description: '触摸结束，回调函数，仅移动设备有效',
      type: { required: false, summary: '(event: any) => void' },
      control: false,
    },
  },
} as Meta;

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
