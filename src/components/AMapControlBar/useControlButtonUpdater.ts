/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { useLayoutEffect } from 'react';

const useControlButtonUpdater = (instance: AMap.ControlBar | null, showControlButton?: boolean) => {
  useLayoutEffect(() => {
    if (!instance) return;
    // 同步更新实例的 conf，避免被其它地方使用
    instance._config.showControlButton = showControlButton;

    const controlButtons: HTMLDivElement[] = [
      instance._pitchUp,
      instance._pitchDown,
      instance._rotateLeft,
      instance._rotateRight,
    ];
    const compass: HTMLDivElement = instance._compass;
    const luopan: HTMLDivElement = instance._luopan;
    compass.classList.toggle('amap-compass-black', !showControlButton);
    if (showControlButton) {
      luopan.style.removeProperty('background');
      controlButtons.forEach(($dom) => {
        $dom.style.removeProperty('display');
      });
    } else {
      luopan.style.setProperty('background', 'rgba(0, 0, 0, 0)');
      controlButtons.forEach(($dom) => {
        $dom.style.setProperty('display', 'none');
      });
    }
  }, [instance, showControlButton]);
};

export default useControlButtonUpdater;
