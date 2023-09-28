import { renderHook } from '@testing-library/react-hooks';

import useAMapControlBinder from '../useAMapControlBinder';

import createAMapContextWrapper from './createAMapContextWrapper';

describe('useAMapControlBinder', () => {
  test('should add control to the map', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };

    const mockMapInstance: any = {
      addControl: jest.fn(),
      removeControl: jest.fn(),
    };
    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);
    const mockInstance = {};

    const { rerender } = renderHook(() => useAMapControlBinder(mockInstance), { wrapper });

    rerender();

    expect(mockMapInstance.addControl).toBeCalled();
    expect(mockMapInstance.addControl.mock.calls.length).toBe(1);
    // assert that curInstance is added to the map
    expect(mockMapInstance.addControl.mock.calls[0][0]).toBe(mockInstance);
  });

  test('should remove control from the map on cleanup', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance: any = {
      addControl: jest.fn(),
      removeControl: jest.fn(),
    };
    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = {}; // replace with valid curInstance object

    const { unmount } = renderHook(() => useAMapControlBinder(mockInstance), { wrapper });

    unmount();

    expect(mockMapInstance.removeControl).toBeCalled();
    expect(mockMapInstance.removeControl.mock.calls.length).toBe(1);
    // assert that curInstance is removeControl from the map
    expect(mockMapInstance.removeControl.mock.calls[0][0]).toBe(mockInstance);
  });

  test('instance is Nil', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance: any = {
      addControl: jest.fn(),
      removeControl: jest.fn(),
    };

    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = null; // replace with valid curInstance object

    renderHook(() => useAMapControlBinder(mockInstance), { wrapper });

    expect(mockMapInstance.addControl).not.toBeCalled();
  });

  test('map is Nil', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance = null;

    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = null; // replace with valid curInstance object

    renderHook(() => useAMapControlBinder(mockInstance), { wrapper });
  });
});
