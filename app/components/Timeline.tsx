export interface TimelineItem {
  id: string;
  date: string;
  dateLabel?: string;
  state: string;
  title?: string;
  note?: string;
  detail?: string;
  surface?: string;
  cycle?: string;
  url?: string;
  links?: Array<{ href: string; label: string }>;
}

const shortDate = (value: string) => new Intl.DateTimeFormat("en", {
  month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "UTC",
}).format(new Date(value));

export function Timeline({ items, empty }: { items: TimelineItem[]; empty: string }) {
  if (!items.length) return <p className="muted">{empty}</p>;
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id}>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-meta">
            <time dateTime={item.date}>{item.dateLabel ?? `${shortDate(item.date)} UTC`}</time>
            <span className={`state state-${item.state.toLowerCase().replace(/\s/g, "-")}`}>{item.state}</span>
          </div>
          <div className="timeline-body">
            <h3>{item.title ?? `${item.surface} reset`}</h3>
            <p>{item.detail ?? item.note}</p>
            {item.cycle && <small>Cycle since prior event: {item.cycle}</small>}
            {item.links?.map((link) => (
              <a key={link.href} href={link.href} rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
            ))}
            {!item.links?.length && item.url && <a href={item.url} rel="noreferrer">Original source <span aria-hidden="true">↗</span></a>}
          </div>
        </li>
      ))}
    </ol>
  );
}
