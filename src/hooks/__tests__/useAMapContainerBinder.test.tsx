import { renderHook } from '@testing-library/react-hooks';

import useAMapContainerBinder from '../useAMapContainerBinder';

import createAMapContextWrapper from './createAMapContextWrapper';

describe('useAMapContainerBinder', () => {
  test('should add the curInstance to the map', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance: any = {
      add: jest.fn(),
      remove: jest.fn(),
    };
    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);
    const mockInstance = {};

    const { rerender } = renderHook(() => useAMapContainerBinder(mockInstance), { wrapper });

    rerender();

    expect(mockMapInstance.add).toBeCalled();
    expect(mockMapInstance.add.mock.calls.length).toBe(1);
    // assert that curInstance is added to the map
    expect(mockMapInstance.add.mock.calls[0][0]).toBe(mockInstance);
  });

  test('should remove the curInstance from the map on cleanup', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance: any = {
      add: jest.fn(),
      remove: jest.fn(),
    };
    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = {}; // replace with valid curInstance object

    const { unmount } = renderHook(() => useAMapContainerBinder(mockInstance), { wrapper });

    unmount();

    expect(mockMapInstance.remove).toBeCalled();
    expect(mockMapInstance.remove.mock.calls.length).toBe(1);
    // assert that curInstance is remove from the map
    expect(mockMapInstance.remove.mock.calls[0][0]).toBe(mockInstance);
  });

  test('instance is Nil', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance: any = {
      add: jest.fn(),
      remove: jest.fn(),
    };

    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = null; // replace with valid curInstance object

    renderHook(() => useAMapContainerBinder(mockInstance), { wrapper });

    expect(mockMapInstance.add).not.toBeCalled();
  });

  test('map is Nil', () => {
    const mockAPICtxValue = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };
    const mockMapInstance = null;

    const wrapper = createAMapContextWrapper(mockAPICtxValue, mockMapInstance);

    const mockInstance = null; // replace with valid curInstance object

    renderHook(() => useAMapContainerBinder(mockInstance), { wrapper });
  });
});
