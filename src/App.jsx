import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Routes from './components/sections/Routes';
import Safety from './components/sections/Safety';
import Pass from './components/sections/Pass';
import Locations from './components/sections/Locations';
import MobileApp from './components/sections/MobileApp';

import FAQ from './components/sections/FAQ';
import Gallery from './components/sections/Gallery';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links with navbar offset
    const handleAnchorClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        if (targetId === 'hero') {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          return;
        }

        const navbarHeight = 80; // Match compact state height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleAnchorClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Routes />
        <Safety />
        <Pass />
        <Locations />
        <MobileApp />

        <FAQ />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
