'use client';

/**
 * Button — nested icon circle ("button-in-button") with kinetic tension.
 * Renders <Link> for internal hrefs, <a> for external, <button> otherwise.
 */

import Link from 'next/link';

const base =
  'group relative inline-flex items-center justify-between gap-4 rounded-full px-6 py-3 font-sans text-[0.8125rem] font-semibold tracking-[0.04em] transition-all duration-500 ease-settle active:scale-[0.98] select-none';

const iconWrap =
  'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ease-settle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105';

const arrow = (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform duration-500 ease-settle group-hover:rotate-45">
    <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const variants = {
  primary: `${base} bg-amber text-void hover:bg-ink`,
  ghost: `${base} border border-hairline text-ink hover:border-amber/60 hover:bg-white/[0.03]`,
  dark: `${base} border border-white/15 bg-transparent text-ink hover:border-amber`,
};

const iconVariants = {
  primary: `${iconWrap} bg-black/15 text-void group-hover:bg-amber group-hover:text-void`,
  ghost: `${iconWrap} bg-white/[0.06] text-amber`,
  dark: `${iconWrap} bg-white/[0.06] text-amber`,
};

export default function Button({
  variant = 'primary',
  href,
  external = false,
  className = '',
  children,
  withArrow = true,
  ...rest
}) {
  const cls = `${variants[variant]} ${className}`;
  const iconCls = iconVariants[variant];

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && <span className={iconCls}>{arrow}</span>}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
}
