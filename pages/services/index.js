import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--primary-light);
  border-radius: 0.75rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const ServiceDescription = styled.p`
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  margin-top: auto;
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 0.75rem;
  }
`;

const ApproachSection = styled.section`
  padding: 6rem 0;
  background-color: var(--light);
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ApproachContent = styled.div``;

const ApproachTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--dark);
`;

const ApproachDescription = styled.p`
  font-size: 1.125rem;
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ApproachList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 2rem;
`;

const ApproachItem = styled.li`
  color: var(--gray);
  margin-bottom: 1rem;
  line-height: 1.7;
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
`;

const ApproachImage = styled.div`
  background-color: #e2e8f0;
  border-radius: 1rem;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: var(--gray);
`;

const services = [
  {
    id: 'ai-powered-software',
    title: 'AI Powered Software',
    description: 'Custom AI solutions that evolve with your business, turning data into actionable intelligence and automating complex processes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v5.5a4 4 0 0 0 8 0V6A4 4 0 0 0 12 2Z"></path>
        <path d="M10 16a2 2 0 1 0 4 0v-1h1a2 2 0 1 0 0-4h-1"></path>
        <path d="M8 17A4 4 0 0 1 8 13"></path>
      </svg>
    )
  },
  {
    id: 'web-development',
    title: 'Websites & Web Platforms',
    description: 'Scalable, secure, and user-friendly web solutions tailored to your business needs and optimized for performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'mobile-development',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences and drive engagement across devices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18.01"></line>
      </svg>
    )
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into strategic insights that drive decision-making and uncover new opportunities for growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Comprehensive BI solutions that integrate with your systems to provide real-time dashboards and strategic insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  {
    id: 'ai-ml-integration',
    title: 'AI & ML Integration',
    description: 'Enhance your existing systems with AI capabilities, from natural language processing to predictive analytics.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="21.17" y1="8" x2="12" y2="8"></line>
        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
      </svg>
    )
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'Robust solutions ensuring data quality, security, and accessibility throughout your organization.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  {
    id: 'webhosting',
    title: 'Webhosting',
    description: 'Secure, scalable hosting solutions tailored to your specific requirements for optimal performance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Streamline operations, reduce costs, and eliminate errors by automating repetitive tasks and workflows.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.217A10 10 0 0 1 17 3.34z"></path>
        <path d="M2.5 8.5 2 12l4 1"></path>
        <path d="M19 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
        <path d="M13 16a5 5 0 1 0-5-7l5 7z"></path>
      </svg>
    )
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'User-centered design solutions creating intuitive, accessible, and engaging experiences across all digital touchpoints.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3a2 2 0 0 0-2 2"></path>
        <path d="M19 3a2 2 0 0 1 2 2"></path>
        <path d="M21 19a2 2 0 0 1-2 2"></path>
        <path d="M5 21a2 2 0 0 1-2-2"></path>
        <path d="M9 3h1"></path>
        <path d="M9 21h1"></path>
        <path d="M14 3h1"></path>
        <path d="M14 21h1"></path>
        <path d="M3 9v1"></path>
        <path d="M21 9v1"></path>
        <path d="M3 14v1"></path>
        <path d="M21 14v1"></path>
        <circle cx="12" cy="12" r="5"></circle>
      </svg>
    )
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    description: 'Build a strong, cohesive brand identity that resonates with your target audience and stands out in the market.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 3h5c.28 0 .5.22.5.5v.5h3.5l2 2v7a2 2 0 0 1-2 2H18v7.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15H5a2 2 0 0 1-2-2V6l2-2H8.5V3Z"></path>
        <path d="M11 9h2"></path>
        <path d="M9 15v5"></path>
        <path d="M14 15v6"></path>
      </svg>
    )
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth & Performance',
    description: 'Optimize your digital presence, improve conversion rates, and maximize ROI across all online channels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        <path d="m16 6 4 14"></path>
        <path d="M8 6v4"></path>
        <path d="M3 3v18"></path>
        <path d="M20 3v2"></path>
        <path d="M20 19v2"></path>
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ServicesPage() {
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
        <title>Our Services | Lucid Code Labs Software</title>
        <meta name="description" content="Explore our comprehensive range of digital services designed to help your business innovate, grow, and succeed in the digital world." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <SectionTitle>Strategic Solutions for Your Digital Success</SectionTitle>
          <SectionDescription>
            We're not just service providers—we're your strategic partners in navigating the complex digital landscape. Our tailored solutions are designed to address your unique challenges and propel your business forward.
          </SectionDescription>
        </Container>
      </HeroSection>
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id} variants={itemVariants}>
                <ServiceContent>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <Link href={`/services/${service.id}`} passHref legacyBehavior>
                    <ServiceLink>
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </ServiceLink>
                  </Link>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
      
      <ApproachSection>
        <Container>
          <ApproachGrid>
            <ApproachContent>
              <ApproachTitle>Our Consultative Approach</ApproachTitle>
              <ApproachDescription>
                We believe that successful digital solutions begin with a deep understanding of your business. Our approach centers on becoming your trusted advisor, not just a task-taker.
              </ApproachDescription>
              <ApproachList>
                <ApproachItem>We begin by thoroughly understanding your business goals, challenges, and unique market position.</ApproachItem>
                <ApproachItem>Our experts analyze your current state and identify opportunities for innovation and transformation.</ApproachItem>
                <ApproachItem>We create tailored strategies and solutions designed to achieve your specific objectives and deliver measurable outcomes.</ApproachItem>
                <ApproachItem>Throughout implementation, we maintain clear communication and keep you involved in key decisions.</ApproachItem>
                <ApproachItem>Post-launch, we provide ongoing support and strategic guidance to ensure long-term success.</ApproachItem>
              </ApproachList>
              <ApproachDescription>
                This collaborative approach ensures we deliver not just technical excellence, but true business value that drives your organization forward.
              </ApproachDescription>
            </ApproachContent>
            <ApproachImage>
              [Consultative Approach Image]
            </ApproachImage>
          </ApproachGrid>
        </Container>
      </ApproachSection>
      
      <Footer />
    </PageContainer>
  );
} 