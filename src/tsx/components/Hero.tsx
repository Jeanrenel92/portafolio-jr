import profileImage from "../../assets/jred.jpg";

function Hero() {
  return (
    <section id="inicio" className="hero-section container py-5" aria-labelledby="hero-title">
      <div className="row align-items-center gy-4">
        <div className="col-lg-7">
          <span className="hero-greeting">Hola, soy</span>
          <h1 id="hero-title" className="hero-title">Jean Darius</h1>
          <h2 className="hero-role">Estudiante de la Escuela de Informatica de Duoc</h2>
          <p className="hero-description">
            Me apasiona la tecnología y el desarrollo de aplicaciones web.
            Estoy enfocado en aprender y construir soluciones modernas,
            accesibles y centradas en la experiencia del usuario.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#proyectos" className="btn btn-primary btn-lg">Ver mis proyectos</a>
            <a href="#contacto" className="btn btn-outline-primary btn-lg">Contactarme</a>
          </div>
        </div>

        <div className="col-lg-5 text-center">
          <div className="hero-photo-wrapper mx-auto">
            <img
              src={profileImage}
              className="hero-photo img-fluid"
              alt="Fotografía de Jean Darius"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
