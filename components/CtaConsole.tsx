'use client';

import { useEffect, useState } from 'react';

/* the placeholder types itself through real examples of manual work;
   pauses while the visitor is typing or the field is focused */
export default function CtaConsole({
  placeholder,
  examples,
  send,
  whatsapp,
}: {
  placeholder: string;
  examples: string[];
  send: string;
  whatsapp: string;
}) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (focused || value) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = examples[phrase];
      if (!deleting) {
        char += 1;
        setTyped(current.slice(0, char));
        if (char >= current.length) {
          deleting = true;
          timer = setTimeout(tick, 2100);
          return;
        }
        timer = setTimeout(tick, 46);
      } else {
        char -= 3;
        if (char <= 0) {
          char = 0;
          deleting = false;
          phrase = (phrase + 1) % examples.length;
          setTyped('');
          timer = setTimeout(tick, 420);
          return;
        }
        setTyped(current.slice(0, char));
        timer = setTimeout(tick, 22);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [focused, value, examples]);

  const submit = () => {
    const text = value.trim();
    const url = text ? `${whatsapp}?text=${encodeURIComponent(text)}` : whatsapp;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <form
      className="cta-console"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <div className="cta-console-row">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={typed ? `${typed}…` : placeholder}
          aria-label={placeholder}
          className="cta-console-input mono"
        />
        <button type="submit" className="cta-console-btn" aria-label={send}>
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
