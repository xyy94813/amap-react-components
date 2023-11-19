import React, {
  createRef,
} from 'react';
import type { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapPolygon,
  AMapPolygonProps,
  AMapPolygonEditor,
  AMapPolygonEditorProps,
} from '../../../index';

import withAutoFitView from '../../../storybook-decorators/withAutoFitView';
import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions(
  'onHide',
  'onShow',
  'onClick',
  'onDBLClick',
  'onRightClick',
  'onMousedown',
  'onMouseup',
  'onMouseover',
  'onMouseout',
  'onDragstart',
  'onDragging',
  'onDragend',
  'onTouchstart',
  'onTouchmove',
  'onTouchend',
);

const presetColors = ['#ff0000', '#00ff00', '#0000ff'];

const meta: Meta<typeof AMapPolygon> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapPolygon',
  decorators: [
    withAutoFitView,
    withAMap({ viewMode: '3D', pitch: 30 }),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    path: [
      [116.386069, 39.898857],
      [116.386023, 39.897477],
      [116.387719, 39.897539],
      // [116.386069, 39.898857],
    ],
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    path: {
      description: '多边形轮廓线的节点坐标数组',
      type: {
        required: true,
        name: 'union',
        value: [
          { name: 'array', value: { name: 'array', value: { name: 'number' } } }, // [number, number][]
          { name: 'array', value: { name: 'array', value: { name: 'array', value: { name: 'number' } } } }, // [number, number][][]
          { name: 'array', value: { name: 'array', value: { name: 'array', value: { name: 'array', value: { name: 'number' } } } } }, // [number, number][][][]
          { name: 'array', value: { name: 'object', value: { lng: { name: 'number' }, lat: { name: 'number' } } } }, // { lng, lat }[]
          { name: 'array', value: { name: 'array', value: { name: 'object', value: { lng: { name: 'number' }, lat: { name: 'number' } } } } }, // { lng, lat }[][]
          { name: 'array', value: { name: 'array', value: { name: 'array', value: { name: 'object', value: { lng: { name: 'number' }, lat: { name: 'number' } } } } } }, // { lng, lat }[][][]
        ],
      },
      table: {
        type: { summary: 'LngLatLike[] | LngLatLike[][] | LngLatLike[][][]' },
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
      description: '勾勒形状轮廓的虚线和间隙的样式',
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
    zooms: {
      description: '此缩放范围内 polygon 可见',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[2, 20]' },
      },
      control: 'array',
    },
    extrusionHeight: {
      description: '3D 模式下，设置立面体高度值。',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'number', min: 0 },
    },
    roofColor: {
      description: '3D 模式下，立面体顶面颜色，支持 rgba、rgb、十六进制等。',
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
    wallColor: {
      description: '3D 模式下，立面体侧面颜色，支持 rgba、rgb、十六进制等。',
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
    onDragstart: {
      description: '开始拖拽=时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onDragging: {
      description: '鼠标拖拽移动=时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onDragend: {
      description: '拖拽移动结束触发事件',
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

type AMapPolygonStory = Story<AMapPolygonProps>;

const Template: AMapPolygonStory = (args) => <AMapPolygon {...args} />;

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '一般多边形';
CommonUse.args = {};

export const PolygonWithHole: typeof Template = Template.bind({});
PolygonWithHole.storyName = '带洞多边形';
PolygonWithHole.args = {
  path: [
    [
      [116.384595, 39.901321],
      [116.383526, 39.899865],
      [116.386284, 39.900917],
    // [116.384595, 39.901321],
    ],
    [
      [116.384594, 39.901],
      [116.384, 39.9003],
      [116.3861, 39.900917],
    // [116.384594, 39.901],
    ],
  ],
};

export const MultiPolygon: typeof Template = Template.bind({});
MultiPolygon.storyName = '复合多边形（MultiPolygon）';
MultiPolygon.args = {
  path: [
    [
      [
        [116.388624, 39.900055],
        [116.390452, 39.898583],
        [116.391294, 39.900003],
        // [116.388624, 39.900055],
      ],
      [
        [116.389113, 39.899924],
        [116.390251, 39.898962],
        [116.391055, 39.899899],
        // [116.389113, 39.899924],
      ],
    ],
    [
      [
        [116.387884, 39.899645],
        [116.38796, 39.898347],
        [116.390175, 39.898394],
        // [116.387884, 39.899645],
      ],
    ],
  ],
};

const { onChange } = actions('onChange');
const $polygon = createRef<AMap.Polygon>();
const computeTarget: AMapPolygonEditorProps['computeTarget'] = (polygons) => polygons?.find(
  (polygon) => polygon === $polygon.current,
);

export const Editable: AMapPolygonStory = (args) => (
  <>
    <AMapPolygon {...args} ref={$polygon} />
    <AMapPolygonEditor computeTarget={computeTarget} onChange={onChange} />
  </>
);
Editable.storyName = '支持编辑';
Editable.args = {
  path: [
    [
      [
        [116.388624, 39.900055],
        [116.390452, 39.898583],
        [116.391294, 39.900003],
        // [116.388624, 39.900055],
      ],
      [
        [116.389113, 39.899924],
        [116.390251, 39.898962],
        [116.391055, 39.899899],
        // [116.389113, 39.899924],
      ],
    ],
    [
      [
        [116.387884, 39.899645],
        [116.38796, 39.898347],
        [116.390175, 39.898394],
        // [116.387884, 39.899645],
      ],
    ],
  ],
};

export const Draggable: typeof Template = Template.bind({});
Draggable.storyName = '可拖拽';
Draggable.args = {
  draggable: true,
  onDragstart: eventHandler.onDragstart,
  onDragging: eventHandler.onDragging,
  onDragend: eventHandler.onDragend,
};

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

export const In3DMode: typeof Template = Template.bind({});
In3DMode.storyName = '3D 模式';
In3DMode.args = {
  extrusionHeight: 300,
  roofColor: 'red',
  wallColor: 'yellow',
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
