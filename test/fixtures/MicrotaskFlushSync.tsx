import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

/**
 * A component example that demonstrates how to use flushSync in a microtask.
 *
 * Taken from the React documentation:
 *
 * https://react.dev/reference/react-dom/flushSync#im-getting-an-error-flushsync-was-called-from-inside-a-lifecycle-method
 *
 * https://github.com/reactjs/react.dev/blob/2da4f7fbd/src/content/reference/react-dom/flushSync.md?plain=1#L188
 */
export function MicrotaskFlushSync(): React.ReactElement {
  const [something, setSomething] = useState(0);

  useEffect(() => {
    // ✅ Correct: defer flushSync to a microtask
    queueMicrotask(() => {
      flushSync(() => {
        setSomething(1);
      });
    });
  }, []);

  return <div>{something}</div>;
}
