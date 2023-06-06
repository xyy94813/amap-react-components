import React from 'react';
import type { Story } from '@storybook/react';

import AMapAutoFitView from '..';

const withAutoFitView = (renderStory: Story, context: any) => (
  <>
    {renderStory({}, context)}
    <AMapAutoFitView />
  </>
);

export default withAutoFitView;
