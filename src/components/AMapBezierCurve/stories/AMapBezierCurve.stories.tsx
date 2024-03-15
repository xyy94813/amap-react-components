import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapBezierCurve } from '../../../index';

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

const meta: Meta<typeof AMapBezierCurve> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapBezierCurve',
  component: AMapBezierCurve,
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    path: [
      // 每个弧线段有两种描述方式
      [116.37, 39.91], // 起点
      // 第一段弧线
      [
        [116.380298, 39.907771],
        [116.38, 39.90], // 控制点，途经点
      ],
      // 第二段弧线
      [
        [116.385298, 39.907771],
        [116.40, 39.90], // 控制点，途经点//弧线段有两种描述方式1
      ],
      // 第三段弧线
      [
        // 弧线段有两种描述方式2
        [116.392872, 39.887391], // 控制点
        [116.40772, 39.909252], // 控制点
        [116.41, 39.89], // 途经点
      ],
      // 第四段弧线
      [
        [116.423857, 39.889498],
        [116.422312, 39.899639],
        [116.425273, 39.902273],
      ],
      // 控制点，控制点，途经点，每段最多两个控制点
    ] as any,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    path: {},
    // style option
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
    cursor: {
      description: '指定鼠标悬停时的鼠标样式',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
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
    isOutline: {
      description: '是否显示描边',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    borderWeight: {
      description: '描边的宽度',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'number',
        min: 0,
        step: 1,
      },
    },
    outlineColor: {
      description: '线条描边颜色，此项仅在 isOutline 为 true 时有效',
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
    ///
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
    // event properties
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

type AMapBezierCurveStory = StoryObj<typeof AMapBezierCurve>;

export const CommonUse: AMapBezierCurveStory = {
  name: '基本使用',
};

export const CustomStyle: AMapBezierCurveStory = {
  name: '自定义样式',
  args: {
    strokeColor: 'red',
    strokeStyle: 'dashed',
    strokeOpacity: 0.1,
    strokeWeight: 20,
  },
};

export const ClickEvent: AMapBezierCurveStory = {
  name: '点击事件（左单/左双/右单）',
  args: {
    onClick: eventHandler.onClick,
    onDBLClick: eventHandler.onDBLClick,
    onRightClick: eventHandler.onRightClick,
  },
};

export const MouseEvent: AMapBezierCurveStory = {
  name: '鼠标事件（按下/抬起/经过/移出）',
  args: {
    onMousedown: eventHandler.onMousedown,
    onMouseup: eventHandler.onMouseup,
    onMouseover: eventHandler.onMouseover,
    onMouseout: eventHandler.onMouseout,
  },
};

export const TouchEvent: AMapBezierCurveStory = {
  name: '触摸事件（触摸开始/触摸移动/触摸结束）',
  args: {
    onTouchstart: eventHandler.onTouchstart,
    onTouchmove: eventHandler.onTouchmove,
    onTouchend: eventHandler.onTouchend,
  },
};