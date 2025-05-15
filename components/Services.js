import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Link from 'next/link';

const ServicesSection = styled.section`
  padding: 6rem 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
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
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
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

const ServiceContent = styled.div`
  padding: 2rem;
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
`;

const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 0.75rem;
  }
`;

const services = [
  {
    id: "ai-powered-software",
    title: "AI Powered Software",
    description: "We integrate cutting-edge artificial intelligence to create smart applications that evolve with your business. Our AI solutions learn from data and improve over time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v5.5a4 4 0 0 0 8 0V6A4 4 0 0 0 12 2Z"></path>
        <path d="M10 16a2 2 0 1 0 4 0v-1h1a2 2 0 1 0 0-4h-1"></path>
        <path d="M8 17A4 4 0 0 1 8 13"></path>
      </svg>
    )
  },
  {
    id: "web-development",
    title: "Websites & Web Platforms",
    description: "From responsive websites to complex web applications, we build fast, secure, and scalable digital experiences using the latest web technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: "mobile-app-development",
    title: "Mobile Apps",
    description: "Create engaging mobile experiences for iOS and Android with native or cross-platform apps that deliver performance and user satisfaction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18.01"></line>
      </svg>
    )
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with custom analytics solutions that help you make informed decisions and identify new opportunities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Comprehensive BI solutions that integrate with your business systems to provide real-time dashboards, reports, and strategic insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  {
    id: "ai-ml-integration",
    title: "AI & Machine Learning Integration",
    description: "Enhance your existing systems with AI capabilities, from natural language processing to computer vision and predictive analytics.",
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
    id: "data-management",
    title: "Data Management",
    description: "Robust data management solutions that ensure data quality, security, and accessibility across your organization.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    )
  },
  {
    id: "webhosting",
    title: "Webhosting",
    description: "Reliable, secure, and scalable hosting solutions tailored to your application's specific requirements for optimal performance.",
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
    id: "process-automation",
    title: "Process Automation",
    description: "Streamline business operations by automating repetitive tasks and workflows, saving time and reducing errors.",
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
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "User-centered design solutions that create intuitive, accessible, and engaging experiences across all digital touchpoints.",
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
    id: "branding",
    title: "Branding & Visual Identity",
    description: "Comprehensive branding services that help you build a strong, cohesive visual identity that resonates with your target audience.",
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
    id: "digital-growth",
    title: "Digital Growth & Performance",
    description: "Strategies and solutions to optimize your digital presence, improve conversion rates, and maximize ROI across all online channels.",
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

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <Title>Our Services</Title>
          <Subtitle>
            We offer a comprehensive range of services to help your business succeed in the digital world
          </Subtitle>
        </SectionHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
    </ServicesSection>
  );
};

export default Services; 