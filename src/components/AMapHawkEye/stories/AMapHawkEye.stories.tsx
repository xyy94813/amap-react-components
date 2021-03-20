import React from 'react';
import { Story, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';

import AMapHawkEye, { AMapHawkEyeProps } from '../index';

const eventHandler = actions('onShow', 'onHide', 'onOpen', 'onClose');

export default {
  title: 'Components/Control/AMapHawkEye',
  component: AMapHawkEye,
  decorators: [withAMapContainer],
  args: {
    autoMove: true,
    showRectangle: true,
    showButton: true,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    offset: {
      description:
        '相对于地图容器偏移量，正数代表地图中心，复数向地图外侧(实际现象与高德地图官方文档不一致)。',
      control: {
        type: 'object',
      },
    },
    autoMove: {
      description: '是否随主图视口变化移动',
      control: {
        type: 'boolean',
      },
    },
    showRectangle: {
      description: '是否显示视口矩形',
      control: {
        type: 'boolean',
      },
    },
    showButton: {
      description: '是否显示打开关闭的按钮',
      control: {
        type: 'boolean',
      },
    },
    isOpen: {
      description: '默认是否展开',
      control: {
        type: 'boolean',
      },
    },
    mapStyle: {
      description: '缩略图要显示的地图自定义样式，如 "amap://styles/dark"',
      control: {
        type: 'text',
      },
    },
    width: {
      description: '缩略图的宽度，同CSS，如 "200px"',
      control: {
        type: 'text',
        description: '缩略图的宽度，同CSS，如 "200px"',
      },
    },
    height: {
      description: '缩略图的高度，同CSS，如"200px"',
      control: {
        type: 'text',
      },
    },
    borderStyle: {
      description: '缩略图的边框样式，同CSS，如 "double solid solid double"',
      control: {
        type: 'text',
      },
    },
    borderColor: {
      description: '缩略图的高度，同CSS，如 "silver"',
      control: {
        type: 'color',
      },
    },
    borderRadius: {
      description: '缩略图的高度，同CSS，如 "5px"',
      control: {
        type: 'text',
      },
    },
    borderWidth: {
      description: '缩略图的高度，同CSS，如 "5px"',
      control: {
        type: 'text',
      },
    },
    buttonSize: {
      description: '箭头按钮的像素尺寸，同CSS，如 "12px"',
      control: {
        type: 'text',
      },
    },
    visible: {
      description: '显示或隐藏',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<AMapHawkEyeProps> = (args) => <AMapHawkEye {...args} />;

export const ChangePosition = Template.bind({});
ChangePosition.args = { offset: [10, 10] };

export const ChangeStyle = Template.bind({});
ChangeStyle.args = {
  height: '200px',
  width: '100px',
  borderStyle: 'dashed',
  borderColor: 'red',
  borderRadius: '4px',
  borderWidth: '5px',
  buttonSize: '10px',
};

export const ChangeTheme = Template.bind({});
ChangeTheme.args = {
  mapStyle: 'amap://styles/dark',
};

export const NotAutoMove = Template.bind({});
ChangeTheme.args = {
  autoMove: false,
};
