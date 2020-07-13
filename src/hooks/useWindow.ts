import { useLayoutEffect, useState, useEffect } from 'react';
const useWindowSize = () => {
  const [size, setSize] = useState<number | null>(null);
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
export default useWindowSize;
