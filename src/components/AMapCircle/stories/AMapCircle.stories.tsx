import React from 'react';
import { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapCircle, AMapCircleProps } from 'index';
import AMapAutoFitView from '../../AMapAutoFitView';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';

const eventHandler = actions('onShow', 'onHide');

const withAutoFitView = (renderStory: Story, context: any) => (
  <>
    {renderStory({}, context)}
    <AMapAutoFitView />
  </>
);

export default {
  title: 'Components/Overlay/AMapCircle',
  decorators: [withAutoFitView, withAMapContainer],
  args: {
    center: [116.39, 39.9],
    radius: 10_000,
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
      type: { required: true, summary: 'number' },
      control: {
        type: 'number',
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
      type: { required: false, summary: '(event: AMap.Event<"show">) => void' },
    },
    onHide: {
      description: '隐藏，回调函数',
      type: { required: false, summary: '(event: AMap.Event<"hide">) => void' },
    },
  },
} as Meta;

const Template: Story<AMapCircleProps> = (args) => (
  <AMapCircle {...args} />
);

export const CommonUse = Template.bind({});
CommonUse.args = {};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  fillColor: 'yellow',
  fillOpacity: 0.5,
  strokeColor: 'red',
  strokeStyle: 'dashed',
  strokeOpacity: 0.1,
  strokeWeight: 20,
  strokeDasharray: [10, 40],
};
