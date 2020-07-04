import React, {
  useRef,
  useEffect,
} from 'react';

import createAMapAPIContainer from '../createAMapAPIContainer';
import useAMapAPI, { useAMapAPIValue } from '../../../hooks/useAMapAPI';

const AMAP_API_KEY: string = process.env.STORYBOOK_AMAP_API_KEY || '';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: AMAP_API_KEY,
});

const ChildComponent = () => {
  const { __AMAP__: AMap }: useAMapAPIValue = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef(null);
  useEffect(() => {
    if (!AMap || !$container.current) {
      return () => { };
    }
    // eslint-disable-next-line react/no-find-dom-node
    const map = new AMap.Map($container.current);
    $map.current = map;

    return () => {
      map.destroy();
    };
  }, [AMap]);
  return <div ref={$container} style={{ height: 600 }} />;
};

export const NormalUse = () => (
  <APIContainer>
    <ChildComponent />
  </APIContainer>
);

export default {
  title: 'createAMapAPIContainer',
  component: NormalUse,
};
