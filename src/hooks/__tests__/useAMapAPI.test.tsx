import * as React from 'react';
import { cleanup, renderHook } from '@testing-library/react';

import { AMapAPIContext } from '../../components/AMapAPIContainer';
import useAMapAPI from '../useAMapAPI';

describe('useAMapAPI', () => {
  beforeEach(cleanup);

  test('should return the AMap API from context', () => {
    const mockAMapAPIContextValue = {
      /* mock AMap API object */
      __AMAP__: {},
      __AMAP_UI__: {},
    };

    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <AMapAPIContext.Provider value={mockAMapAPIContextValue as any}>
        {children}
      </AMapAPIContext.Provider>
    );

    const { result } = renderHook(() => useAMapAPI(), { wrapper });

    expect(result.current).toBe(mockAMapAPIContextValue);
  });
});
