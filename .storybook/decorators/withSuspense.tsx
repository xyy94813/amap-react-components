import React, { Suspense } from "react";

const withSuspense = (renderStory, context) => (
  <Suspense fallback="loading">{renderStory({}, context)}</Suspense>
);

export default withSuspense