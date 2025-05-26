import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PageContainer = styled.div`
  --primary: #3b82f6;
  --primary-light: #93c5fd;
  --primary-dark: #1d4ed8;
  --dark: #1e293b;
  --gray: #64748b;
  --light-gray: #e2e8f0;
  --light: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  padding: 10rem 0 5rem;
  color: white;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Breadcrumbs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: white;
    }
  }
  
  span {
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  margin-bottom: 2rem;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 5rem 0;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--dark);
`;

const SectionSubtitle = styled.span`
  color: var(--primary);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ContentText = styled.div`
  color: var(--gray);
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      left: -1.5rem;
      top: 0.75rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: var(--primary);
    }
  }
`;

const ImageContainer = styled.div`
  background-color: #e2e8f0;
  border-radius: 1rem;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border: 1px solid var(--light-gray);
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-light);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary-dark);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const CardDescription = styled.p`
  color: var(--gray);
  line-height: 1.7;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const StepDescription = styled.p`
  color: var(--gray);
  line-height: 1.7;
`;

const CTASection = styled.section`
  background-color: var(--light);
  padding: 5rem 0;
`;

const CenteredContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-top: 2rem;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const TechItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--light-gray);
  text-align: center;
  
  h4 {
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray);
    font-size: 0.875rem;
  }
`;

const ReactNativeMobileApp = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
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
        <title>React Native Mobile App Development | Lucid Code Labs Software</title>
        <meta name="description" content="Expert React Native mobile app development services. Build cross-platform iOS and Android apps with a single codebase. Fast, efficient, and cost-effective mobile solutions." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#services">Services</Link>
            <span>/</span>
            <span>React Native Mobile Apps</span>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>React Native Mobile App Development</SectionTitle>
            <SectionDescription>
              Build powerful cross-platform mobile applications with React Native. One codebase, two platforms - delivering native performance and user experience for both iOS and Android while reducing development time and costs.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Expertise</SectionSubtitle>
              <ContentTitle>Why React Native for Your Mobile App?</ContentTitle>
              <p>
                React Native is our framework of choice for mobile app development because it offers the perfect balance of performance, development efficiency, and cost-effectiveness. With React Native, we can build truly native mobile applications using a single codebase that runs on both iOS and Android.
              </p>
              <p>
                This approach means faster time-to-market, reduced development costs, and easier maintenance - all while delivering the native performance and user experience your users expect. React Native is trusted by companies like Facebook, Instagram, Airbnb, and Tesla for their mobile applications.
              </p>
              <p>
                Our team specializes exclusively in React Native development, ensuring we leverage the framework's full potential to create high-quality, scalable mobile applications that meet your business objectives.
              </p>
            </ContentText>
            <ImageContainer>
              <img src="/images/mobile3.png" alt="React Native Mobile Development" />
            </ImageContainer>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </CardIcon>
              <CardTitle>Cross-Platform Efficiency</CardTitle>
              <CardDescription>
                Write once, run everywhere. React Native allows us to develop for both iOS and Android simultaneously, reducing development time by up to 50% while maintaining native performance.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </CardIcon>
              <CardTitle>Native Performance</CardTitle>
              <CardDescription>
                React Native apps compile to native code, providing the same performance and user experience as apps built with native iOS and Android development tools.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </CardIcon>
              <CardTitle>Cost-Effective Development</CardTitle>
              <CardDescription>
                Significantly reduce development and maintenance costs with a single codebase that serves both platforms, while maintaining the ability to add platform-specific features when needed.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Our Technology Stack</SectionSubtitle>
            <ContentTitle>React Native Development Ecosystem</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              We use the latest React Native technologies and tools to build robust, scalable mobile applications.
            </p>
          </CenteredContent>
          
          <TechStack>
            <TechItem>
              <h4>React Native</h4>
              <p>Core framework for cross-platform mobile development</p>
            </TechItem>
            <TechItem>
              <h4>Expo</h4>
              <p>Development platform for rapid prototyping and deployment</p>
            </TechItem>
            <TechItem>
              <h4>TypeScript</h4>
              <p>Type-safe development for better code quality and maintainability</p>
            </TechItem>
            <TechItem>
              <h4>Redux/Zustand</h4>
              <p>State management for complex application logic</p>
            </TechItem>
            <TechItem>
              <h4>React Navigation</h4>
              <p>Routing and navigation for seamless user experiences</p>
            </TechItem>
            <TechItem>
              <h4>Firebase</h4>
              <p>Backend services, authentication, and real-time databases</p>
            </TechItem>
            <TechItem>
              <h4>Native Modules</h4>
              <p>Custom native functionality when platform-specific features are needed</p>
            </TechItem>
            <TechItem>
              <h4>App Store Deployment</h4>
              <p>Complete deployment and publishing to both iOS App Store and Google Play</p>
            </TechItem>
          </TechStack>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Our Process</SectionSubtitle>
            <ContentTitle>React Native Development Process</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Our streamlined development process ensures efficient delivery of high-quality React Native applications.
            </p>
          </CenteredContent>
          
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Discovery & Planning</StepTitle>
                <StepDescription>
                  We analyze your requirements, target audience, and business goals to create a comprehensive development strategy and technical architecture for your React Native app.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>UI/UX Design</StepTitle>
                <StepDescription>
                  Our designers create intuitive, platform-appropriate interfaces that work seamlessly across iOS and Android while maintaining each platform's design guidelines.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>React Native Development</StepTitle>
                <StepDescription>
                  We build your application using React Native best practices, implementing features, integrating APIs, and ensuring optimal performance across both platforms.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Testing & Optimization</StepTitle>
                <StepDescription>
                  Comprehensive testing on real devices, performance optimization, and platform-specific adjustments to ensure your app works flawlessly on all target devices.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>5</StepNumber>
              <StepContent>
                <StepTitle>Deployment</StepTitle>
                <StepDescription>
                  We handle the complete app store submission process for both iOS App Store and Google Play Store, including compliance with all platform requirements.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>6</StepNumber>
              <StepContent>
                <StepTitle>Maintenance & Updates</StepTitle>
                <StepDescription>
                  Ongoing support, bug fixes, feature updates, and React Native version upgrades to keep your app current and performing optimally.
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessSteps>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Ready to Start?</SectionSubtitle>
            <ContentTitle>Let's Build Your React Native App</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Ready to bring your mobile app idea to life with React Native? Let's discuss your project and create a solution that works perfectly for both iOS and Android users.
            </p>
            <CTAButton href="/#contact">Start Your Project</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default ReactNativeMobileApp; 