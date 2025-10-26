import HeaderNew from './components/HeaderNew';
// import HeroFluid from './components/HeroFluid';
// import HeroIstanbulSkyline from './components/HeroIstanbulSkyline';
// import HeroSpline from './components/HeroSpline';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import About from './components/About';
import Coverage from './components/Coverage';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <HeaderNew />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
        <ServiceDetails />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="coverage">
        <Coverage />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
