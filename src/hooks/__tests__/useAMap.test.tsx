/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { AMapAPIContext } from '../../components/AMapAPIContainer';
import { AMapMapContext } from '../../components/AMapMap';
import useAMap from '../useAMap';

describe('useAMap', () => {
  beforeEach(cleanup);

  test('should return the AMap API from context', () => {
    const mockAMapAPIContextValue = {
      /* mock AMap API object */
      __AMAP__: {},
      __AMAP_UI__: {},
    };
    const mockMap = null;

    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <AMapAPIContext.Provider value={mockAMapAPIContextValue as any}>
        <AMapMapContext.Provider value={mockMap as any}>
          {children}
        </AMapMapContext.Provider>
      </AMapAPIContext.Provider>
    );

    const { result } = renderHook(() => useAMap(), { wrapper });

    expect(result.current.__AMAP__).toBe(mockAMapAPIContextValue.__AMAP__);
    expect(result.current.__AMAP_UI__).toBe(mockAMapAPIContextValue.__AMAP_UI__);
    expect(result.current.map).toBe(mockMap);
  });
});
