import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Values from './components/Values';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Values />
      <Portfolio />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
