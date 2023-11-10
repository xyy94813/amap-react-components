import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapAPI from '../../../hooks/useAMapAPI';
import AMapMap from '../AMapMap';

const mockMapInstance = {
  add: jest.fn(),
  emit: jest.fn(),
  remove: jest.fn(),
  destroy: jest.fn(),
  setCity: jest.fn(),
  setZoom: jest.fn(),
  setCenter: jest.fn(),
  setFeatures: jest.fn(),
  setMapStyle: jest.fn(),
  setPitch: jest.fn(),
  on: jest.fn(),
};

jest.mock('../../../hooks/useAMapAPI', () => ({
  esModule: true,
  default: jest.fn().mockReturnValue({
    __AMAP__: {
      Map: jest.fn(() => mockMapInstance),
    },
    __AMAP_UI__: null,
  }),
}));

describe('AMapMap', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  test('render without error', () => {
    expect(() => {
      const { unmount, rerender } = render(<AMapMap />);
      rerender(<AMapMap />);
      unmount();
    }).not.toThrowError();
  });

  test('support ref to instance', () => {
    // ref is null when loading API sdk
    (useAMapAPI as jest.Mock).mockReturnValueOnce({
      __AMAP__: null,
      __AMAP_UI__: null,
    });

    const $ref = createRef<any>();
    const { rerender } = render(<AMapMap ref={$ref} cityName="深圳" center={[118, 23]} zoom={2} />);
    expect($ref.current).toEqual(null);

    rerender(<AMapMap ref={$ref} />);

    expect($ref.current.add).toEqual(expect.any(Function));
    expect($ref.current.emit).toEqual(expect.any(Function));
    expect($ref.current.remove).toEqual(expect.any(Function));
    expect($ref.current.destroy).toEqual(expect.any(Function));
    expect($ref.current.setCity).toEqual(expect.any(Function));
    expect($ref.current.setZoom).toEqual(expect.any(Function));
    expect($ref.current.setCenter).toEqual(expect.any(Function));
    expect($ref.current.on).toEqual(expect.any(Function));
  });

  test('set city name', () => {
    render(<AMapMap cityName="深圳" />);
    expect(mockMapInstance.setCity).toBeCalledWith('深圳', expect.any(Function));
  });

  test('set zoom', () => {
    render(<AMapMap zoom={12} />);
    expect(mockMapInstance.setZoom).toBeCalledWith(12);
  });

  test('set center', () => {
    const mockCenter: [number, number] = [110, 23];
    render(<AMapMap center={mockCenter} />);
    expect(mockMapInstance.setCenter).toBeCalledWith(mockCenter);
  });

  test('emit "overlaysAdded" event', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} />);

    const overlay = {};
    $ref.current.add(overlay);

    expect(mockMapInstance.add).toBeCalledWith(overlay);
    expect(mockMapInstance.emit).toBeCalledWith('overlaysAdded', overlay);
  });

  test('emit "overlaysRemoved" event', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} />);

    const overlay = {};
    $ref.current.remove(overlay);

    expect(mockMapInstance.remove).toBeCalledWith(overlay);
    expect(mockMapInstance.emit).toBeCalledWith('overlaysRemoved', overlay);
  });

  test('has children', () => {
    const { getByText } = render(<AMapMap><div>123</div></AMapMap>);
    getByText('123');
  });

  test('sets features', () => {
    const customFeatures = ['bg'];
    render(<AMapMap features={customFeatures} />);
    expect(mockMapInstance.setFeatures).toBeCalledWith(customFeatures);
  });

  test('sets custom map style', () => {
    render(<AMapMap mapStyle="amap://styles/grey" />);
    expect(mockMapInstance.setMapStyle).toBeCalledWith('amap://styles/grey');
  });

  test('sets view mode and pitch', () => {
    const { __AMAP__: AMap } = useAMapAPI();
    const $div = document.createElement('div');
    $div.setAttribute('style', 'width: 100%; height: 100%;');

    const { rerender } = render(<AMapMap viewMode="3D" pitch={60} />);
    expect(AMap!.Map).toBeCalledWith($div, { viewMode: '3D' });
    expect(mockMapInstance.setPitch).toBeCalledWith(60);

    rerender(<AMapMap />);

    expect(mockMapInstance.destroy).toBeCalledTimes(1); // 销毁，并重新创建实例
    expect(AMap!.Map).toBeCalledWith($div, { viewMode: '2D' });
  });
});
