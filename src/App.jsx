import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundEffects from "./components/BackgroundEffects";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import DesignGallery from "./components/DesignGallery";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BackgroundEffects />

      <div className="text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <DesignGallery />
        <CurrentlyBuilding />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;