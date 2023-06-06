import { useEffect } from 'react';

const useVisible = (instance: any, visible: boolean) => {
  useEffect(() => {
    if (visible) {
      instance?.show?.();
    } else {
      instance?.hide?.();
    }
  }, [instance, visible]);
};

export default useVisible;
