import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Achievements />
        <Features />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
