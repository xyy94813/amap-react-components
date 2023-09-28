import { renderHook } from '@testing-library/react-hooks';

import useAMapEventBinder from '../useAMapEventBinder';

describe('useAMapEventBinder', () => {
  test('subscribe event and unsubscribe after clear effect', () => {
    const mockInstance = {
      on: jest.fn(),
      off: jest.fn(),
    }; // replace with valid curInstance object
    const handler = jest.fn();
    const { unmount } = renderHook(() => useAMapEventBinder(mockInstance, 'eventName', handler));

    expect(mockInstance.on).toBeCalled();
    expect(mockInstance.on.mock.calls.length).toBe(1);

    unmount();

    expect(mockInstance.off).toBeCalled();
    expect(mockInstance.off.mock.calls.length).toBe(1);
  });

  test('instance is Nil', () => {
    const mockInstance = null; // replace with valid curInstance object
    const handler = jest.fn();
    renderHook(() => useAMapEventBinder(mockInstance, 'eventName', handler));
  });

  test('handler is undefined', () => {
    const mockInstance = {
      on: jest.fn(),
      off: jest.fn(),
    }; // replace with valid curInstance object
    const handler = undefined;
    const { unmount } = renderHook(() => useAMapEventBinder(mockInstance, 'eventName', handler));

    expect(mockInstance.on).not.toBeCalled();

    unmount();

    expect(mockInstance.off).not.toBeCalled();
  });
});
