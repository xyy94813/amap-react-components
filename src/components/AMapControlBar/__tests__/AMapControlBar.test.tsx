/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapControlBar from '../AMapControlBar';

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      ControlBar: jest.fn(),
    }, {});
  }),
}));

describe('AMapControlBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapControlBar />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('ControlBar', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValue(null);
    expect(() => {
      render(<AMapControlBar />);
    }).not.toThrowError();
  });

  test('set to invisible', () => {
    const mockInstance = {
      _config: {},
      _container: document.createElement('div'),
      _pitchUp: document.createElement('div'),
      _pitchDown: document.createElement('div'),
      _rotateLeft: document.createElement('div'),
      _rotateRight: document.createElement('div'),
      _compass: document.createElement('div'),
      _luopan: document.createElement('div'),
      show: jest.fn(),
      hide: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);
    const { rerender } = render(<AMapControlBar />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapControlBar visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('change position and offset', () => {
    const mockInstance = {
      _config: {} as any,
      _container: document.createElement('div'),
      _pitchUp: document.createElement('div'),
      _pitchDown: document.createElement('div'),
      _rotateLeft: document.createElement('div'),
      _rotateRight: document.createElement('div'),
      _compass: document.createElement('div'),
      _luopan: document.createElement('div'),
      show: jest.fn(),
      hide: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);

    const { rerender } = render(<AMapControlBar />);

    expect(mockInstance._container.style.cssText).toBe('left: 10px; top: 10px;');

    rerender(<AMapControlBar position="RB" offset={[20, 20]} />);

    expect(mockInstance._container.style.cssText).toBe('right: 20px; bottom: 20px;');
    expect(mockInstance._config.position).toEqual('RB');
    expect(mockInstance._config.offset).toEqual([20, 20]);
  });

  test('switch show control bar', () => {
    const mockInstance = {
      _config: {} as any,
      _container: document.createElement('div'),
      _pitchUp: document.createElement('div'),
      _pitchDown: document.createElement('div'),
      _rotateLeft: document.createElement('div'),
      _rotateRight: document.createElement('div'),
      _compass: document.createElement('div'),
      _luopan: document.createElement('div'),
      show: jest.fn(),
      hide: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);

    const { rerender } = render(<AMapControlBar />);

    expect(mockInstance._config.showControlButton).toBe(true);
    expect(mockInstance._compass.classList.contains('amap-compass-black')).toBe(false);

    rerender(<AMapControlBar showControlButton={false} />);

    expect(mockInstance._config.showControlButton).toBe(false);
    expect(mockInstance._compass.classList.contains('amap-compass-black')).toBe(true);
  });

  test('bind event correctly', () => {
    const mockInstance = {
      _config: {},
      _container: document.createElement('div'),
      _pitchUp: document.createElement('div'),
      _pitchDown: document.createElement('div'),
      _rotateLeft: document.createElement('div'),
      _rotateRight: document.createElement('div'),
      _compass: document.createElement('div'),
      _luopan: document.createElement('div'),
      on: jest.fn(),
      off: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);

    const onShow = jest.fn();
    const onHide = jest.fn();

    const { unmount } = render(<AMapControlBar
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
