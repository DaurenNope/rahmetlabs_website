'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !query) return undefined;

    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export function useIsMobile(breakpoint = 768) {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
}

