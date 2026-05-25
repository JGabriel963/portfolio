import { projects } from "@/data/projects";
import { SectionHead } from "../SectionHead";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <SectionHead
          num="03 / Projetos"
          title={
            <>
              Trabalhos selecionados <em>— do conceito ao deploy.</em>
            </>
          }
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              revealDelay={Math.min(index, 6) as 0 | 1 | 2 | 3 | 4 | 5 | 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
