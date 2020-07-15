import React, { useEffect, useState, useCallback } from 'react';

// import { useLayoutEffect, useState, useEffect } from 'react';
// const useWindowSize = () => {
//   const [size, setSize] = useState<{ width: number; height: number } | null>(null);
//   const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

//   useIsomorphicLayoutEffect(() => {
//     const updateSize = () => {
//       console.log('test : ', document.getElementsByTagName('body')[0].scrollHeight);
//       setSize({
//         width: window.innerWidth,
//         height: document.getElementsByTagName('body')[0].scrollHeight
//       });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// };
// export default useWindowSize;

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
