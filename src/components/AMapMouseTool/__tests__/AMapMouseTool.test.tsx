import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapMouseTool from '../AMapMouseTool';

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      MouseTool: jest.fn(),
    }, {});

    // mock instance
    return {
      close: jest.fn(),
      polyline: jest.fn(),
    };
  }),
}));

describe('AMapMouseTool', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapMouseTool type="polyline" />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('MouseTool', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapMouseTool type="polyline" />);
    }).not.toThrowError();
  });

  test('custom options', () => {
    const $ref = createRef<any>();
    const options = {};
    const { rerender } = render(<AMapMouseTool ref={$ref} type="polyline" options={null as any} />);
    rerender(<AMapMouseTool ref={$ref} type="polyline" options={options} />);
    expect($ref.current.polyline).toBeCalledWith(options);
  });

  test('support ref to instance', () => {
    const mockInstance = {
      close: jest.fn(),
      polyline: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);
    const $ref = createRef<any>();
    render(<AMapMouseTool ref={$ref} type="polyline" />);
    expect($ref.current).toBe(mockInstance);
  });

  test('bind event correctly', () => {
    const mockInstance = {
      close: jest.fn(),
      polyline: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(mockInstance);

    const onCompleted = jest.fn();

    const { unmount } = render(
      <AMapMouseTool
        type="polyline"
        onCompleted={onCompleted}
      />,
    );

    expect(mockInstance.on).toBeCalledTimes(1);
    expect(mockInstance.on).toBeCalledWith('draw', onCompleted);

    unmount();

    expect(mockInstance.on).toBeCalledTimes(1);
    expect(mockInstance.off).toBeCalledWith('draw', onCompleted);
  });
});
