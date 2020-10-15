import React from 'react';

import { createAMapAPIContainer } from '../../AMapAPIContainer';
import AMapMap from '../index';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY || '',
});

export const withCenter = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap center={[114.021769, 22.530421]} />
    </div>
  </APIContainer>
);

export const withZoom = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12} />
    </div>
  </APIContainer>
);

export const withCityName = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap cityName="上海" />
    </div>
  </APIContainer>
);

export default {
  title: 'AMapMap',
  component: withCityName,
};
