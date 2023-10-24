import * as React from 'react';
import type { Story } from '@storybook/react';

import { AMapMap } from '../index';

const withAMap = (renderStory: Story, context: any) => (
  <AMapMap>{renderStory({}, context)}</AMapMap>
);

export default withAMap;
