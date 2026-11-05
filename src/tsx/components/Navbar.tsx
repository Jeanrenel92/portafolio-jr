import { useEffect, useState } from "react";
import logo from "../../assets/devops.png";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]?.target.id) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top portfolio-navbar" aria-label="Navegación principal">
      <div className="container-fluid px-3 px-lg-4">
        <a className="navbar-brand portfolio-brand" href="#inicio" aria-label="Ir al inicio">
         <img src={logo} alt="" className="brand-logo" />
          <span>Jean Darius</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolio-navigation"
          aria-controls="portfolio-navigation"
          aria-expanded="false"
          aria-label="Mostrar navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="portfolio-navigation">
          <ul className="navbar-nav ms-auto gap-lg-2">
            {navigationItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
              <li className="nav-item" key={item.href}>
                <a
                  className={`nav-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
              );
            })}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
