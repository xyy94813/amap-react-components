/* eslint-disable no-underscore-dangle */
import { renderHook } from '@testing-library/react-hooks';

import useAMapPluginInstance from '../useAMapPluginInstance';
import createAMapContextWrapper from './createAMapContextWrapper';

describe('useAMapPluginInstance', () => {
  test('sync init plugin', () => {
    // mock AMap
    const mockAMapAPICtx: any = {
      __AMAP__: {
        Polygon: jest.fn(),
        plugin: jest.fn(),
      },
      __AMAP_UI__: {},
    };

    const mockMapInstance: any = {};

    const mockInstance = {};
    // mock init fn
    const initFn = jest.fn(() => mockInstance);

    const wrapper = createAMapContextWrapper(mockAMapAPICtx, mockMapInstance);

    const { result } = renderHook(() => useAMapPluginInstance('Polygon', initFn), { wrapper });

    // 断言异步加载函数没有执行
    expect(mockAMapAPICtx.__AMAP__.plugin).not.toBeCalled();

    // 初始化函数被成功调用
    expect(initFn).toHaveBeenCalledTimes(1);
    expect(initFn).toHaveBeenCalledWith(mockAMapAPICtx.__AMAP__, mockMapInstance);
    // 返回初始化的实例
    expect(result.current).toBe(mockInstance);
  });

  test('async init plugin', () => {
    // mock AMap
    const mockAMapAPICtx: any = {
      __AMAP__: {
        plugin: jest.fn((__, callback) => callback()),
      },
      __AMAP_UI__: {},
    };

    const mockMapInstance: any = {};

    const mockInstance = {};
    // mock init fn
    const initFn = jest.fn(() => mockInstance);

    const wrapper = createAMapContextWrapper(mockAMapAPICtx, mockMapInstance);

    const { result } = renderHook(() => useAMapPluginInstance('Polygon', initFn), { wrapper });

    // 执行了异步加载函数
    expect(mockAMapAPICtx.__AMAP__.plugin).toHaveBeenCalledTimes(1);
    // expect(mockAMapAPICtx.__AMAP__.plugin)
    // .toHaveBeenCalledWith([`AMap.Polygon`], expect.any(Function));

    // 初始化函数被成功调用
    expect(initFn).toHaveBeenCalledTimes(1);
    expect(initFn).toHaveBeenCalledWith(mockAMapAPICtx.__AMAP__, mockMapInstance);
    // 返回初始化的实例
    expect(result.current).toBe(mockInstance);
  });

  test('undo anything if AMap dose not exist', () => {
    const mockAMapAPICtx: any = {
      __AMAP__: null,
      __AMAP_UI__: null,
    };

    const mockMapInstance: any = {};

    // mock init fn
    const initFn = jest.fn();

    const wrapper = createAMapContextWrapper(mockAMapAPICtx, mockMapInstance);

    const { result } = renderHook(() => useAMapPluginInstance('Polygon', initFn), { wrapper });

    // 不会触发初始化函数，
    expect(initFn).not.toBeCalled();
    expect(result.current).toBe(null);
  });

  test('undo anything if map dose not exist', () => {
    const mockAMapAPICtx: any = {
      __AMAP__: {},
      __AMAP_UI__: null,
    };

    const mockMapInstance = null;

    // mock init fn
    const initFn = jest.fn();

    const wrapper = createAMapContextWrapper(mockAMapAPICtx, mockMapInstance);

    const { result } = renderHook(() => useAMapPluginInstance('Polygon', initFn), { wrapper });

    // 不会触发初始化函数，
    expect(initFn).not.toBeCalled();
    expect(result.current).toBe(null);
  });
});
