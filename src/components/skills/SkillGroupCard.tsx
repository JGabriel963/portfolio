import type { SkillGroup } from "@/data/skills";

type Props = {
  group: SkillGroup;
  revealDelay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export function SkillGroupCard({ group, revealDelay = 0 }: Props) {
  const delayClass = revealDelay > 0 ? ` delay-${revealDelay}` : "";

  return (
    <div className={`skill-group reveal${delayClass}`}>
      <div className="skill-group-head">
        <h3 className="skill-group-title">{group.title}</h3>
        <span className="skill-group-num">{group.num}</span>
      </div>
      <div className="skill-list">
        {group.items.map(({ name, Icon }) => (
          <a key={name} className="skill-pill">
            <span className="skill-icon" aria-hidden="true">
              <Icon width={16} height={16} />
            </span>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
