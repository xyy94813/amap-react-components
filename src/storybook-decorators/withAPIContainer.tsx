import * as React from 'react';
import type { Story } from '@storybook/react';

import { createAMapAPIContainer } from '../index';

const AMAP_API_KEY: string = process.env.STORYBOOK_AMAP_API_KEY || '';

const APIContainer = createAMapAPIContainer({
  key: AMAP_API_KEY,
  version: '2.0',
  AMapUI: {
    version: '1.1',
  },
});

const withAPIContainer = (renderStory: Story, context: any) => (
  <APIContainer>
    {renderStory({}, context)}
  </APIContainer>
);

export default withAPIContainer;
