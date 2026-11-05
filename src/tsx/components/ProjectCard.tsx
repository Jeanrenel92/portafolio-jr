import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const isFinished = project.status === "finalizado";
  const initials = project.name
    .split(/[:\s-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("").toUpperCase();

  return (
    <article className="project-card">
      <div className={`project-cover ${isFinished ? "project-cover-finished" : "project-cover-progress"}`} aria-hidden="true">
        <span>{initials}</span>
      </div>
      <div className="project-card-content">
        <p className="project-role">{project.role}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        {project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        )}

        <div className="project-technologies" aria-label="Tecnologías utilizadas">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-result">
          <strong>{isFinished ? "Resultado" : "Resultado esperado"}</strong>
          <p>{project.result}</p>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
