import React from 'react';
import { Meta, Story } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapMouseTool, AMapMouseToolProps } from 'index';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';

const eventHandler = actions('onCompleted');

export default {
  title: '组件(Components)/工具(Tools)/AMapMouseTool',
  decorators: [withAMapContainer],
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
      type: { required: true, summary: 'string ' },
      control: {
        type: 'select',
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
      },
    },
    options: {
      description: '额外参数',
      type: { summary: 'object' },
    },
    onCompleted: {
      description: '鼠标工具绘制覆盖物结束时触发此事件，obj对象为绘制出来的覆盖物对象',
      type: { summary: '(event: AMap.Event<"draw">) => void' },
    },
  },
} as Meta;

const Template: Story<AMapMouseToolProps> = (args) => (
  <AMapMouseTool {...args} />
);

export const CommonUse = Template.bind({});
CommonUse.storyName = '基本使用';
CommonUse.args = {
  type: 'polygon',
  options: {
    strokeColor: 'red',
    strokeWeight: 4,
  },
  onCompleted: eventHandler.onCompleted,
};
