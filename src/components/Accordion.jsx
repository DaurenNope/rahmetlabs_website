'use client';

/**
 * Accordion — hairline-ruled FAQ. Hairlines and type only.
 */

import { useId, useState } from 'react';
import Reveal from './Reveal';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <div className="ltr-stagger">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-${i}`;
        return (
          <Reveal as="div" key={item.q} variant="fade" className="border-t border-hairline/70 first:border-t-0">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
            >
              <span className={`font-sans text-[1.05rem] font-semibold tracking-tight transition-colors duration-400 md:text-[1.15rem] ${isOpen ? 'text-amber' : 'text-ink group-hover:text-amber'}`}>
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                  isOpen ? 'rotate-45 border-amber text-amber' : 'border-hairline text-ink-muted group-hover:border-ink-muted'
                }`}
              >
                <span className="absolute h-3 w-px bg-current" />
                <span className="absolute h-px w-3 bg-current" />
              </span>
            </button>
            <div
              id={panelId}
              className="grid transition-all duration-600 ease-reveal"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 text-[0.98rem] leading-[1.75] text-ink-muted md:pb-7">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
