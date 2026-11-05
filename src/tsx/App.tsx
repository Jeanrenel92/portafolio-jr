import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "../css/App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="sobre-mi" aria-label="Sobre mí" />
        <section id="proyectos" aria-label="Proyectos" />
        <section id="contacto" aria-label="Contacto" />
      </main>
    </>
  );
}

export default App;
