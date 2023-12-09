import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapRangingTool from '../AMapRangingTool';

const mockInstance = {
  turnOn: jest.fn(),
  turnOff: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb(
      {
        RangingTool: jest.fn(),
      },
      {},
    );

    return mockInstance;
  }),
}));

describe('AMapRangingTool', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapRangingTool />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('RangingTool', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapRangingTool />);
    }).not.toThrowError();
  });

  test('bind event correctly', () => {
    const onNodeAdded = jest.fn();
    const onNodeRemoved = jest.fn();
    const onEnd = jest.fn();

    const { unmount } = render(
      <AMapRangingTool onNodeAdded={onNodeAdded} onNodeRemoved={onNodeRemoved} onEnd={onEnd} />,
    );

    expect(mockInstance.on).toBeCalledTimes(3);
    expect(mockInstance.on).toBeCalledWith('addnode', onNodeAdded);
    expect(mockInstance.on).toBeCalledWith('removenode', onNodeRemoved);
    expect(mockInstance.on).toBeCalledWith('end', onEnd);

    unmount();

    expect(mockInstance.on).toBeCalledTimes(3);
    expect(mockInstance.off).toBeCalledWith('addnode', onNodeAdded);
    expect(mockInstance.off).toBeCalledWith('removenode', onNodeRemoved);
    expect(mockInstance.off).toBeCalledWith('end', onEnd);
  });
});
