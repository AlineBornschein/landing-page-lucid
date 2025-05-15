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
  background-color: #1A1E26;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileMenuLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MobileNavItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: left;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }
`;

const ExpandableNavItem = styled(MobileNavItem)`
  display: block;
  cursor: pointer;
`;

const ExpandableNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const ExpandIcon = styled.span`
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0)'};
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
`;

const ServiceCard = styled(Link)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background-color: #4A90E2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: white;
  margin-right: 0.75rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setServicesExpanded(false);
    }
  };
  
  const toggleServicesExpanded = () => {
    setServicesExpanded(!servicesExpanded);
  };
  
  const services = [
    {
      icon: "📱",
      title: "AI Powered Software",
      link: "ai-software"
    },
    {
      icon: "🖥️",
      title: "Websites & Web Platforms",
      link: "web-platforms"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      link: "mobile-apps"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      link: "data-analytics"
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      link: "business-intelligence"
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      link: "ai-ml-integration"
    },
    {
      icon: "💾",
      title: "Data Management",
      link: "data-management"
    },
    {
      icon: "🌐",
      title: "Webhosting",
      link: "webhosting"
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      link: "process-automation"
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      link: "ux-ui-design"
    },
    {
      icon: "🎭",
      title: "Branding & Visual Identity",
      link: "branding"
    },
    {
      icon: "📈",
      title: "Digital Growth & Performance",
      link: "digital-growth"
    }
  ];
  
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
          {mobileMenuOpen ? '' : '☰'}
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
            <MobileMenuHeader>
              <MobileMenuLogo>TechNova</MobileMenuLogo>
              <CloseButton onClick={toggleMobileMenu}>✕</CloseButton>
            </MobileMenuHeader>
            
            <MobileNavItems>
              <ExpandableNavItem>
                <ExpandableNavHeader onClick={toggleServicesExpanded}>
                  Our Services
                  <ExpandIcon expanded={servicesExpanded}>▼</ExpandIcon>
                </ExpandableNavHeader>
                <AnimatePresence>
                  {servicesExpanded && (
                    <ServicesGrid
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {services.map((service, index) => (
                        <ServiceCard 
                          key={index}
                          to={service.link}
                          smooth={true}
                          duration={500}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ServiceIcon>{service.icon}</ServiceIcon>
                          <ServiceTitle>{service.title}</ServiceTitle>
                        </ServiceCard>
                      ))}
                    </ServicesGrid>
                  )}
                </AnimatePresence>
              </ExpandableNavItem>
              
              <MobileNavItem>
                <MobileNavLink 
                  to="team" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </MobileNavLink>
              </MobileNavItem>
              
              <MobileNavItem>
                <MobileNavLink 
                  to="vision" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Vision
                </MobileNavLink>
              </MobileNavItem>
              
              <MobileNavItem>
                <MobileNavLink 
                  to="clients" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Clients
                </MobileNavLink>
              </MobileNavItem>
              
              <MobileNavItem>
                <MobileNavLink 
                  to="journey" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Your Journey
                </MobileNavLink>
              </MobileNavItem>
              
              <MobileNavItem>
                <MobileNavLink 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </MobileNavLink>
              </MobileNavItem>
            </MobileNavItems>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar; 