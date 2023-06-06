import { useEffect } from 'react';

const useSetter = <T extends Array<any>>(instance: any, methodName: string, ...args: T) => {
  useEffect(
    () => {
      instance?.[methodName]?.(...args);
    },
    // a trick way
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [instance, methodName, ...args],
  );
};

export default useSetter;
