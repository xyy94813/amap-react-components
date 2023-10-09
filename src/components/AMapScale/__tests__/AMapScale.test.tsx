/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapScale from '../AMapScale';

const mockInstance = {
  _config: {} as any,
  _container: document.createElement('div'),
  show: jest.fn(),
  hide: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};
jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      Scale: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapScale Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapScale />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Scale', expect.any(Function));
  });
  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapScale />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Scale', expect.any(Function));
  });

  test('change position and offset', () => {
    const { rerender } = render(<AMapScale />);

    expect(mockInstance._container.style.cssText).toBe('left: 10px; bottom: 10px;');

    rerender(<AMapScale position="RB" offset={[20, 20]} />);

    expect(mockInstance._container.style.cssText).toBe('right: 20px; bottom: 20px;');
    expect(mockInstance._config.position).toEqual('RB');
    expect(mockInstance._config.offset).toEqual([20, 20]);
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapScale />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapScale visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('bind event correctly', () => {
    const onShow = jest.fn();
    const onHide = jest.fn();

    const { unmount } = render(<AMapScale
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
