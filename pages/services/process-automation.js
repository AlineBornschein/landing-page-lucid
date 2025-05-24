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

const ProcessAutomationPage = () => {
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
        <title>Process Automation Services | Lucid Code Labs Software</title>
        <meta name="description" content="Streamline operations, reduce costs, and eliminate errors with intelligent process automation solutions. Transform manual workflows into efficient digital processes." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/process-automation" legacyBehavior><a>Process Automation</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.217A10 10 0 0 1 17 3.34z"></path>
                <path d="M2.5 8.5 2 12l4 1"></path>
                <path d="M19 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
                <path d="M13 16a5 5 0 1 0-5-7l5 7z"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Intelligent Process Automation Solutions</SectionTitle>
            <SectionDescription>
              Transform manual, time-consuming workflows into streamlined digital processes that reduce costs, eliminate errors, and free your team to focus on high-value work.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>From Manual Processes to Intelligent Automation</ContentTitle>
              <p>
                In today's competitive business environment, operational efficiency is a critical factor for success. Yet many organizations continue to rely on manual, paper-based processes that consume valuable time, introduce errors, and prevent scaling.
              </p>
              <p>
                At Lucid Code Labs, we take a strategic approach to process automation that focuses on delivering measurable business outcomes—not just implementing technology. We begin by thoroughly understanding your existing workflows, identifying bottlenecks, and pinpointing opportunities where automation can deliver the greatest impact.
              </p>
              <p>
                Our process automation solutions range from simple task automation to complex, intelligent workflows that leverage AI for decision-making. We carefully select the right technologies for your specific needs, ensuring that solutions are not only powerful but also maintainable and adaptable to changing business requirements.
              </p>
              <p>
                By combining our technical expertise with deep business process knowledge, we create automation solutions that transform how your organization operates—reducing costs, improving accuracy, enhancing customer experiences, and enabling your team to focus on strategic initiatives rather than repetitive tasks.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Process Automation Concept Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>End-to-End Automation</CardTitle>
              <CardDescription>
                Comprehensive solutions that automate entire business processes from start to finish, eliminating manual handoffs and bottlenecks.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Intelligent Decision-Making</CardTitle>
              <CardDescription>
                AI-powered automation that can make decisions based on data, rules, and patterns, handling complex scenarios without human intervention.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Integration-First Design</CardTitle>
              <CardDescription>
                Automation solutions that seamlessly connect with your existing systems and applications, creating a unified process flow.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Process Automation Methodology Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>A Systematic Approach to Process Transformation</ContentTitle>
              <p>
                Our proven methodology ensures that automation initiatives deliver maximum business value while minimizing implementation risks:
              </p>
              <ul>
                <li><strong>Process Discovery & Analysis:</strong> We document current workflows, identify inefficiencies, and quantify the potential impact of automation.</li>
                <li><strong>Process Redesign:</strong> Before automating, we optimize processes to eliminate unnecessary steps and incorporate best practices.</li>
                <li><strong>Technology Selection:</strong> We identify the most appropriate automation technologies based on your specific requirements, existing systems, and long-term objectives.</li>
                <li><strong>Solution Design:</strong> Our team designs the automated workflow, including integration points, business rules, exception handling, and user interfaces.</li>
                <li><strong>Development & Configuration:</strong> We develop custom automation solutions or configure existing platforms to implement the designed processes.</li>
                <li><strong>Testing & Validation:</strong> Rigorous testing ensures the automated processes function correctly across all scenarios, including edge cases and exceptions.</li>
                <li><strong>Change Management:</strong> We help prepare your organization for new ways of working, providing training and support for affected team members.</li>
                <li><strong>Deployment & Monitoring:</strong> After implementation, we establish monitoring systems to track performance metrics and identify opportunities for continuous improvement.</li>
              </ul>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Process Automation Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our process automation services address a wide range of business needs, from simple task automation to complex enterprise-wide transformation:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Robotic Process Automation (RPA)</CardTitle>
              <CardDescription>
                Implementation of software robots that mimic human interactions with digital systems, automating repetitive tasks across applications without changing existing infrastructure.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Business Process Automation (BPA)</CardTitle>
              <CardDescription>
                End-to-end automation of complex business processes, integrating multiple systems and incorporating business rules and decision logic.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Workflow Automation</CardTitle>
              <CardDescription>
                Design and implementation of automated workflows that route information, assign tasks, and track progress through multi-step business processes.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Document Automation</CardTitle>
              <CardDescription>
                Intelligent capture, processing, and routing of documents with automated data extraction, validation, and integration with core business systems.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>AI-Powered Automation</CardTitle>
              <CardDescription>
                Integration of artificial intelligence technologies like machine learning, natural language processing, and computer vision to automate complex cognitive tasks.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Integration Solutions</CardTitle>
              <CardDescription>
                Creation of custom APIs and integration solutions that connect disparate systems to enable seamless process automation across your technology ecosystem.
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
              <ContentTitle>Transforming Operations Through Automation</ContentTitle>
              <p>
                Strategic process automation delivers substantial business value across multiple dimensions:
              </p>
              <ul>
                <li><strong>Operational Efficiency:</strong> Automated processes typically run 40-80% faster than manual equivalents, dramatically reducing processing times and operational costs.</li>
                <li><strong>Error Reduction:</strong> Eliminating manual data entry and human intervention reduces error rates by 30-90%, improving data quality and customer satisfaction.</li>
                <li><strong>Scalability:</strong> Automated processes can easily scale to handle volume increases without proportional increases in cost or resources, enabling business growth.</li>
                <li><strong>Consistency:</strong> Processes execute the same way every time, ensuring consistent outcomes, regulatory compliance, and predictable service levels.</li>
                <li><strong>Employee Satisfaction:</strong> Automation of routine, repetitive tasks frees employees to focus on more engaging, high-value work that leverages their unique human capabilities.</li>
                <li><strong>Enhanced Analytics:</strong> Automated processes generate rich data that provides visibility into operations, enabling ongoing optimization and data-driven decision making.</li>
              </ul>
              <p>
                Our clients typically achieve ROI within 6-12 months of implementing process automation initiatives, with 3-5x returns over three years. Beyond these quantifiable benefits, automation creates organizational capabilities that drive innovation and long-term market leadership.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Process Automation Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Business Processes?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our process automation solutions can help your organization reduce costs, improve efficiency, and create exceptional experiences for both customers and employees.
            </p>
            <CTAButton href="/#contact">Schedule an Automation Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default ProcessAutomationPage; 