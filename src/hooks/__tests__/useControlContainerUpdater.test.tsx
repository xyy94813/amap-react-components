/* eslint-disable no-underscore-dangle */
import { renderHook } from '@testing-library/react-hooks';

import useControlContainerUpdater from '../useControlContainerUpdater';

describe('useControlContainerUpdater', () => {
  test('should update container CSS text', () => {
    const instance = {
      _container: document.createElement('div'),
      _config: {
        position: 'LB',
        offset: [],
      },
    };
    const position = 'RT';
    const offset = [20, 30];

    renderHook(() => useControlContainerUpdater(instance, position, offset));

    expect(instance._container.style.cssText).toBe('right: 20px; top: 30px;');

    // 更新 _config
    expect(instance._config.position).toBe(position);
    expect(instance._config.offset).toBe(offset);
  });

  test('should update container CSS text when css text is empty', () => {
    const instance = {
      _container: document.createElement('div'),
      _config: {
        position: 'LB',
        offset: [],
      },
    };
    const position = {};

    renderHook(() => useControlContainerUpdater(instance, position));

    expect(instance._container.style.cssText).toBe('');
    // 更新 _config
    expect(instance._config.position).toEqual({});
    expect(instance._config.offset).toEqual([10, 10]);
  });

  test('should update container CSS text when instance is Nil', () => {
    const instance = null;
    const position = 'LB';

    expect(() => {
      renderHook(() => useControlContainerUpdater(instance, position));
    }).not.toThrow();
  });
});
