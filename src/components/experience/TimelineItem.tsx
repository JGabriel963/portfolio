import type { ExperienceEntry } from "@/data/experience";

type Props = {
  entry: ExperienceEntry;
  revealDelay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export function TimelineItem({ entry, revealDelay = 0 }: Props) {
  const delayClass = revealDelay > 0 ? ` delay-${revealDelay}` : "";
  const currentClass = entry.current ? " current" : "";

  return (
    <div className={`timeline-item${currentClass} reveal${delayClass}`}>
      <div className="timeline-card">
        <div className="timeline-meta">
          <span className="period">{entry.period}</span>
          <span className="type">{entry.type}</span>
        </div>
        <div className="timeline-body">
          <h3>{entry.role}</h3>
          <div className="company">{entry.company}</div>
          <p>{entry.description}</p>
          {entry.tags.length > 0 && (
            <div className="timeline-tags">
              {entry.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
