import React from 'react';
import type { StoryFn } from '@storybook/react';

import AMapAutoFitView from '../components/AMapAutoFitView';

const withAutoFitView = (renderStory: StoryFn, context: any) => (
  <>
    {renderStory({}, context)}
    <AMapAutoFitView />
  </>
);

export default withAutoFitView;
