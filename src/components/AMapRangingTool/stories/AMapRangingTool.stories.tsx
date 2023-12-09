import type { Meta, StoryObj } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapRangingTool } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onNodeAdded', 'onNodeRemoved', 'onEnd');

const meta: Meta<typeof AMapRangingTool> = {
  title: '组件(Components)/工具(Tools)/AMapRangingTool',
  component: AMapRangingTool,
  decorators: [withAMap(), withAMapContainer, withAPIContainer],
  args: {},
  argTypes: {
    disabled: {
      description: '禁用 RangingTool',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    onNodeAdded: {
      description: '每添加一个量测点时触发此事件',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary: '(event: AMap.Event<"addnode">) => void',
        },
      },
    },
    onNodeRemoved: {
      description: '每删除一个量测点时触发此事件',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary: '(event: AMap.Event<"removenode">) => void',
        },
      },
    },
    onEnd: {
      description: '距离量测结束后触发此事件',
      type: { required: false, name: 'function' },
      table: {
        type: {
          summary: '(event: AMap.Event<"end">) => void',
        },
      },
    },
  },
};

export default meta;

type AMapRangingToolStory = StoryObj<typeof AMapRangingTool>;

export const CommonUse: AMapRangingToolStory = {
  name: '基本使用',
};

export const Disabled: AMapRangingToolStory = {
  name: '禁用',
  args: {
    disabled: true,
  },
};

export const BindEvent: AMapRangingToolStory = {
  name: '监听事件',
  args: {
    onNodeAdded: eventHandler.onNodeAdded,
    onNodeRemoved: eventHandler.onNodeRemoved,
    onEnd: eventHandler.onEnd,
  },
};
