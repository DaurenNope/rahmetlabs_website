'use client';

import { useState } from 'react';
import TerminalPanel, { Kicker } from './TerminalPanel';
import Reveal from './Reveal';

const WHATSAPP_NUMBER = '77088413062';

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: '', contactValue: '', project: contact.formProjectOptions[0], message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `${contact.formNameLabel}: ${form.name}`,
      `${contact.formContactLabel}: ${form.contactValue}`,
      `${contact.formProjectLabel}: ${form.project}`,
      '',
      form.message,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <TerminalPanel>
      <div className="py-16 lg:py-24">
        <Reveal>
          <Kicker>{contact.kicker}</Kicker>
          <h1 className="text-display max-w-2xl text-balance text-ink">{contact.heading}</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{contact.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <form onSubmit={handleSubmit} className="border-t border-hairline pt-8">
            <h2 className="label text-ink-faint">{contact.formHeading}</h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="label text-ink-muted">{contact.formNameLabel}</span>
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="mt-2 w-full border border-hairline bg-panel px-4 py-3 font-data text-sm text-ink outline-none focus:border-amber"
                />
              </label>
              <label className="block">
                <span className="label text-ink-muted">{contact.formContactLabel}</span>
                <input
                  required
                  value={form.contactValue}
                  onChange={update('contactValue')}
                  className="mt-2 w-full border border-hairline bg-panel px-4 py-3 font-data text-sm text-ink outline-none focus:border-amber"
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="label text-ink-muted">{contact.formProjectLabel}</span>
              <select
                value={form.project}
                onChange={update('project')}
                className="mt-2 w-full border border-hairline bg-panel px-4 py-3 font-data text-sm text-ink outline-none focus:border-amber"
              >
                {contact.formProjectOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-6 block">
              <span className="label text-ink-muted">{contact.formMessageLabel}</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder={contact.formMessagePlaceholder}
                className="mt-2 w-full resize-none border border-hairline bg-panel px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-amber"
              />
            </label>

            <button
              type="submit"
              className="label mt-8 w-full bg-amber px-7 py-4 text-void transition-colors hover:bg-ink sm:w-auto"
            >
              {contact.formSubmit}
            </button>
          </form>

          <div className="border-t border-hairline pt-8">
            <h2 className="label text-ink-faint">{contact.directHeading}</h2>
            <div className="mt-6 space-y-0 border-t border-hairline">
              {contact.channels.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between border-b border-hairline py-4 transition-colors hover:border-amber"
                >
                  <span className="label text-ink-muted group-hover:text-amber">{ch.label}</span>
                  <span className="font-data text-sm text-ink">{ch.value}</span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-ink-faint">{contact.responseNote}</p>
          </div>
        </div>
      </div>
    </TerminalPanel>
  );
}
