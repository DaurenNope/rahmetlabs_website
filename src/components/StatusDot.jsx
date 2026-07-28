export default function StatusDot({ color = 'amber', className = '' }) {
  const colorClass = color === 'manual' ? 'bg-manual' : 'bg-amber';
  return (
    <span className={`relative inline-flex h-1.5 w-1.5 ${className}`}>
      <span className={`status-dot absolute inline-flex h-full w-full rounded-full ${colorClass}`} />
    </span>
  );
}
