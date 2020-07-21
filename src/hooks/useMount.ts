import { useEffect, useRef } from 'react';

const useIsMountedRef = () => {
  // We need something similar to the plain mutable class member.
  const isMounted = useRef(true);

  // And, we need something similar to componentWillUnmount.
  useEffect(() => {
    // Whatever we return is a cleanup effect.
    return () => {
      // <- componentWillUnmount
      isMounted.current = false;
    };
  }, []); // [] never changes, so the "cleanup" function will be fired on unmount only.

  return isMounted;
};

export default useIsMountedRef;
