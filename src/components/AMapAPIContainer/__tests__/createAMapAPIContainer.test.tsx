import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import AMapLoader from '@amap/amap-jsapi-loader';
import type { AMapAPIHocProps } from '../interface';
import { createAMapAPIContainer } from '../createAMapAPIContainer';

import getGlobalObject from '../../../helpers/getGlobalObject';

jest.mock('@amap/amap-jsapi-loader', () => ({
  esModule: true,
  default: {
    load: jest.fn().mockResolvedValue(undefined),
  },
}));

jest.mock('../../../helpers/getGlobalObject', () => ({
  esModule: true,
  default: jest.fn().mockReturnValue({}),
}));

describe('createAMapAPIContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('loads AMap and AMapUI when they are not defined', async () => {
    const AMapAPIContainer = createAMapAPIContainer({ key: 'key', AMapUI: { version: '1.0' } });
    const TestComponent: React.FC<AMapAPIHocProps> = ({ children }) => (
      <React.Suspense fallback="loading">
        <AMapAPIContainer>
          {children}
        </AMapAPIContainer>
      </React.Suspense>
    );

    const { queryByText } = render(<TestComponent>Testing AMapAPIContainer</TestComponent>);

    queryByText('Testing AMapAPIContainer');

    expect(AMapLoader.load).toBeCalledTimes(1);
  });

  test('loads AMap and AMapUI when they are already defined', async () => {
    const mockGlobal = {
      AMap: {
        plugin: jest.fn(),
      },
      AMapUI: {},
    };
    (getGlobalObject as jest.Mock).mockReturnValueOnce(mockGlobal);

    const AMapAPIContainer = createAMapAPIContainer({
      key: 'key',
    } as any);

    const TestComponent: React.FC<AMapAPIHocProps> = ({ children }) => (
      <React.Suspense fallback="loading">
        <AMapAPIContainer>
          {children}
        </AMapAPIContainer>
      </React.Suspense>
    );

    const { queryByText } = render(<TestComponent>Testing AMapAPIContainer</TestComponent>);

    queryByText('Testing AMapAPIContainer');
    expect(AMapLoader.load).toBeCalledTimes(0);
    expect(mockGlobal.AMap.plugin).not.toBeCalled();
  });

  test('loads plugins when AMap and AMapUI are already defined', async () => {
    const mockGlobal = {
      AMap: {
        plugin: jest.fn(),
      },
      AMapUI: {},
    };
    (getGlobalObject as jest.Mock).mockReturnValueOnce(mockGlobal);

    const AMapAPIContainer = createAMapAPIContainer({
      key: 'key',
      plugins: ['Plugin1', 'Plugin2'],
    } as any);

    const TestComponent: React.FC<AMapAPIHocProps> = ({ children }) => (
      <React.Suspense fallback="loading">
        <AMapAPIContainer>
          {children}
        </AMapAPIContainer>
      </React.Suspense>
    );

    const { queryByText } = render(<TestComponent>Testing AMapAPIContainer</TestComponent>);

    queryByText('Testing AMapAPIContainer');
    expect(AMapLoader.load).toBeCalledTimes(0);
    expect(mockGlobal.AMap.plugin)
      .toHaveBeenCalledWith(['Plugin1', 'Plugin2'], expect.any(Function));
  });

  test('plugins is empty when AMap and AMapUI are already defined2', async () => {
    const mockGlobal = {
      AMap: {
        plugin: jest.fn(),
      },
      AMapUI: {},
    };
    (getGlobalObject as jest.Mock).mockReturnValueOnce(mockGlobal);

    const AMapAPIContainer = createAMapAPIContainer({
      key: 'key',
      plugins: [],
    } as any);

    const TestComponent: React.FC<AMapAPIHocProps> = ({ children }) => (
      <React.Suspense fallback="loading">
        <AMapAPIContainer>
          {children}
        </AMapAPIContainer>
      </React.Suspense>
    );

    const { queryByText } = render(<TestComponent>Testing AMapAPIContainer</TestComponent>);

    queryByText('Testing AMapAPIContainer');
    expect(AMapLoader.load).toBeCalledTimes(0);
    expect(mockGlobal.AMap.plugin).not.toBeCalled();
  });
});
