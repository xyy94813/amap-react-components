import { renderHook } from '@testing-library/react-hooks';

import useSetter from '../useSetter';

describe('useSetter', () => {
  test('should call the instance method with provided arguments', () => {
    const instance = {
      methodName: jest.fn(),
    };
    const methodName = 'methodName';
    const args = [1, 'test'];

    renderHook(() => useSetter(instance, methodName, ...args));

    expect(instance.methodName).toHaveBeenCalledWith(...args);
  });

  test('should not call the instance method if instance is null or undefined', () => {
    const instance = null;
    const methodName = 'methodName';
    const args = [1, 'test'];

    expect(() => {
      renderHook(() => useSetter(instance, methodName, ...args));
    }).not.toThrow();
  });
});
