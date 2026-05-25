import { experience } from "@/data/experience";
import { SectionHead } from "../SectionHead";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  return (
    <section id="experiencia">
      <div className="container">
        <SectionHead
          num="05 / Experiência"
          title={
            <>
              Trajetória <em>— de júnior a full-stack.</em>
            </>
          }
        />

        <div className="timeline">
          {experience.map((entry, index) => (
            <TimelineItem
              key={`${entry.role}-${entry.period}`}
              entry={entry}
              revealDelay={index as 0 | 1 | 2 | 3 | 4 | 5 | 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
