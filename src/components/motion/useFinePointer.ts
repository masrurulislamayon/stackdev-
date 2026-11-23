import { useEffect, useState } from 'react';

/**
 * True only for devices with a real hover-capable fine pointer (mouse/trackpad)
 * when the user has not asked for reduced motion. Used to gate cursor, magnetic and tilt effects.
 */
export function useFinePointer(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(pointerQuery.matches && !motionQuery.matches);

    update();
    pointerQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);
    return () => {
      pointerQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  return enabled;
}
