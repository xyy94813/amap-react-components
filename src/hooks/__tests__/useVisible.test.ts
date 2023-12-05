import { cleanup, renderHook } from '@testing-library/react';

import useVisible from '../useVisible';

describe('useVisible', () => {
  afterEach(cleanup);

  test('should call show method when visible is true', () => {
    // 创建模拟的实例对象
    const mockInstance = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    // 渲染 hook
    renderHook(() => useVisible(mockInstance, true));

    // 断言 show 方法被调用
    expect(mockInstance.show).toHaveBeenCalled();
    expect(mockInstance.hide).not.toHaveBeenCalled();
  });

  test('should call hide method when visible is false', () => {
    // 创建模拟的实例对象
    const mockInstance = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    // 渲染 hook
    renderHook(() => useVisible(mockInstance, false));

    // 断言 hide 方法被调用
    expect(mockInstance.hide).toHaveBeenCalled();
    expect(mockInstance.show).not.toHaveBeenCalled();
  });

  test('should not call show or hide method when instance is null', () => {
    // 渲染 hook
    // 断言 show 和 hide 方法都没有被调用
    expect(() => {
      renderHook(() => useVisible(null, true));
    }).not.toThrowError();

    expect(() => {
      renderHook(() => useVisible(null, false));
    }).not.toThrowError();
  });
});
