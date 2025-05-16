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
  /* background-color: var(--primary-light); // Removed background for emoji */
  border-radius: 0.75rem;
  /* color: var(--primary); // Color not needed for emoji */
  margin-bottom: 1.5rem;
  font-size: 2.5rem; /* Adjusted font size for emojis */
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
    icon: "🧠"
  },
  {
    id: "web-development",
    title: "Websites & Web Platforms",
    description: "From responsive websites to complex web applications, we build fast, secure, and scalable digital experiences using the latest web technologies.",
    icon: "🖥️"
  },
  {
    id: "mobile-app-development",
    title: "Mobile Apps",
    description: "Create engaging mobile experiences for iOS and Android with native or cross-platform apps that deliver performance and user satisfaction.",
    icon: "📱"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with custom analytics solutions that help you make informed decisions and identify new opportunities.",
    icon: "📊"
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Comprehensive BI solutions that integrate with your business systems to provide real-time dashboards, reports, and strategic insights.",
    icon: "📈"
  },
  {
    id: "ai-ml-integration",
    title: "AI & Machine Learning Integration",
    description: "Enhance your existing systems with AI capabilities, from natural language processing to computer vision and predictive analytics.",
    icon: "🤖"
  },
  {
    id: "data-management",
    title: "Data Management",
    description: "Robust data management solutions that ensure data quality, security, and accessibility across your organization.",
    icon: "💾"
  },
  {
    id: "webhosting",
    title: "Webhosting",
    description: "Reliable, secure, and scalable hosting solutions tailored to your application's specific requirements for optimal performance.",
    icon: "🌐"
  },
  {
    id: "process-automation",
    title: "Process Automation",
    description: "Streamline business operations by automating repetitive tasks and workflows, saving time and reducing errors.",
    icon: "⚙️"
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "User-centered design solutions that create intuitive, accessible, and engaging experiences across all digital touchpoints.",
    icon: "🎨"
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    description: "Comprehensive branding services that help you build a strong, cohesive visual identity that resonates with your target audience.",
    icon: "🎭"
  },
  {
    id: "digital-growth",
    title: "Digital Growth & Performance",
    description: "Strategies and solutions to optimize your digital presence, improve conversion rates, and maximize ROI across all online channels.",
    icon: "📈"
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