import { useState } from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import KVKK from './components/KVKK';

type PageType = 'home' | 'privacy' | 'terms' | 'kvkk';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen">
        <button
          onClick={() => navigateToPage('home')}
          className="fixed top-8 left-8 z-50 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white rounded-xl hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2"
        >
          <span>← Ana Sayfa</span>
        </button>
        <PrivacyPolicy />
        <Footer onNavigate={navigateToPage} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen">
        <button
          onClick={() => navigateToPage('home')}
          className="fixed top-8 left-8 z-50 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white rounded-xl hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2"
        >
          <span>← Ana Sayfa</span>
        </button>
        <TermsOfService />
        <Footer onNavigate={navigateToPage} />
        <ScrollToTop />
      </div>
    );
  }

  if (currentPage === 'kvkk') {
    return (
      <div className="min-h-screen">
        <button
          onClick={() => navigateToPage('home')}
          className="fixed top-8 left-8 z-50 px-6 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 text-white rounded-xl hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2"
        >
          <span>← Ana Sayfa</span>
        </button>
        <KVKK />
        <Footer onNavigate={navigateToPage} />
        <ScrollToTop />
      </div>
    );
  }

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
      <Footer onNavigate={navigateToPage} />
      <ScrollToTop />
    </div>
  );
}

export default App;
