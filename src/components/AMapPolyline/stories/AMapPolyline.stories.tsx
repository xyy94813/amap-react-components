import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapPolyline,
  AMapPolylineEditor,
  AMapPolylineEditorProps,
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

const meta: Meta<typeof AMapPolyline> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapPolyline',
  component: AMapPolyline,
  decorators: [
    withAutoFitView,
    withAMap(),
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
      description: '多边形轮廓线的节点坐标数组。支持 lineString 和 MultiLineString 类型。',
      type: {
        required: true,
        name: 'union',
        value: [
          { name: 'array', value: { name: 'array', value: { name: 'number' } } }, // [number, number][]
          { name: 'array', value: { name: 'array', value: { name: 'array', value: { name: 'number' } } } }, // [number, number][][]
          { name: 'array', value: { name: 'object', value: { lng: { name: 'number' }, lat: { name: 'number' } } } }, // { lng, lat }[]
          { name: 'array', value: { name: 'array', value: { name: 'object', value: { lng: { name: 'number' }, lat: { name: 'number' } } } } }, // { lng, lat }[][]
        ],
      },
      table: {
        type: {
          summary: [
            'Array<LngLatLike>',
            'Array<Array<LngLatLike>>',
          ].join(' | '),
        },
      },
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
    draggable: {
      description: '是否可拖动',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
    borderWeight: {
      description: '描边的宽度',
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
    isOutline: {
      description: '是否显示描边',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    outlineColor: {
      description: '线条描边颜色，此项仅在 isOutline 为true时有效',
      type: { required: false, name: 'string' },
      table: {
        defaultValue: { summary: '#00B2D5' },
      },
      control: 'color',
    },
    lineJoin: {
      description: '折线拐点的绘制样式',
      type: { required: false, name: 'enum', value: ['miter', 'round', 'bevel'] },
      table: {
        type: { summary: ['miter', 'round', 'bevel'].join('|') },
        defaultValue: { summary: 'miter' },
      },
      options: {
        'miter(尖角)': 'miter',
        'round(圆角)': 'round',
        'bevel(斜角)': 'bevel',
      },
      control: 'select',
    },
    lineCap: {
      description: '折线拐点的绘制样式',
      type: { required: false, name: 'enum', value: ['butt', 'round', 'square'] },
      table: {
        type: { summary: ['butt', 'round', 'square'].join('|') },
        defaultValue: { summary: 'butt' },
      },
      options: {
        'butt(无头)': 'butt',
        'round(圆头)': 'round',
        'square(方头)': 'square',
      },
      control: 'select',
    },
    geodesic: {
      description: '是否绘制成大地线',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    cursor: {
      description: '指定鼠标悬停时的鼠标样式。同 CSS 中的 cursor 属性',
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
      description: '此缩放范围内 polyline 可见',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[2, 20]' },
      },
      control: 'array',
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

type AMapPolylineStory = StoryObj<typeof AMapPolyline>;

export const CommonUse: AMapPolylineStory = {
  name: '一般使用',
};

const { onChange } = actions('onChange');
const $polyline = React.createRef<AMap.Polyline>();
const computeTarget: AMapPolylineEditorProps['computeTarget'] = (polygons) => polygons?.find(
  (polygon) => polygon === $polyline.current,
);

export const Editable: AMapPolylineStory = {
  name: '支持编辑',
  render: (args) => (
    <>
      <AMapPolyline {...args} ref={$polyline} />
      <AMapPolylineEditor computeTarget={computeTarget} onChange={onChange} />
    </>
  ),
};

export const Draggable: AMapPolylineStory = {
  name: '可拖拽',
  args: {
    draggable: true,
    strokeWeight: 40,
    cursor: 'move',
    onDragstart: eventHandler.onDragstart,
    onDragging: eventHandler.onDragging,
    onDragend: eventHandler.onDragend,
  },
};

export const CustomStyle: AMapPolylineStory = {
  name: '自定义样式',
  args: {
    zIndex: 10,
    strokeColor: 'red',
    strokeStyle: 'dashed',
    strokeOpacity: 0.8,
    strokeWeight: 20,
    strokeDasharray: [1, 4],
    borderWeight: 10,
    lineJoin: 'bevel',
    showDir: true,
    dirColor: '#000',
    lineCap: 'round',
    // dirImg,
    isOutline: true,
    outlineColor: 'yellow',
    geodesic: true,
  },
};

export const ClickEvent: AMapPolylineStory = {
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick,
  },
};
ClickEvent.storyName = '点击事件（左单/左双/右单）';
ClickEvent.args = {
  onClick: eventHandler.onClick,
  onDBLClick: eventHandler.onDBLClick,
  onRightClick: eventHandler.onRightClick,
};

export const MouseEvent : AMapPolylineStory = {
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout,
  },
};

export const TouchEvent: AMapPolylineStory = {
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend,
  },
};
