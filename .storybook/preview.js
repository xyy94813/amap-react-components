import React, { Suspense } from 'react';

export const decorators = [
  (renderStory, context) => (
    <Suspense fallback="loading">{renderStory({}, context)}</Suspense>
  ),
];
export const parameters = {};
export const globalTypes = {};
