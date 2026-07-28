export default function TerminalPanel({ id, className = '', contentClassName = 'max-w-content', children }) {
  return (
    <section id={id} className={`border-t border-hairline bg-void ${className}`}>
      <div className={`mx-auto ${contentClassName} px-6 lg:px-10`}>{children}</div>
    </section>
  );
}

export function Kicker({ children }) {
  return <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-amber">{children}</span>;
}
