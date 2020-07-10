import React, { useState, useMemo, useCallback } from 'react';
import { actions } from '@storybook/addon-actions';

import createAMapAPIContainer from '../../AMapAPIContainer/createAMapAPIContainer';
import { AMapMap } from '../../AMapMap';

import AMapHawkEye from '../AMapHawkEye';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
});

export const Async = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapHawkEye />
      </AMapMap>
    </div>
  </APIContainer>
);

const SyncAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
  plugins: ['AMap.HawkEye'],
});

export const Sync = () => (
  <SyncAPIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap zoom={12}>
        <AMapHawkEye />
      </AMapMap>
    </div>
  </SyncAPIContainer>
);

export const SupportedFunctions = () => {
  const [visiable, setVisiable] = useState<boolean>(true);
  // const [showRectangle, setShowRectangle] = useState<boolean>(false);
  // const [showMinifyBtn, setShowMinifyBtn] = useState<boolean>(false);

  const handleSwitchBtnClick = useCallback(() => {
    setVisiable((v) => !v);
  }, []);

  // const handleSwitchBtn1Click = useCallback(() => {
  //   setShowRectangle((v) => !v);
  // }, []);

  // const handleSwitchBtn2Click = useCallback(() => {
  //   setShowMinifyBtn((v) => !v);
  // }, []);

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
            {visiable ? 'Hide' : 'Show'}
          </button>
          {/* &nbsp;
          <button type="button" onClick={handleSwitchBtn1Click}>
            {showRectangle ? 'Hide Rectangle' : 'Show Rectangle'}
          </button>
          &nbsp;
          <button type="button" onClick={handleSwitchBtn2Click}>
            {showMinifyBtn ? 'Hide Minify Btn' : 'Show Minify Btn'}
          </button> */}
        </div>
        <div>
          <AMapMap zoom={12}>
            <AMapHawkEye
              showRectangle={false}
              showButton={false}
              // isOpen
              mapStyle="amap://styles/dark"
              borderStyle="dashed dotted solid double"
              borderColor="#000"
              borderRadius="12px"
              borderWidth="4px"
              buttonSize="4px"
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
  title: 'AMapHawkEye',
};
