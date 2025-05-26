import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PageContainer = styled.div`
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --secondary: #10b981;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --background-light: #f9fafb;
  --accent: #8b5cf6;
  
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  padding: 8rem 2rem 6rem;
  color: white;
  text-align: center;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 5rem 2rem;
  background: ${props => props.$altBg ? 'var(--background-light)' : 'white'};
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-light);
    line-height: 1.6;
  }
`;

const ProcessContainer = styled.div`
  margin: 4rem 0;
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  background: var(--primary);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
  }
`;

const StepContent = styled.div`
  h3 {
    color: var(--text-dark);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-light);
    line-height: 1.6;
  }
`;

const TechnologyTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? 'var(--primary)' : '#e5e7eb'};
  background: ${props => props.$active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--text-dark)'};
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.$active ? 'var(--primary-dark)' : '#f3f4f6'};
  }
`;

const TechContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: var(--primary);
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default function WebDevelopment() {
  const [activeTech, setActiveTech] = useState("frontend");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <PageContainer>
      <Head>
        <title>Web Development Services | Lucid Code Labs</title>
        <meta name="description" content="Strategic web development solutions to transform your business with modern, responsive websites and web applications." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <SectionContainer>
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Services</Link>
            <span>›</span>
            <span>Web Development</span>
          </Breadcrumbs>
          
          <Title>Strategic Web Development Solutions</Title>
          <Subtitle>
            Transform your digital presence with custom web solutions built to drive engagement, 
            conversion, and business growth in today's competitive landscape.
          </Subtitle>
        </SectionContainer>
      </HeroSection>
      
      <ContentSection>
        <SectionContainer>
          <SectionTitle>Our Web Development Approach</SectionTitle>
          <SectionDescription>
            We don't just build websites; we create digital experiences that align with your business 
            objectives and deliver measurable results.
          </SectionDescription>
          
          <ServiceGrid>
            <ServiceCard>
              <h3>Strategic Consulting</h3>
              <p>
                We analyze your business needs, target audience, and competition to develop a 
                comprehensive web strategy that drives meaningful outcomes.
              </p>
            </ServiceCard>
            
            <ServiceCard>
              <h3>UX-Driven Design</h3>
              <p>
                User experience is at the heart of our design process, ensuring intuitive navigation, 
                accessibility, and conversion-focused interfaces.
              </p>
            </ServiceCard>
            
            <ServiceCard>
              <h3>Performance Optimization</h3>
              <p>
                We build websites that load quickly, respond instantly, and operate smoothly across 
                all devices and browsers for maximum user retention.
              </p>
            </ServiceCard>
            
            <ServiceCard>
              <h3>Scalable Architecture</h3>
              <p>
                Our solutions are built to grow with your business, utilizing modern frameworks and 
                best practices that ensure long-term viability.
              </p>
            </ServiceCard>
          </ServiceGrid>
        </SectionContainer>
      </ContentSection>
      
      <ContentSection $altBg>
        <SectionContainer>
          <SectionTitle>Our Web Development Process</SectionTitle>
          <SectionDescription>
            A methodical approach that transforms your vision into a high-performing digital solution.
          </SectionDescription>
          
          <ProcessContainer>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepContent>
                <h3>Discovery & Strategy</h3>
                <p>
                  We begin by understanding your business goals, target audience, and competitive landscape.
                  This phase culminates in a detailed project roadmap and technical specification.
                </p>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepContent>
                <h3>UX/UI Design</h3>
                <p>
                  Our designers create wireframes and high-fidelity mockups that focus on user experience, 
                  brand consistency, and conversion optimization.
                </p>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepContent>
                <h3>Development</h3>
                <p>
                  We transform designs into responsive, functional websites using modern frameworks and 
                  clean, maintainable code while following best practices.
                </p>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepContent>
                <h3>Testing & Quality Assurance</h3>
                <p>
                  Rigorous testing across devices and browsers ensures optimal performance, accessibility, 
                  and security before launch.
                </p>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>5</StepNumber>
              <StepContent>
                <h3>Deployment & Launch</h3>
                <p>
                  We handle all aspects of deployment, including server configuration, SEO optimization, 
                  and analytics setup for a smooth launch.
                </p>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>6</StepNumber>
              <StepContent>
                <h3>Ongoing Support & Growth</h3>
                <p>
                  Post-launch, we provide maintenance, performance monitoring, and iterative improvements 
                  based on user data and business results.
                </p>
              </StepContent>
            </ProcessStep>
          </ProcessContainer>
        </SectionContainer>
      </ContentSection>
      
      <ContentSection>
        <SectionContainer>
          <SectionTitle>Technologies We Leverage</SectionTitle>
          <SectionDescription>
            We utilize cutting-edge technologies and frameworks to deliver robust, scalable web solutions.
          </SectionDescription>
          
          <TechnologyTabs>
            <Tab 
              $active={activeTech === "frontend"} 
              onClick={() => setActiveTech("frontend")}
            >
              Frontend
            </Tab>
            <Tab 
              $active={activeTech === "backend"} 
              onClick={() => setActiveTech("backend")}
            >
              Backend
            </Tab>
            <Tab 
              $active={activeTech === "cms"} 
              onClick={() => setActiveTech("cms")}
            >
              CMS
            </Tab>
            <Tab 
              $active={activeTech === "ecommerce"} 
              onClick={() => setActiveTech("ecommerce")}
            >
              E-Commerce
            </Tab>
          </TechnologyTabs>
          
          <TechContent>
            {activeTech === "frontend" && (
              <div>
                <h3>Modern Frontend Technologies</h3>
                <p>
                  We build responsive, interactive user interfaces using React, Next.js, Vue.js, 
                  and other modern JavaScript frameworks. Our expertise includes CSS-in-JS solutions 
                  like styled-components, state management libraries, and performance optimization techniques.
                </p>
              </div>
            )}
            
            {activeTech === "backend" && (
              <div>
                <h3>Robust Backend Solutions</h3>
                <p>
                  Our backend development utilizes Node.js, Express, Python/Django, or PHP/Laravel 
                  depending on project requirements. We implement RESTful APIs, GraphQL, and database 
                  solutions including PostgreSQL, MongoDB, and MySQL with a focus on security and scalability.
                </p>
              </div>
            )}
            
            {activeTech === "cms" && (
              <div>
                <h3>Content Management Systems</h3>
                <p>
                  We specialize in headless CMS solutions like Contentful and Sanity, as well as 
                  traditional platforms like WordPress. Our custom CMS implementations provide intuitive 
                  content management while maintaining frontend flexibility and performance.
                </p>
              </div>
            )}
            
            {activeTech === "ecommerce" && (
              <div>
                <h3>E-Commerce Platforms</h3>
                <p>
                  We build custom e-commerce solutions using Shopify, WooCommerce, or headless commerce 
                  platforms like Commercetools. Our implementations include payment processing, inventory 
                  management, and seamless checkout experiences optimized for conversion.
                </p>
              </div>
            )}
          </TechContent>
        </SectionContainer>
      </ContentSection>
      
      <CTASection>
        <SectionContainer>
          <CTATitle>Ready to Transform Your Web Presence?</CTATitle>
          <CTAText>
            Let's discuss how our web development expertise can help you achieve your business goals 
            and create exceptional digital experiences for your customers.
          </CTAText>
          <CTAButton href="/#contact">Schedule a Strategy Session</CTAButton>
        </SectionContainer>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
} 