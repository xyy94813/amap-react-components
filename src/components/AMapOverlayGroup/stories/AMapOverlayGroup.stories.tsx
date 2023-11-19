import React from 'react';
import type { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapOverlayGroup,
  AMapOverlayGroupProps,
  AMapGeoJSON,
  AMapCircle,
  AMapEllipse,
  AMapMarker,
} from '../../../index';

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

const meta: Meta<typeof AMapOverlayGroup> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapOverlayGroup',
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    visible: {
      description: '显示或隐藏',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    options: {
      description: '修改覆盖物属性(包括线样式、样色等等)。注意：当前实现，嵌套使用时，父级组件会覆盖子组件的样式。',
      type: { required: false, name: 'object', value: {} },
      table: {
        type: {
          summary: 'object',
          detail: '具体字段参考高德 JS API 文档',
        },
      },
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
    onTouchstart: {
      description: '触摸开始，回调函数，仅移动设备有效',
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

type AMapOverlayGroupStory = Story<AMapOverlayGroupProps>;
const Template: AMapOverlayGroupStory = (args) => (
  <AMapOverlayGroup {...args}>
    <AMapGeoJSON geoJSON={{
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [116.272781, 39.98221],
                [116.274904, 39.903107],
                [116.481254, 39.907666],
                [116.464271, 39.988716],
                [116.272781, 39.98221],
              ],
            ],
          },
        },
      ],
    }}
    />
    <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>
);

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '基本使用';
CommonUse.args = {};

export const CustomStyle: typeof Template = Template.bind({});
CustomStyle.storyName = '自定义样式';
CustomStyle.args = {
  options: {
    fillColor: 'yellow',
    fillOpacity: 0.5,
    strokeColor: 'red',
    strokeStyle: 'dashed',
    strokeOpacity: 0.1,
    strokeWeight: 20,
    strokeDasharray: [10, 40],
  },
};

export const NestedUse: typeof Template = (args) => (
  <AMapOverlayGroup>
    <AMapOverlayGroup {...args}>
      <AMapCircle center={[116.39, 39.9]} radius={10_000} />
    </AMapOverlayGroup>
    <AMapEllipse center={[116.39, 39.9]} radius={[10_000, 5_000]} />
    <AMapMarker position={[116.39, 39.9]} />
  </AMapOverlayGroup>
);
NestedUse.storyName = '嵌套使用';
NestedUse.args = {
  options: CustomStyle.args.options,
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
