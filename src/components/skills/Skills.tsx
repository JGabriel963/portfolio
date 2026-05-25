import { skillGroups } from "@/data/skills";
import { SectionHead } from "../SectionHead";
import { SkillGroupCard } from "./SkillGroupCard";

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead
          num="04 / Skills"
          title={
            <>
              Ferramentas do ofício <em>— escolhidas para durar.</em>
            </>
          }
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillGroupCard
              key={group.title}
              group={group}
              revealDelay={index as 0 | 1 | 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
