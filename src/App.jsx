import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <>
      <a href="#main-content" id="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Products />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
