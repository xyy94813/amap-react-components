import React from 'react';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapScale, AMapScaleProps } from 'index';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';

const eventHandler = actions('onShow', 'onHide');

export default {
  title: '组件(Components)/地图控件(Control)/AMapScale',
  component: AMapScale,
  decorators: [withAMapContainer],
  args: {
    position: 'LB',
    offset: [0, 0],
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    position: {
      description: '控件停靠位置',
      table: {
        type: { summary: 'string|object' },
        defaultValue: { summary: 'LB' },
      },
      control: {
        type: 'select',
        options: ['LT', 'RT', 'LB', 'RB'],
      },
    },
    offset: {
      description:
        '相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。',
      type: { summary: 'array', required: false },
      control: 'array',
    },
    visible: {
      description: '显示或隐藏',
      control: 'boolean',
    },
    onShow: {
      description: '显示时触发此事件',
    },
    onHide: {
      description: '隐藏时触发此事件',
    },
  },
} as Meta;

type AMapScaleStory = Story<AMapScaleProps>;

const Template: AMapScaleStory = (args) => <AMapScale {...args} />;

export const ChangeOffset: AMapScaleStory = Template.bind({});
ChangeOffset.storyName = '设置偏移量';
ChangeOffset.args = { offset: [10, 10] };

export const ChangePosition: AMapScaleStory = Template.bind({});
ChangePosition.storyName = '指定位置';
ChangePosition.args = { position: 'LT' };
