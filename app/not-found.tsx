import Link from 'next/link';
import { getDictionary } from '@/lib/content';

export default function NotFound() {
  const t = getDictionary('en');
  const nf = t.notFound;

  return (
    <main className="nf">
      <span className="nf-code mono">{nf.code}</span>
      <h1>{nf.heading}</h1>
      <p>{nf.body}</p>
      <div className="nf-actions">
        <Link className="btn-tumar" href="/en">
          {nf.primary}
        </Link>
        <Link className="btn-ghost" href="/en/contact">
          {nf.secondary}
        </Link>
      </div>
    </main>
  );
}
