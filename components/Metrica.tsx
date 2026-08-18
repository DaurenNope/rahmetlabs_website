'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

/* Yandex Metrica — the KZ/RU-market analytics standard. The counter ID is
   public by design (visible in every page's source), so it lives inline.
   Renders nothing until the real ID is set. */
const YM_ID = '';

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export default function Metrica() {
  const pathname = usePathname();

  useEffect(() => {
    if (!YM_ID || !window.ym) return;
    /* App Router does client-side navigation — each route change is its own hit */
    window.ym(Number(YM_ID), 'hit', window.location.href);
  }, [pathname]);

  if (!YM_ID) return null;

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],
          k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
          ym(${YM_ID}, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
