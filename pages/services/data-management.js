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

const ImagePlaceholder = styled.div`
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
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const DataManagementPage = () => {
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
        <title>Data Management Services | Lucid Code Labs Software</title>
        <meta name="description" content="Strategic data management solutions to optimize your data ecosystem. We implement secure, scalable, and efficient data infrastructure to turn your data into a valuable asset." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/data-management" legacyBehavior><a>Data Management</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Strategic Data Management Solutions</SectionTitle>
            <SectionDescription>
              Transform your organization's data into a strategic asset with comprehensive data management solutions that ensure quality, security, and accessibility across your enterprise.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Beyond Storage: Data as a Strategic Asset</ContentTitle>
              <p>
                In today's data-driven business landscape, organizations are dealing with exponentially growing volumes of data from diverse sources. The challenge lies not just in storing this data, but in managing it as a strategic asset that delivers tangible business value.
              </p>
              <p>
                At Lucid Code Labs, we take a holistic approach to data management that focuses on turning your data ecosystem into a competitive advantage. We design comprehensive data management strategies that address the entire data lifecycle—from collection and storage to governance, security, and utilization.
              </p>
              <p>
                Our methodology begins with understanding your business objectives and data challenges. We then develop tailored solutions that establish a solid foundation for all your data initiatives, whether you're looking to enhance analytics capabilities, ensure regulatory compliance, or improve operational efficiency.
              </p>
              <p>
                By implementing robust data management practices, we help you transform scattered data resources into a cohesive, reliable, and accessible ecosystem that empowers better decision-making and drives innovation across your organization.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Data Management Strategy Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Data Architecture</CardTitle>
              <CardDescription>
                Design scalable, flexible data architectures that integrate diverse data sources and support your current and future business needs.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Data Governance</CardTitle>
              <CardDescription>
                Establish frameworks that ensure data quality, compliance, and security while enabling appropriate access across your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Data Integration</CardTitle>
              <CardDescription>
                Create seamless data flows between systems, applications, and departments for a unified view of your business information.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Data Management Process Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>A Comprehensive Approach to Data Management</ContentTitle>
              <p>
                Our proven data management methodology ensures that your organization establishes a robust foundation for all data-driven initiatives:
              </p>
              <ul>
                <li><strong>Assessment & Strategy:</strong> We evaluate your current data landscape, business objectives, and challenges to develop a tailored data management strategy.</li>
                <li><strong>Data Architecture Design:</strong> We create a blueprint for your data ecosystem that addresses storage, integration, and accessibility requirements.</li>
                <li><strong>Governance Framework:</strong> We establish policies, processes, and roles for data ownership, quality management, and compliance.</li>
                <li><strong>Data Quality Management:</strong> We implement systems to ensure data accuracy, completeness, consistency, and reliability across your organization.</li>
                <li><strong>Security & Privacy:</strong> We design and implement robust security measures that protect sensitive data while ensuring compliance with regulations like GDPR, CCPA, and industry-specific requirements.</li>
                <li><strong>Master Data Management:</strong> We create single sources of truth for critical business entities like customers, products, and suppliers.</li>
                <li><strong>Data Integration:</strong> We build pipelines that connect diverse data sources and systems to eliminate silos and provide unified access to information.</li>
                <li><strong>Metadata Management:</strong> We establish systems to document and catalog your data assets, making them discoverable and understandable across the organization.</li>
              </ul>
              <p>
                Throughout this process, we focus on creating data management solutions that balance governance needs with accessibility, ensuring that your data is both well-managed and available to drive business value.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Data Management Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our data management services address every aspect of your data ecosystem, from strategy to implementation and optimization:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Data Strategy Consulting</CardTitle>
              <CardDescription>
                Strategic guidance on how to leverage your data assets to achieve business objectives, including roadmap development and technology selection.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Data Architecture Design</CardTitle>
              <CardDescription>
                Design of scalable data architectures that support diverse data types, volumes, and usage patterns while enabling future growth.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Database Design & Optimization</CardTitle>
              <CardDescription>
                Expert design, implementation, and optimization of relational and NoSQL databases for performance, scalability, and reliability.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Data Warehousing</CardTitle>
              <CardDescription>
                Implementation of modern data warehousing solutions that consolidate data from multiple sources for reporting and analytics.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Master Data Management</CardTitle>
              <CardDescription>
                Creation of authoritative, single sources of truth for critical business data entities to ensure consistency across systems.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Data Integration & ETL</CardTitle>
              <CardDescription>
                Development of data pipelines and integration solutions that connect disparate systems and enable seamless data flow across your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CardTitle>Data Governance Implementation</CardTitle>
              <CardDescription>
                Establishment of comprehensive governance frameworks including policies, procedures, roles, and tools for effective data management.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CardTitle>Data Quality Management</CardTitle>
              <CardDescription>
                Implementation of processes and tools to monitor, measure, and improve the quality of your data assets across the enterprise.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CardTitle>Data Security & Compliance</CardTitle>
              <CardDescription>
                Design and implementation of robust security measures and compliance frameworks to protect sensitive data and meet regulatory requirements.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Business Impact</SectionSubtitle>
              <ContentTitle>The Value of Strategic Data Management</ContentTitle>
              <p>
                Investing in robust data management delivers substantial business value that extends across your entire organization:
              </p>
              <ul>
                <li><strong>Enhanced Decision Making:</strong> Provide stakeholders with access to reliable, high-quality data that leads to more confident and effective business decisions.</li>
                <li><strong>Operational Efficiency:</strong> Streamline data-related processes, reducing the time and resources spent on finding, validating, and reconciling information.</li>
                <li><strong>Improved Analytics Capabilities:</strong> Create a solid foundation for business intelligence and advanced analytics initiatives by ensuring data quality and accessibility.</li>
                <li><strong>Regulatory Compliance:</strong> Maintain compliance with data privacy regulations and industry standards, reducing legal risks and potential penalties.</li>
                <li><strong>Enhanced Data Security:</strong> Protect valuable and sensitive information from unauthorized access, breaches, and other security threats.</li>
                <li><strong>Data Monetization:</strong> Identify opportunities to create new revenue streams or business models by leveraging your data assets more effectively.</li>
                <li><strong>Reduced Costs:</strong> Eliminate redundant data storage, inefficient processes, and the high costs associated with poor data quality.</li>
                <li><strong>Business Agility:</strong> Enable faster responses to market changes and opportunities by providing quick access to reliable information.</li>
              </ul>
              <p>
                Organizations with mature data management practices typically see 15-25% improvements in operational efficiency, significant reductions in compliance-related costs, and enhanced ability to leverage data for competitive advantage. Our clients consistently report that structured data management is a foundational element for their digital transformation and innovation initiatives.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Data Management Business Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Data into a Strategic Asset?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our data management solutions can help you achieve your business goals. Our team will work with you to understand your specific challenges and create a tailored approach.
            </p>
            <CTAButton href="/#contact">Schedule a Data Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default DataManagementPage; 