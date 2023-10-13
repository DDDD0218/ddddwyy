import React from "react";

export default function LazyComponents(props) {
  const Component = React.lazy(() => import(`../view/${props.path}`));
  return (
    <React.Suspense>
      <Component />
    </React.Suspense>
  );
}
