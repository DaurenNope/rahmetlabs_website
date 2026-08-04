'use client';

/**
 * Analytics — page view tracking, opt-in via env.
 * Activate with NEXT_PUBLIC_GA4_ID (Google Analytics 4) and/or
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN (Plausible). With neither set it is a
 * clean no-op: no tracker is injected and nothing is logged.
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

let scriptsLoaded = false;

function loadTrackers() {
  if (scriptsLoaded || (!GA_ID && !PLAUSIBLE_DOMAIN)) return scriptsLoaded;
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

  return scriptsLoaded;
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!loadTrackers() || !GA_ID) return;
    window.gtag?.('js', new Date());
    window.gtag?.('config', GA_ID, { page_path: pathname });
  }, [pathname]);

  return null;
}
