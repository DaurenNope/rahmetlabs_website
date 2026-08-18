import Reveal from './Reveal';

type Position = {
  code: string;
  title: string;
  type: string;
  status: string;
  description?: string;
  tech?: string[];
  links?: { label: string; url: string; img?: string }[];
};

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 14 L14 2 M5 2 h9 v9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </span>
  );
}

/* real captures of the live sites; private work gets a sealed plate instead */
function Media({ p, privateLabel }: { p: Position; privateLabel?: string }) {
  const shots = (p.links ?? []).filter((l) => l.img);
  if (shots.length > 0) {
    return (
      <span className={`row-media fan-${shots.length}`} aria-hidden="true">
        {shots.map((l, i) => (
          <img key={l.url} src={l.img} alt="" loading="lazy" style={{ ['--fi' as never]: i }} />
        ))}
      </span>
    );
  }
  return (
    <span className="row-media row-sealed" aria-hidden="true">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="7" width="10" height="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.5 7 V5.5 a2.5 2.5 0 0 1 5 0 V7" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {privateLabel ? <span className="row-sealed-lbl mono">{privateLabel}</span> : null}
    </span>
  );
}

export default function WorkLedger({
  positions,
  statusLive,
  statusShipped,
  privateNote,
  detailed = false,
}: {
  positions: Position[];
  statusLive: string;
  statusShipped: string;
  privateNote?: string;
  detailed?: boolean;
}) {
  const privateShort = privateNote?.split('·')[0]?.trim();
  return (
    <div className="ledger">
      {positions.map((p) => {
        const href = p.links?.[0]?.url;
        const multi = (p.links?.length ?? 0) > 1;
        const title = <span className="row-title">{p.title}</span>;
        const main = (
          <span className="row-main">
            {multi && href ? (
              <a className="row-title-link" href={href} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
            {detailed && p.description ? <span className="row-desc">{p.description}</span> : null}
            {multi && p.links ? (
              <span className="row-links mono">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </span>
            ) : null}
            {!href && privateNote ? <span className="row-private mono">{privateNote}</span> : null}
            {detailed && p.tech ? (
              <span className="row-tech chips">
                {p.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </span>
            ) : null}
          </span>
        );
        const media = <Media p={p} privateLabel={href ? undefined : privateShort} />;
        const side = (
          <span className="row-side meta mono">
            {p.type}{' '}
            {p.status === 'live' && href ? (
              <span className="live">
                <i /> {statusLive}
              </span>
            ) : (
              <span>· {statusShipped}</span>
            )}
          </span>
        );
        /* honesty rule: a row either IS a link (whole row, invert on hover)
           or it is not (no invert, no arrow). multi-link rows keep inner
           anchors and stay non-inverting. */
        if (href && !multi) {
          return (
            <Reveal key={p.code} className="row-wrap">
              <a className="row" href={href} target="_blank" rel="noreferrer">
                <span className="row-code mono">{p.code}</span>
                {main}
                {media}
                {side}
                <Arrow />
              </a>
            </Reveal>
          );
        }
        return (
          <Reveal key={p.code} className="row-wrap">
            <div className="row row-plain">
              <span className="row-code mono">{p.code}</span>
              {main}
              {media}
              {side}
              {href ? <Arrow /> : null}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
