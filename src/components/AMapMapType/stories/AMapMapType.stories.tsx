import type { StoryObj, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import { AMapMapType } from '../../../index';

import withAMap from '../../../storybook-decorators/withAMap';
import withAMapContainer from '../../../storybook-decorators/withAMapContainer';
import withAPIContainer from '../../../storybook-decorators/withAPIContainer';

const eventHandler = actions('onShow', 'onHide');

const meta: Meta<typeof AMapMapType> = {
  title: '组件(Components)/地图控件(Control)/AMapMapType',
  component: AMapMapType,
  decorators: [
    withAMap(),
    withAMapContainer,
    withAPIContainer,
  ],
  args: {
    defaultType: 0,
    visible: true,
    onShow: eventHandler.onShow,
    onHide: eventHandler.onHide,
  },
  argTypes: {
    defaultType: {
      description: '初始化默认图层类型。 默认底图: 0; 卫星图: 1。',
      type: { required: false, name: 'enum', value: [0, 1] },
      table: {
        type: { summary: '0|1' },
        defaultValue: { summary: '0' },
      },
      options: {
        '0(默认底图)': 0,
        '1(卫星图)': 1,
      },
      control: { type: 'select' },
    },
    showTraffic: {
      description: '叠加实时交通图层',
      type: { required: false, name: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    showRoad: {
      description: '叠加路网图层',
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
    onShow: {
      description: '显示时触发此事件',
      type: { required: false, name: 'function' },
      table: {
        category: '事件',
        type: { summary: '(event: any) => void' },
      },
      control: false,
    },
    onHide: {
      description: '隐藏时触发此事件',
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

type AMapMapTypeStory = StoryObj<typeof AMapMapType>;

export const CommonUse: AMapMapTypeStory = {
  name: '一般使用',
};

export const DefaultType: AMapMapTypeStory = {
  name: '默认底图',
  args: { defaultType: 1 },
};

export const DefaultShowTraffic: AMapMapTypeStory = {
  name: '默认开启路况',
  args: { showTraffic: true },
};

export const DefaultShowRoad: AMapMapTypeStory = {
  name: '默认开启路网',
  args: { showRoad: true },
};
