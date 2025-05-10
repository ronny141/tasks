// import { ReactTestInstance } from 'react-test-renderer';

// import { ReactTestInstance } from "react-test-renderer";

import * as ReactTestRenderer from 'react-test-renderer';

export default function getContainerRoot(
  container: ReactTestRenderer.ReactTestInstance,
): ReactTestRenderer.ReactTestInstance {
  return container.children[0] as ReactTestRenderer.ReactTestInstance;
}
