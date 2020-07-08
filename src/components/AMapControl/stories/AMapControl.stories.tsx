import React from 'react';

import createAMapAPIContainer from '../../AMapAPIContainer/createAMapAPIContainer';
import { AMapMap } from '../../AMapMap';

import AMapScale from '../AMapScale';
import AMapToolbar from '../AMapToolBar';
import AMapControlBar from '../AMapControlBar';
import AMapHawkEye from '../AMapHawkEye';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY || '',
});

export const Scale = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapScale />
      </AMapMap>
    </div>
  </APIContainer>
);

export const Toolbar = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapToolbar />
      </AMapMap>
    </div>
  </APIContainer>
);

export const HawkEye = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapHawkEye />
      </AMapMap>
    </div>
  </APIContainer>
);

export const ControlBar = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapControlBar />
      </AMapMap>
    </div>
  </APIContainer>
);

export default {
  title: 'AMap Control',
  component: Scale,
};
