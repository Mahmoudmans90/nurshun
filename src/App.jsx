import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import WhatsAppButton from "./components/whatspp";

function App() {
  return (
    <div className="min-h-screen bg-[#07131e]">
      <a
        href="#main-content"
        className="sr-only z-[100] bg-white px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
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

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
export default App;
