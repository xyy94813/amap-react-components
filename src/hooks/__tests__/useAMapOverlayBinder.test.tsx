import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { AMapOverlayGroupContext } from '../../components/AMapOverlayGroup';

import useAMapOverlayBinder from '../useAMapOverlayBinder';
import createAMapContextWrapper from './createAMapContextWrapper';

describe('useAMapOverlayBinder', () => {
  test('should add overlay to overlay group if overlay group context exists', () => {
    // 创建一个 mock 的 overlay group 对象
    const mockOverlayGroup: any = {
      addOverlay: jest.fn(),
      removeOverlay: jest.fn(),
    };

    // 创建一个 mock 的 overlay 对象
    const mockOverlay = {};

    const wrapper = (props: any) => createAMapContextWrapper({
      __AMAP_UI__: null,
      __AMAP__: null,
    }, null)({
      children: (
        <AMapOverlayGroupContext.Provider value={mockOverlayGroup}>
          {props.children}
        </AMapOverlayGroupContext.Provider>
      ),
    });

    // 使用 renderHook 渲染一个包a含 useContext 的自定义 hook
    const { unmount } = renderHook(() => useAMapOverlayBinder(mockOverlay), {
      wrapper,
    });

    // // 断言 overlayGroup.addOverlay 被调用了一次，并且传入了 mockOverlay
    expect(mockOverlayGroup.addOverlay).toHaveBeenCalledTimes(1);
    expect(mockOverlayGroup.addOverlay).toHaveBeenCalledWith(mockOverlay);

    // // 卸载 hook
    unmount();

    // // 断言 overlayGroup.removeOverlay 被调用了一次，并且传入了 mockOverlay
    expect(mockOverlayGroup.removeOverlay).toHaveBeenCalledTimes(1);
    expect(mockOverlayGroup.removeOverlay).toHaveBeenCalledWith(mockOverlay);
  });

  test('should add overlay to map if overlay group context does not exist', () => {
    // 创建一个 mock 的 map 对象
    const mockMap: any = {
      add: jest.fn(),
      remove: jest.fn(),
    };

    // 创建一个 mock 的 overlay 对象
    const mockOverlay = {};

    const wrapper = createAMapContextWrapper({
      __AMAP_UI__: null,
      __AMAP__: null,
    }, mockMap);

    // 使用 renderHook 渲染一个包a含 useContext 的自定义 hook
    const { unmount } = renderHook(() => useAMapOverlayBinder(mockOverlay), {
      wrapper,
    });

    // // 断言 overlayGroup.add 被调用了一次，并且传入了 mockOverlay
    expect(mockMap.add).toHaveBeenCalledTimes(1);
    expect(mockMap.add).toHaveBeenCalledWith(mockOverlay);

    // // 卸载 hook
    unmount();

    // // 断言 overlayGroup.remove 被调用了一次，并且传入了 mockOverlay
    expect(mockMap.remove).toHaveBeenCalledTimes(1);
    expect(mockMap.remove).toHaveBeenCalledWith(mockOverlay);
  });

  test('undo anything if overlay dose not exist', () => {
    // 创建一个 mock 的 map 对象
    const mockMap: any = {
      add: jest.fn(),
      remove: jest.fn(),
    };

    // 创建一个 mock 的 overlay 对象
    const mockOverlay = null;

    const wrapper = createAMapContextWrapper({
      __AMAP_UI__: null,
      __AMAP__: null,
    }, mockMap);

    // 使用 renderHook 渲染一个包a含 useContext 的自定义 hook
    const { unmount } = renderHook(() => useAMapOverlayBinder(mockOverlay), {
      wrapper,
    });

    // // 断言 overlayGroup.add 被调用了一次，并且传入了 mockOverlay
    expect(mockMap.add).not.toBeCalled();

    // // 卸载 hook
    unmount();

    // // 断言 overlayGroup.remove 被调用了一次，并且传入了 mockOverlay
    expect(mockMap.remove).not.toBeCalled();
  });
});
