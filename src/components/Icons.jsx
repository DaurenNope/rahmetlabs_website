function Base({ children, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconAutomation(props) {
  return (
    <Base {...props}>
      <path d="M4 12a8 8 0 0 1 13.5-5.7" />
      <path d="M17.5 3v3.6h-3.6" />
      <path d="M20 12a8 8 0 0 1-13.5 5.7" />
      <path d="M6.5 21v-3.6h3.6" />
    </Base>
  );
}

export function IconAI(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M12 8v4M12 12l-4.7 3.6M12 12l4.7 3.6" />
    </Base>
  );
}

export function IconWeb(props) {
  return (
    <Base {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 8.5h17" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function IconMobile(props) {
  return (
    <Base {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M10.5 18.2h3" />
    </Base>
  );
}

export function IconBackend(props) {
  return (
    <Base {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </Base>
  );
}

export function IconWeb3(props) {
  return (
    <Base {...props}>
      <path d="M12 3.5 19 7.7v8.6L12 20.5 5 16.3V7.7z" />
      <path d="M12 3.5v17M5 7.7l7 4.3 7-4.3M5 16.3l7-4.3 7 4.3" />
    </Base>
  );
}
