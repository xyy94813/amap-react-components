import * as React from 'react';
import type { FC } from 'react';
import { useRef } from 'react';
import type { Story } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from 'react-intersection-observer';

const CONTAINER_STYLE = { height: '35vw' };

const AMapContainer: FC = ({ children }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const preChildren = useRef<any>(null);

  if (inView) {
    preChildren.current = children;
  }

  return (
    <div ref={ref} style={CONTAINER_STYLE}>
      {inView ? children : preChildren.current}
    </div>
  );
};

const withAMapContainer = (renderStory: Story, context: any) => (
  <AMapContainer>
    {renderStory({}, context)}
  </AMapContainer>
);

export default withAMapContainer;
