import { useEffect } from 'react';

function useAMapEventBinder(instance: any, eventName: string, handler?: (event: any) => void) {
  useEffect(() => {
    let clearEffect;
    if (!instance || !handler) {
      return clearEffect;
    }

    instance.on(eventName, handler);

    const lastEventHandler = handler;

    clearEffect = () => {
      if (lastEventHandler && instance) {
        instance.off(eventName, lastEventHandler);
      }
    };

    return clearEffect;
  }, [instance, eventName, handler]);
}

export default useAMapEventBinder;
