import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import "../css/App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="sobre-mi" aria-label="Sobre mí" />
        <ProjectsSection />
        <section id="contacto" aria-label="Contacto" />
      </main>
    </>
  );
}

export default App;
