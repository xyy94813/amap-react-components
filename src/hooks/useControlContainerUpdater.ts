/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { useLayoutEffect, useEffect } from 'react';
import useControlContainerCSSText from './useControlContainerCSSText';

const useControlContainerUpdater = <T = any>(
  instance: T,
  position: AMap.ControlConfig['position'],
  offset = [10, 10],
) => {
  const containerCSSText = useControlContainerCSSText(position, offset);

  useLayoutEffect(() => {
    if (!instance || !containerCSSText) return;
    const $container = (instance as any)._container;
    $container.style.cssText = containerCSSText!;
  }, [instance, containerCSSText]);

  useEffect(() => {
    if (!instance) return;
    // 同步更新实例的 conf，避免被其它地方使用
    (instance as any)._config.position = position;
    (instance as any)._config.offset = offset;
  }, [instance, position, offset]);
};

export default useControlContainerUpdater;
