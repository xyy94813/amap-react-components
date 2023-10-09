import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapMapType from '../AMapMapType';

const mockInstance = {
  show: jest.fn(),
  hide: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      MapType: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapMapType Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapMapType />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('MapType', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapMapType />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('MapType', expect.any(Function));
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapMapType />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapMapType visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('bind event correctly', () => {
    const onShow = jest.fn();
    const onHide = jest.fn();

    const { unmount } = render(<AMapMapType
      onShow={onShow}
      onHide={onHide}

    />);

    expect(mockInstance.on).toBeCalledTimes(2);
    expect(mockInstance.on).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.on).toHaveBeenCalledWith('hide', onHide);

    unmount();

    expect(mockInstance.off).toBeCalledTimes(2);
    expect(mockInstance.off).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.off).toHaveBeenCalledWith('hide', onHide);
  });
});
