import Navbar from "./components/Navbar";
import "../css/App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" aria-label="Inicio" />
        <section id="sobre-mi" aria-label="Sobre mí" />
        <section id="proyectos" aria-label="Proyectos" />
        <section id="contacto" aria-label="Contacto" />
      </main>
    </>
  );
}

export default App;
