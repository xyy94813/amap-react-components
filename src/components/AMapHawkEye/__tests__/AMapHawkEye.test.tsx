/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapHawkEye from '../AMapHawkEye';

const mockInstance = {
  show: jest.fn(),
  hide: jest.fn(),
  open: jest.fn(),
  close: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      HawkEye: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapHawkEye Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    const autoMove = true;
    const showRectangle = true;
    const showButton = true;
    const mapStyle = 'normal';
    const width = '200px';
    const height = '150px';
    const offset: [number, number] = [10, 10];
    const borderStyle = 'solid';
    const borderColor = '#000000';
    const borderRadius = '5px';
    const borderWidth = '2px';
    const buttonSize = '20px';

    expect(() => {
      render(<AMapHawkEye
        autoMove={autoMove}
        showRectangle={showRectangle}
        showButton={showButton}
        mapStyle={mapStyle}
        width={width}
        height={height}
        offset={offset}
        borderStyle={borderStyle}
        borderColor={borderColor}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        buttonSize={buttonSize}
      />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('HawkEye', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null).mockReturnValueOnce(null);
    expect(() => {
      const { rerender } = render(<AMapHawkEye isOpen />);
      rerender(<AMapHawkEye isOpen={false} />);
    }).not.toThrowError();
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapHawkEye />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapHawkEye visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('open and close', () => {
    const { rerender } = render(<AMapHawkEye isOpen />);

    expect(mockInstance.open).toBeCalled();

    rerender(<AMapHawkEye isOpen={false} />);

    expect(mockInstance.close).toBeCalled();
  });

  test('bind event correctly', () => {
    const onShow = jest.fn();
    const onHide = jest.fn();

    const { unmount } = render(<AMapHawkEye onShow={onShow} onHide={onHide} />);

    expect(mockInstance.on).toBeCalledTimes(2);
    expect(mockInstance.on).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.on).toHaveBeenCalledWith('hide', onHide);

    unmount();

    expect(mockInstance.off).toBeCalledTimes(2);
    expect(mockInstance.off).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.off).toHaveBeenCalledWith('hide', onHide);
  });
});
