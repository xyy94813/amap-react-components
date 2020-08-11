import React, { useState, useCallback, useMemo } from 'react';
import { actions } from '@storybook/addon-actions';

import createAMapAPIContainer from '../../AMapAPIContainer/createAMapAPIContainer';
import { AMapMap } from '../../AMapMap';

import AMapControlBar from '../AMapControlBar';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
});

export const Async = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapControlBar position="LT" />
      </AMapMap>
    </div>
  </APIContainer>
);

const SyncAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
  plugins: ['AMap.ControlBar'],
});

export const Sync = () => (
  <SyncAPIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapControlBar position="LT" />
      </AMapMap>
    </div>
  </SyncAPIContainer>
);

export const SupportedFunctions = () => {
  const [visiable, setVisiable] = useState<boolean>(true);
  const [showControlBtn, setShowControlBtn] = useState<boolean>(false);

  const handleSwitchBtnClick = useCallback(() => {
    setVisiable((v) => !v);
  }, []);

  const handleSwitchBtn2Click = useCallback(() => {
    setShowControlBtn((v) => !v);
  }, []);

  const eventHandler = useMemo(() => actions('onHide', 'onShow'), []);

  return (
    <SyncAPIContainer>
      <div
        style={{
          height: 'calc(100vh - 8px * 2)',
          display: 'grid',
          gridRowGap: 12,
          gridTemplateRows: 'max-content auto',
        }}
      >
        <div>
          <button type="button" onClick={handleSwitchBtnClick}>
            {visiable ? 'hide' : 'show'}
          </button>
          &nbsp;
          <button type="button" onClick={handleSwitchBtn2Click}>
            {showControlBtn ? 'hide control btn' : 'show control btn'}
          </button>
        </div>
        <div>
          <AMapMap zoom={12}>
            <AMapControlBar
              position="LT"
              showControlButton={showControlBtn}
              visiable={visiable}
              onHide={eventHandler.onHide}
              onShow={eventHandler.onShow}
            />
          </AMapMap>
        </div>
      </div>
    </SyncAPIContainer>
  );
};

export default {
  title: 'AMapControlBar',
};
