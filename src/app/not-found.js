import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main className="flex min-h-screen items-center bg-paper px-5">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="kicker mb-8">404</p>
        <h1 className="mb-8 max-w-[16ch] text-display font-bold text-ink">
          This page didn&apos;t make it into the system.
        </h1>
        <p className="mb-12 max-w-[52ch] text-[1.08rem] leading-[1.75] text-ink/70">
          The URL you followed doesn&apos;t exist here — it may have moved, or
          never shipped. The rest of the site is very much live.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[0.95rem] font-medium text-paper transition-opacity hover:opacity-90"
        >
          Back to Rahmet Labs
        </Link>
      </div>
    </main>
  );
}
