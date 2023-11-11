import * as React from 'react';
import type { Story } from '@storybook/react';

import { AMapMap, AMapMapProps } from '../index';

const withAMap = (mapProps: AMapMapProps = {}) => (renderStory: Story, context: any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AMapMap {...mapProps}>{renderStory({}, context)}</AMapMap>
);

export default withAMap;
