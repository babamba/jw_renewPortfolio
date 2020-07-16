import { useEffect, useState, useCallback } from 'react';
// Hook
interface WindowSize {
  width?: number;
  height?: number;
  outerHeight?: number;
}
function useWindowSize(): WindowSize {
  const isClient = typeof window === 'object';
  // Memoize window size function
  const getSize = useCallback(
    (): WindowSize => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      outerHeight: isClient ? document.getElementsByTagName('body')[0].scrollHeight : undefined
    }),
    [isClient]
  );
  const [windowSize, setWindowSize] = useState<WindowSize>(getSize);
  useEffect(
    () => {
      function handleResize() {
        if (isClient) {
          setWindowSize(getSize());
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },
    // Empty array ensures that effect is only run on mount and unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return windowSize;
}

export default useWindowSize;
