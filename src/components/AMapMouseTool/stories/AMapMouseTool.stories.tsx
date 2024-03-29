import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapMouseTool } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onCompleted');

const meta: Meta<typeof AMapMouseTool> = {
  title: '组件(Components)/工具(Tools)/AMapMouseTool',
  component: AMapMouseTool,
  decorators: [
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    type: 'polygon',
    options: {
      strokeColor: 'red',
      strokeWeight: 4,
    },
    onCompleted: eventHandler.onCompleted,
  },
  argTypes: {
    type: {
      description: '工具类型',
      type: {
        required: true,
        name: 'enum',
        value: [
          'marker',
          'circle',
          'rectangle',
          'polyline',
          'polygon',
          'measureArea',
          'rule',
          'rectZoomIn',
          'rectZoomOut',
        ],
      },
      table: {
        type: {
          summary: [
            'marker',
            'circle',
            'rectangle',
            'polyline',
            'polygon',
            'measureArea',
            'rule',
            'rectZoomIn',
            'rectZoomOut',
          ].join('|'),
        },
        // defaultValue: { summary: '' },
      },
      options: [
        'marker',
        'circle',
        'rectangle',
        'polyline',
        'polygon',
        'measureArea',
        'rule',
        'rectZoomIn',
        'rectZoomOut',
      ],
      control: 'select',
    },
    options: {
      description: '额外参数',
      type: { required: false, name: 'object', value: {} },
      table: {
        type: { summary: 'object', detail: '具体字段参考高德 JS API 文档' },
      },
      control: 'object',
    },
    onCompleted: {
      description: '鼠标工具绘制覆盖物结束时触发此事件，obj 对象为绘制出来的覆盖物对象',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary: '(event: AMap.Event<"draw">) => void',
        },
      },
    },
  },
};

export default meta;

type AMapMouseToolStory = StoryObj<typeof AMapMouseTool>;

export const CommonUse: AMapMouseToolStory = {
  name: '基本使用',
  args: {
    type: 'polygon',
    options: {
      strokeColor: 'red',
      strokeWeight: 4,
    },
    onCompleted: eventHandler.onCompleted,
  },
};
