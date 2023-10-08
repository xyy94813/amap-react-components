import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapAPI from '../../../hooks/useAMapAPI';
import AMapMap from '../AMapMap';

jest.mock('../../../hooks/useAMapAPI', () => ({
  esModule: true,
  default: jest.fn().mockReturnValue({
    __AMAP__: {
      Map: jest.fn().mockReturnValue({
        add: jest.fn(),
        emit: jest.fn(),
        remove: jest.fn(),
        destroy: jest.fn(),
        setCity: jest.fn(),
        setZoom: jest.fn(),
        setCenter: jest.fn(),
        on: jest.fn(),
      }),
    },
    __AMAP_UI__: null,
  }),
}));

describe('AMapMap', () => {
  afterEach(cleanup);

  test('render without error', () => {
    const $ref = createRef<any>();
    expect(() => {
      const { unmount, rerender } = render(<AMapMap ref={$ref} />);
      rerender(<AMapMap ref={$ref} />);
      unmount();
    }).not.toThrowError();
  });

  test('support ref to instance', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} />);

    expect($ref.current.add).toEqual(expect.any(Function));
    expect($ref.current.emit).toEqual(expect.any(Function));
    expect($ref.current.remove).toEqual(expect.any(Function));
    expect($ref.current.destroy).toEqual(expect.any(Function));
    expect($ref.current.setCity).toEqual(expect.any(Function));
    expect($ref.current.setZoom).toEqual(expect.any(Function));
    expect($ref.current.setCenter).toEqual(expect.any(Function));
    expect($ref.current.on).toEqual(expect.any(Function));

    $ref.current.on('add', jest.fn());
  });

  test('ref is null when loading API sdk', () => {
    (useAMapAPI as jest.Mock).mockReturnValueOnce({
      __AMAP__: null,
      __AMAP_UI__: null,
    });

    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} cityName="深圳" center={[118, 23]} zoom={2} />);
    expect($ref.current).toEqual(null);
  });

  test('set city name', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} cityName="深圳" />);
    expect($ref.current.setCity).toBeCalledWith('深圳', expect.any(Function));
  });

  test('set zoom', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} zoom={12} />);
    expect($ref.current.setZoom).toBeCalledWith(12);
  });

  test('set center', () => {
    const $ref = createRef<any>();
    const mockCenter: [number, number] = [110, 23];
    render(<AMapMap ref={$ref} center={mockCenter} />);
    expect($ref.current.setCenter).toBeCalledWith(mockCenter);
  });

  test('emit "overlaysAdded" event', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} />);

    const overlay = {};
    $ref.current.add(overlay);

    expect($ref.current.emit).toBeCalledWith('overlaysAdded', overlay);
  });

  test('emit "overlaysRemoved" event', () => {
    const $ref = createRef<any>();
    render(<AMapMap ref={$ref} />);

    const overlay = {};
    $ref.current.remove(overlay);

    expect($ref.current.emit).toBeCalledWith('overlaysRemoved', overlay);
  });

  test('has children', () => {
    const { getByText } = render(<AMapMap><div>123</div></AMapMap>);
    getByText('123');
  });
});
