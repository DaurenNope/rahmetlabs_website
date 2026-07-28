import Link from 'next/link';

const FACE = {
  primary:
    'border-2 border-ink bg-void text-ink group-hover:bg-amber group-hover:border-amber group-hover:text-void',
  ghost: 'border-2 border-ink bg-void text-ink group-hover:bg-ink group-hover:text-void',
  dark: 'border-2 border-viewport-hairline bg-viewport text-viewport-ink group-hover:bg-amber group-hover:border-amber group-hover:text-void',
  'dark-ghost': 'border-2 border-viewport-hairline bg-transparent text-viewport-ink group-hover:border-amber group-hover:text-amber',
};

const SHADOW = {
  primary: 'bg-amber',
  ghost: 'bg-ink',
  dark: 'bg-amber',
  'dark-ghost': 'bg-viewport-hairline',
};

const SIZE = {
  md: 'px-7 py-4 text-sm',
  sm: 'px-5 py-3 text-xs',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  type = 'button',
  onClick,
  target,
  rel,
}) {
  const Comp = href ? Link : 'button';
  const compProps = href ? { href, target, rel } : { type, onClick };

  return (
    <span className={`group relative inline-block ${className}`}>
      <span
        aria-hidden
        className={`absolute inset-0 translate-x-[6px] translate-y-[6px] transition-transform duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 ${SHADOW[variant]}`}
      />
      <Comp
        {...compProps}
        className={`relative flex w-full items-center justify-center gap-2 font-bold uppercase tracking-wide transition-colors duration-200 ${FACE[variant]} ${SIZE[size]}`}
      >
        {children}
        {arrow ? (
          <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        ) : null}
      </Comp>
    </span>
  );
}
