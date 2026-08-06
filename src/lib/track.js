'use client';

/**
 * track.js — lightweight GA4 event helpers.
 * No-ops when GA4 is not configured, so components don't need conditionals.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

function gtag(...args) {
  if (!GA_ID || typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag(...args);
}

/* ------------------------------------------------------------------ */
/* Page views                                                          */
/* ------------------------------------------------------------------ */
export function trackPageView(path, title) {
  gtag('js', new Date());
  gtag('config', GA_ID, { page_path: path, page_title: title });
}

/* ------------------------------------------------------------------ */
/* CTA / conversion events                                             */
/* ------------------------------------------------------------------ */
export function trackCTA({ location, label, href }) {
  gtag('event', 'cta_click', {
    event_category: 'conversion',
    event_label: label,
    location,
    destination: href,
  });
}

export function trackContact({ channel, label }) {
  gtag('event', 'contact_click', {
    event_category: 'conversion',
    event_label: label,
    channel, // 'whatsapp' | 'telegram' | 'email'
  });
}

export function trackNewsletter(action, email) {
  gtag('event', 'newsletter', {
    event_category: 'conversion',
    event_label: action, // 'submit' | 'success' | 'error'
    ...(email ? { email_hash: hashCode(email) } : {}),
  });
}

/* ------------------------------------------------------------------ */
/* Engagement events                                                   */
/* ------------------------------------------------------------------ */
export function trackScrollDepth(percent) {
  gtag('event', 'scroll_depth', {
    event_category: 'engagement',
    event_label: `${percent}%`,
    value: percent,
  });
}

export function trackTimeOnPage(seconds) {
  gtag('event', 'time_on_page', {
    event_category: 'engagement',
    event_label: `${seconds}s`,
    value: seconds,
  });
}

export function trackWorkClick({ project, location }) {
  gtag('event', 'work_click', {
    event_category: 'engagement',
    event_label: project,
    location,
  });
}

export function trackLocaleSwitch(from, to) {
  gtag('event', 'locale_switch', {
    event_category: 'engagement',
    event_label: `${from} -> ${to}`,
  });
}

export function trackSectionView(sectionId) {
  gtag('event', 'section_view', {
    event_category: 'engagement',
    event_label: sectionId,
  });
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}
