import React, { useState, useRef, useEffect } from 'react';
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

const NavItem = styled.div`
  position: relative;
`;

const ServicesDropdownWrapper = styled.div`
  position: relative;
`;

const ServicesButton = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
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
  
  &:hover::after {
    width: 100%;
  }
`;

const DropdownIcon = styled.span`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  transition: transform 0.3s ease;
  transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0)'};
`;

const ServicesDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 1rem);
  left: -36px;
  transform: none;
  width: 760px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 12%;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: white;
  }
`;

const DesktopServiceCard = styled.a`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: rgba(37, 99, 235, 0.05);
  }
`;

const DesktopServiceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #4A90E2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const DesktopServiceContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DesktopServiceTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0 0 0.25rem 0;
`;

const DesktopServiceDescription = styled.p`
  font-size: 0.8125rem;
  color: var(--gray);
  margin: 0;
  line-height: 1.4;
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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setServicesExpanded(false);
    }
  };
  
  const toggleServicesExpanded = () => {
    setServicesExpanded(!servicesExpanded);
  };

  const toggleDesktopDropdown = () => {
    setDesktopDropdownOpen(!desktopDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const services = [
    {
      icon: "📱",
      title: "AI Powered Software",
      description: "Smart applications that evolve with your business using artificial intelligence.",
      link: "/services/ai-powered-software"
    },
    {
      icon: "🖥️",
      title: "Websites & Web Platforms",
      description: "Fast, secure, and scalable digital experiences for your business.",
      link: "/services/web-development"
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform apps for iOS and Android with exceptional performance.",
      link: "/services/mobile-app-development"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Turn raw data into actionable insights with custom analytics solutions.",
      link: "/services/data-analytics"
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Real-time dashboards and reports integrated with your business systems.",
      link: "/services/business-intelligence"
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Enhance systems with AI capabilities, from NLP to computer vision.",
      link: "/services/ai-ml-integration"
    },
    {
      icon: "💾",
      title: "Data Management",
      description: "Ensure data quality, security, and accessibility across your organization.",
      link: "/services/data-management"
    },
    {
      icon: "🌐",
      title: "Webhosting",
      description: "Reliable hosting solutions tailored to your application's requirements.",
      link: "/services/webhosting"
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description: "Streamline operations by automating repetitive tasks and workflows.",
      link: "/services/process-automation"
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      description: "Create intuitive, accessible experiences across all digital touchpoints.",
      link: "/services/ux-ui-design"
    },
    {
      icon: "🎭",
      title: "Branding & Visual Identity",
      description: "Build a strong, cohesive visual identity that resonates with your audience.",
      link: "/services/branding"
    },
    {
      icon: "📈",
      title: "Digital Growth & Performance",
      description: "Optimize digital presence and maximize ROI across all online channels.",
      link: "/services/digital-growth"
    }
  ];
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavInner>
        <NextLink href="/" passHref>
          <Logo scrolled={scrolled}>TechNova</Logo>
        </NextLink>
        
        <NavLinks>
          <NavItem ref={dropdownRef}>
            <ServicesDropdownWrapper 
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <ServicesButton 
                scrolled={scrolled} 
                onClick={toggleDesktopDropdown}
              >
                Our Services
                <DropdownIcon open={desktopDropdownOpen}>▼</DropdownIcon>
              </ServicesButton>
              
              <AnimatePresence>
                {desktopDropdownOpen && (
                  <ServicesDropdown
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service, index) => (
                      <NextLink 
                        href={service.link} 
                        key={index}
                        passHref
                      >
                        <DesktopServiceCard>
                          <DesktopServiceIcon>{service.icon}</DesktopServiceIcon>
                          <DesktopServiceContent>
                            <DesktopServiceTitle>{service.title}</DesktopServiceTitle>
                            <DesktopServiceDescription>{service.description}</DesktopServiceDescription>
                          </DesktopServiceContent>
                        </DesktopServiceCard>
                      </NextLink>
                    ))}
                  </ServicesDropdown>
                )}
              </AnimatePresence>
            </ServicesDropdownWrapper>
          </NavItem>

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
                        <NextLink 
                          href={service.link} 
                          key={index}
                          passHref
                        >
                          <a style={{ textDecoration: 'none' }}>
                            <div style={{ 
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              padding: '0.5rem 0.75rem',
                              borderRadius: '6px',
                            }}>
                              <ServiceIcon>{service.icon}</ServiceIcon>
                              <ServiceTitle>{service.title}</ServiceTitle>
                            </div>
                          </a>
                        </NextLink>
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