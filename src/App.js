import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Vision from './components/Vision';
import Clients from './components/Clients';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Team />
      <Vision />
      <Clients />
      <Journey />
      <Contact />
      <Footer />
      
      <motion.div 
        className="scroll-to-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 100,
          display: scrolled ? 'block' : 'none'
        }}
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}

export default App; 