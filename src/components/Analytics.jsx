'use client';

/**
 * Analytics — GA4 + Plausible, opt-in via env.
 * Includes: page views, scroll depth (25/50/75/100%), time on page (30s intervals).
 * All tracking is a clean no-op when GA_ID is not set.
 */

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../lib/track';

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

let scriptsLoaded = false;

function loadTrackers() {
  if (scriptsLoaded || (!GA_ID && !PLAUSIBLE_DOMAIN)) return false;
  scriptsLoaded = true;

  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  if (PLAUSIBLE_DOMAIN) {
    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', PLAUSIBLE_DOMAIN);
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  }

  return true;
}

export default function Analytics() {
  const pathname = usePathname();
  const scrollFired = useRef(new Set());
  const startTime = useRef(Date.now());

  /* ---- page view on route change ---- */
  useEffect(() => {
    loadTrackers();
    if (!GA_ID) return;
    trackPageView(pathname);
    scrollFired.current.clear();
    startTime.current = Date.now();
  }, [pathname]);

  /* ---- scroll depth (25 / 50 / 75 / 100%) ---- */
  useEffect(() => {
    if (!GA_ID) return;

    const thresholds = [25, 50, 75, 100];
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrolled / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !scrollFired.current.has(t)) {
          scrollFired.current.add(t);
          trackScrollDepth(t);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  /* ---- time on page (every 30s, up to 5min) ---- */
  useEffect(() => {
    if (!GA_ID) return;

    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 30;
      if (elapsed <= 300) trackTimeOnPage(elapsed);
    }, 30000);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
