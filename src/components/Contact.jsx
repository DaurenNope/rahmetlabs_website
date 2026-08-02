'use client';

import Reveal from './Reveal';

const channelIcons = {
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8.8 9.2c.3-.8.7-.8 1.1-.5l.9 1c.2.2.1.5 0 .8l-.4.6c.5 1.1 1.4 2 2.5 2.5l.6-.4c.3-.2.6-.2.8 0l1 .9c.3.4.3.8-.5 1.1-2.9 1.2-6.3-2.9-5.1-5.8Z" fill="currentColor" opacity="0.9" />
    </svg>
  ),
  telegram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 4.5 3.6 10.7c-.8.3-.8 1.3.1 1.5l4.4 1.4 1.7 5.2c.3.8 1.2.9 1.7.2l2.3-2.6 4.5 3.3c.6.4 1.5.1 1.7-.6l2.4-13.2c.2-.8-.6-1.6-1.4-1.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m8.1 13.6 9.5-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Contact({ contact, locale }) {
  return (
    <>
      {/* header */}
      <section className="border-b border-hairline/70 pb-16 pt-40 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-content px-5 md:px-10 lg:px-16">
          <Reveal variant="fade" className="max-w-[860px]">
            <p className="kicker mb-8">{contact.kicker}</p>
            <h1 className="mb-7 text-display font-bold text-ink">{contact.heading}</h1>
            <p className="max-w-[54ch] text-[1.08rem] leading-[1.75] text-ink-muted">{contact.subheading}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36" aria-label={contact.channelsHeading}>
        <div className="mx-auto grid max-w-content gap-16 px-5 md:px-10 lg:grid-cols-12 lg:px-16">
          {/* channels — framed list */}
          <div className="lg:col-span-7">
            <Reveal variant="fade" className="mb-8">
              <h2 className="text-subhead font-bold text-ink">{contact.channelsHeading}</h2>
            </Reveal>
            <div className="ltr-stagger">
              {contact.channels.map((ch, i) => (
                <Reveal as="div" key={ch.id} variant="fade">
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-5 border-t border-hairline/70 py-6 transition-colors duration-500 hover:bg-card md:gap-8 md:py-8 ${
                      i === contact.channels.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all duration-500 group-hover:border-signal group-hover:text-signal">
                      {channelIcons[ch.id]}
                    </span>
                    <span className="flex-1">
                      <span className="block font-sans text-[1.15rem] font-bold tracking-tight text-ink transition-transform duration-500 ease-reveal group-hover:translate-x-1.5 md:text-[1.35rem]">
                        {ch.label}
                      </span>
                      <span className="block font-mono text-[0.78rem] tracking-[0.04em] text-ink-muted">{ch.value}</span>
                    </span>
                    <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-faint sm:block">
                      {ch.note}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="flex-shrink-0 text-ink-faint transition-all duration-500 group-hover:rotate-45 group-hover:text-signal">
                      <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* what happens next */}
          <div className="lg:col-span-5">
            <Reveal variant="fade" className="mb-8">
              <h2 className="text-subhead font-bold text-ink">{contact.guideHeading}</h2>
            </Reveal>
            <div className="ltr-stagger flex flex-col gap-8">
              {contact.guide.map((g) => (
                <Reveal as="div" key={g.code} variant="fade" className="flex gap-6 border-l border-hairline pl-6">
                  <span aria-hidden="true" className="mt-0.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-signal">{g.code}</span>
                  <div>
                    <h3 className="mb-1.5 font-sans text-[1.05rem] font-bold tracking-tight text-ink">{g.title}</h3>
                    <p className="text-[0.94rem] leading-[1.7] text-ink-muted">{g.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
