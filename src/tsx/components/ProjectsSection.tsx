import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function ProjectsSection() {
  const finishedProjects = projects.filter((project) => project.status === "finalizado");
  const currentProjects = projects.filter((project) => project.status === "en-curso");

  return (
    <section id="proyectos" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-container">
        <div className="projects-introduction">
          <span className="section-eyebrow">Mi trabajo</span>
          <h2 id="projects-title" className="section-title">Proyectos</h2>
          <p>
            Una selección de soluciones web desarrolladas para organizaciones,
            comunidades y servicios reales, junto a proyectos que continúan en desarrollo.
          </p>
        </div>

        <div className="projects-group">
          <div className="projects-group-heading">
            <h3>Proyectos finalizados</h3>
            <span>{finishedProjects.length} proyectos</span>
          </div>
          <div className="projects-grid">
            {finishedProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>

        <div className="projects-group">
          <div className="projects-group-heading">
            <h3>Proyectos en curso</h3>
            <span>{currentProjects.length} proyectos</span>
          </div>
          <div className="projects-grid">
            {currentProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
