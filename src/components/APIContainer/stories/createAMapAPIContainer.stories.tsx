import React, {
  useRef, useState, useEffect, useMemo,
} from 'react';
import ReactDOM from 'react-dom';

import createAMapAPIContainer from '../createAMapAPIContainer';
import useAMapAPI, { useAMapAPIValue } from '../../../hooks/useAMapAPI';

const ChildComponent = () => {
  const { __AMAP__: AMap }: useAMapAPIValue = useAMapAPI();
  const $container = useRef(null);
  const $map = useRef(null);
  useEffect(() => {
    if (!AMap || !$container.current) {
      return;
    }
    // eslint-disable-next-line react/no-find-dom-node
    const map = new AMap.Map(ReactDOM.findDOMNode($container.current));
    $map.current = map;

    // eslint-disable-next-line consistent-return
    return () => {
      map.destroy();
    };
  }, [AMap]);
  return <div ref={$container} style={{ width: 800, height: 600 }} />;
};

export const NormalUse = () => {
  const [apiKey, setAPIKey] = useState(null);
  const $input = useRef(null);

  const APIContainer = useMemo(() => {
    if (!apiKey) {
      return null;
    }
    return createAMapAPIContainer({
      version: '2.0',
      apiKey: apiKey || '',
    });
  }, [apiKey]);

  return (
    <>
      <input placeholder="Your api key" ref={$input} />
      &nbsp;
      <button
        type="button"
        onClick={() => {
          const curInput: any = $input.current || null;
          if (curInput) {
            setAPIKey(curInput.value);
          }
        }}
      >
        confirm
      </button>
      {!!APIContainer && (
        <APIContainer>
          <ChildComponent />
        </APIContainer>
      )}
    </>
  );
};

export default {
  title: 'createAMapAPIContainer',
  component: NormalUse,
};
