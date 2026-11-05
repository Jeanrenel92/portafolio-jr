import logo from "../../assets/devops.png";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
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
            {navigationItems.map((item, index) => (
              <li className="nav-item" key={item.href}>
                <a
                  className={`nav-link${index === 0 ? " active" : ""}`}
                  aria-current={index === 0 ? "page" : undefined}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
