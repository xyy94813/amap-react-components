import React from 'react';
import { renderToString } from 'react-dom/server';
import type { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  AMapToolBar,
  AMapMarker,
  AMapMarkerProps,
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
  'onMousemove',
  'onMousedown',
  'onMouseup',
  'onMouseover',
  'onMouseout',
  'onTouchstart',
  'onTouchmove',
  'onTouchend',
  'onDragstart',
  'onDragging',
  'onDragend',
  'onMoving',
  'onMoveEnd',
  'onMoveAlong',
);

const meta: Meta<typeof AMapMarker> = {
  title: '组件(Components)/覆盖物(Overlay)/AMapMarker',
  component: AMapMarker,
  decorators: [
    withAutoFitView,
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    position: [116.39, 39.9],
    title: '自定义的 Title',
    anchor: 'center',
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    position: {
      description: '点标记在地图上显示的位置',
      type: { required: true, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'LngLatLike' },
      },
      control: 'object',
    },
    title: {
      description: '鼠标滑过点标记时的文字提示。不设置则鼠标滑过点标无文字提示。',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    content: {
      description: '点标记显示内容。可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖。',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: 'string | HTMLElement' },
      },
      control: 'text',
    },
    icon: {
      description: '在点标记中显示的图标。有合法的 content 内容设置时，此属性无效。',
      type: { required: false, name: 'string' },
      table: {
        type: { summary: ['AMap.Icon', 'string'].join('|') },
      },
      control: 'text',
    },
    label: {
      description: '设置点标记文本标签内容',
      type: {
        required: false,
        name: 'object',
        value: {
          content: { name: 'string' },
          direction: { name: 'string' },
          offset: { name: 'array', value: { name: 'number' } },
        },
      },
      table: {
        type: {
          summary: 'LabelOptions',
          detail: '具体字段参考高德 JS API 文档',
        },
      },
      control: false,
    },
    zooms: {
      description: '设置显示级别范围。注意：当前实现变更 zooms 时会触发重新创建实例。',
      type: { required: false, name: 'array', value: { name: 'number' } },
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[2, 20]' },
      },
      control: 'array',
    },
    clickable: {
      description: '点标记是否可点击',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    draggable: {
      description: '点标记是否可拖拽',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
    anchor: {
      description: '设置点标记锚点',
      type: {
        required: false,
        name: 'enum',
        value: [
          'top-left',
          'top-center',
          'top-right',
          'middle-left',
          'center',
          'middle-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ],
      },
      table: {
        type: {
          summary: [
            'top-left',
            'top-center',
            'top-right',
            'middle-left',
            'center',
            'middle-right',
            'bottom-left',
            'bottom-center',
            'bottom-right',
          ].join('|'),
        },
        defaultValue: { summary: 'center' },
      },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'center',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      control: 'select',
    },
    offset: {
      description: '覆盖物偏移量',
      type: {
        required: false,
        name: 'union',
        value: [
          { name: 'array', value: { name: 'number' } },
          {
            name: 'object',
            value: {
              x: { name: 'number' },
              y: { name: 'number' },
            },
          },
        ],
      },
      table: {
        type: { summary: ['Vector2', 'Pixel'].join('|') },
        defaultValue: { summary: '[0, 0]' },
      },
      control: 'object',
    },
    angle: {
      description: '点标记的旋转角度',
      type: { required: false, name: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'number', min: 0, max: 360 },
    },
    size: {
      description: '尺寸',
      type: {
        required: false,
        name: 'union',
        value: [
          { name: 'array', value: { name: 'number' } },
          {
            name: 'object',
            value: {
              width: { name: 'number' },
              height: { name: 'number' },
            },
          },
        ],
      },
      table: {
        type: { summary: ['AMap.Size', 'AMap.Vector2'].join('|') },
        defaultValue: { summary: '[36, 36]' },
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
    //
    visible: {
      description: '显示或隐藏',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: 'boolean',
    },
    //
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
    onMousemove: {
      description: '鼠标移动',
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
    onDragstart: {
      description: '开始拖拽点标记时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onDragging: {
      description: '鼠标拖拽移动点标记时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onDragend: {
      description: '点标记拖拽移动结束触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMoving: {
      description: '点标记在执行 `moveTo`，`moveAlong` 动画时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMoveEnd: {
      description: '点标记在执行 `moveTo`，`moveAlong` 动画时触发事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onMoveAlong: {
      description: '点标记执行 moveAlong 动画一次后触发事件',
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

const Template: Story<AMapMarkerProps> = (args) => <AMapMarker {...args} />;

export const CommonUse: typeof Template = Template.bind({});
CommonUse.storyName = '一般使用';
CommonUse.args = {};

export const CustomIcon: typeof Template = Template.bind({});
CustomIcon.storyName = '自定义标记图标';
CustomIcon.args = {
  icon: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
  size: [38, 60],
};

export const CustomContent: typeof Template = Template.bind({});
CustomContent.storyName = '自定义标记内容';
CustomContent.args = {
  content: renderToString(
    <span style={{ color: 'red' }}>点</span>,
  ),
  icon: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
  size: [38, 60],
};

export const CustomLabel: typeof Template = Template.bind({});
CustomLabel.storyName = '自定义标签内容';
CustomLabel.args = {
  label: {
    content: renderToString(
      <span style={{ color: 'red' }}>标签内容</span>,
    ),
    offset: [0, 10],
    direction: 'bottom',
  },
};

export const CustomZooms: Story<AMapMarkerProps> = (args) => (
  <>
    <AMapToolBar />
    <AMapMarker {...args} />
  </>
);
CustomZooms.storyName = '自定义可显示层级';
CustomZooms.args = {
  zooms: [10, 14],
};

export const Draggable: typeof Template = Template.bind({});
Draggable.storyName = '可拖拽';
Draggable.args = {
  draggable: true,
  onDragstart: eventHandler.onDragstart,
  onDragging: eventHandler.onDragging,
  onDragend: eventHandler.onDragend,
};

export const CustomAnchor: typeof Template = Template.bind({});
CustomAnchor.storyName = '自定义点标记锚点';
CustomAnchor.args = {
  anchor: 'bottom-center',
};

export const CustomOffset: typeof Template = Template.bind({});
CustomOffset.storyName = '自定义偏移量';
CustomOffset.args = {
  offset: [300, 300],
};

export const CustomAngle: typeof Template = Template.bind({});
CustomAngle.storyName = '自定义旋转角度';
CustomAngle.args = {
  angle: 45,
};

export const SameZIndex: Story<AMapMarkerProps> = ({
  // eslint-disable-next-line react/prop-types
  zIndex,
  ...args
}) => (
  <>
    <AMapMarker
      {...args}
      zIndex={zIndex}
      icon="//webapi.amap.com/theme/v1.3/markers/b/mark_r.png"
      size={[38, 60]}
    />
    <AMapMarker {...args} />
  </>
);
SameZIndex.storyName = '自定义 Marker 层级';
SameZIndex.args = {
  zIndex: 13,
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
