/* eslint-disable no-underscore-dangle */
import { renderHook } from '@testing-library/react';

import useControlButtonUpdater from '../useControlButtonUpdater';

describe('useControlButtonUpdater', () => {
  test('should update control button visibility', () => {
    const instance = {
      _config: {
        showControlButton: false,
      },
      _pitchUp: document.createElement('div'),
      _pitchDown: document.createElement('div'),
      _rotateLeft: document.createElement('div'),
      _rotateRight: document.createElement('div'),
      _compass: document.createElement('div'),
      _luopan: document.createElement('div'),
    };

    const { rerender } = renderHook(
      (showControlButton) => useControlButtonUpdater(instance as any, showControlButton),
      {
        initialProps: false,
      },
    );

    expect(instance._config.showControlButton).toBe(false);
    expect(instance._compass.classList.contains('amap-compass-black')).toBe(true);
    expect(instance._luopan.style.getPropertyValue('background')).toBe('rgba(0, 0, 0, 0)');
    expect(instance._pitchUp.style.getPropertyValue('display')).toBe('none');
    expect(instance._pitchDown.style.getPropertyValue('display')).toBe('none');
    expect(instance._rotateLeft.style.getPropertyValue('display')).toBe('none');
    expect(instance._rotateRight.style.getPropertyValue('display')).toBe('none');

    rerender(true);

    expect(instance._config.showControlButton).toBe(true);
    expect(instance._compass.classList.contains('amap-compass-black')).toBe(false);
    expect(instance._luopan.style.getPropertyValue('background')).toBe('');
    expect(instance._pitchUp.style.getPropertyValue('display')).toBe('');
    expect(instance._pitchDown.style.getPropertyValue('display')).toBe('');
    expect(instance._rotateLeft.style.getPropertyValue('display')).toBe('');
    expect(instance._rotateRight.style.getPropertyValue('display')).toBe('');
  });
});
