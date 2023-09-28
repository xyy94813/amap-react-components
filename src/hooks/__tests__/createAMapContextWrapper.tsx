import * as React from 'react';

import type { AMapAPIContextValue } from '../../components/AMapAPIContainer';
import { AMapAPIContext } from '../../components/AMapAPIContainer';
import type { AMapMapContextValue } from '../../components/AMapMap';
import { AMapMapContext } from '../../components/AMapMap';

/**
 * 单元测试辅助工具
*/
const createAMapContextWrapper = (
  mockApiCtx: AMapAPIContextValue,
  mockMapCtx: AMapMapContextValue,
) => ({ children }: { children: any }) => (
  <AMapAPIContext.Provider value={mockApiCtx as any}>
    <AMapMapContext.Provider value={mockMapCtx as any}>
      {children}
    </AMapMapContext.Provider>
  </AMapAPIContext.Provider>
);

export default createAMapContextWrapper;
