import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import NextLink from 'next/link';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.scrolled ? 'var(--primary)' : 'white'};
  z-index: 1001;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  cursor: pointer;
  position: relative;
  color: ${props => props.scrolled ? 'var(--dark)' : 'white'};
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const ContactButton = styled.button`
  display: none;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--dark)' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileNavLink = styled(Link)`
  margin: 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavInner>
        <NextLink href="/" passHref>
          <Logo scrolled={scrolled}>TechNova</Logo>
        </NextLink>
        
        <NavLinks>
          <NavLink 
            to="services" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            scrolled={scrolled}
          >
            Our Services
          </NavLink>
          <NavLink 
            to="team" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            scrolled={scrolled}
          >
            Our Team
          </NavLink>
          <NavLink 
            to="vision" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            scrolled={scrolled}
          >
            Our Vision
          </NavLink>
          <NavLink 
            to="clients" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            scrolled={scrolled}
          >
            Our Clients
          </NavLink>
          <NavLink 
            to="journey" 
            smooth={true} 
            duration={500} 
            spy={true} 
            activeClass="active"
            scrolled={scrolled}
          >
            Your Journey
          </NavLink>
        </NavLinks>
        
        <ContactButton as={Link} to="contact" smooth={true} duration={500}>
          Contact Us
        </ContactButton>
        
        <MobileMenuButton onClick={toggleMobileMenu} scrolled={scrolled}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavInner>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavLink 
              to="services" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </MobileNavLink>
            <MobileNavLink 
              to="team" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </MobileNavLink>
            <MobileNavLink 
              to="vision" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Vision
            </MobileNavLink>
            <MobileNavLink 
              to="clients" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Clients
            </MobileNavLink>
            <MobileNavLink 
              to="journey" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Your Journey
            </MobileNavLink>
            <MobileNavLink 
              to="contact" 
              smooth={true} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 