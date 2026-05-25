import type { Project } from "@/data/projects";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

type Props = {
  project: Project;
  revealDelay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export function ProjectCard({ project, revealDelay = 0 }: Props) {
  const delayClass = revealDelay > 0 ? ` delay-${revealDelay}` : "";
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      className={`card reveal${delayClass}`}
      aria-label={isComingSoon ? "Espaço para novo projeto" : undefined}
    >
      {isComingSoon ? (
        <div className="card-preview placeholder">
          <div className="placeholder-inner">
            <div className="pre">Próximo projeto</div>
            <div className="sub">em construção</div>
          </div>
        </div>
      ) : (
        <div className="card-preview">
          {project.previewLabel && <span className="label">{project.previewLabel}</span>}
          {project.year && <span className="badge-year">{project.year}</span>}
        </div>
      )}

      <div className="card-body">
        <ProjectMeta project={project} />

        <h3 className={`card-title${isComingSoon ? " muted" : ""}`}>
          {project.title}
        </h3>

        <p className="card-desc">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="chip-row">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        )}

        <div className="card-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`card-link${link.primary ? " primary" : ""}`}
            >
              {link.label}
              {link.kind === "github" ? (
                <GithubIcon size={12} />
              ) : (
                <ArrowUpRightIcon size={12} />
              )}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  if (project.status === "live") {
    return (
      <div className="card-meta">
        <span className="live"><span className="dot" />live</span>
        <span className="dot dot-separator" />
        <span>{project.category}</span>
      </div>
    );
  }
  if (project.status === "open-source") {
    return (
      <div className="card-meta">
        <span><span className="dot" />open source</span>
        <span className="dot dot-separator" />
        <span>{project.category}</span>
      </div>
    );
  }
  return (
    <div className="card-meta">
      <span><span className="dot" />em breve</span>
    </div>
  );
}
