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

const CloudServiceTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--dark)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--light-gray)'};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'var(--light)'};
  }
`;

const TabContent = styled(motion.div)`
  margin-top: 2rem;
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

const CloudComputingPage = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('infrastructure');
  
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
        <title>Cloud Computing Services | TechNova</title>
        <meta name="description" content="Transform your business with our enterprise cloud computing solutions. Secure, scalable infrastructure, platform services, and cloud-native applications." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/cloud-computing" legacyBehavior><a>Cloud Computing</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Enterprise Cloud Computing Solutions</SectionTitle>
            <SectionDescription>
              Accelerate innovation, enhance scalability, and optimize costs with our comprehensive cloud computing services tailored to your business needs.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Strategic Cloud Transformation</ContentTitle>
              <p>
                The cloud is not just a technology shift—it's a business transformation enabler. Many organizations approach cloud adoption as a tactical IT project, missing the larger strategic opportunity to reimagine their operations and customer experiences.
              </p>
              <p>
                At TechNova, we take a business-first approach to cloud computing. We help you develop a comprehensive cloud strategy that aligns with your business goals, whether that's accelerating innovation, improving operational efficiency, enhancing security, or optimizing costs.
              </p>
              <p>
                Our cloud consulting and implementation services span the entire cloud journey—from initial assessment and strategy development to migration, optimization, and ongoing management. We work with all major cloud providers (AWS, Microsoft Azure, Google Cloud) while maintaining a vendor-neutral approach that puts your business needs first.
              </p>
              <p>
                With our expertise in cloud architecture, security, DevOps, and cloud-native development, we help you unlock the full potential of cloud computing while navigating its complexities with confidence.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Cloud Strategy Diagram]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Business Agility</CardTitle>
              <CardDescription>
                Rapidly adapt to changing market conditions with on-demand resources, elastic scalability, and global reach that traditional infrastructure cannot match.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Cost Optimization</CardTitle>
              <CardDescription>
                Transform capital expenditure into operational costs, pay only for what you use, and benefit from economies of scale that drastically reduce infrastructure expenses.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Innovation Acceleration</CardTitle>
              <CardDescription>
                Access cutting-edge technologies like AI, machine learning, IoT, and serverless computing without massive upfront investment or specialized expertise.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Cloud Migration Framework]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>Proven Cloud Transformation Framework</ContentTitle>
              <p>
                Our cloud transformation methodology ensures a smooth, secure, and value-driven journey to the cloud:
              </p>
              <ul>
                <li><strong>Assessment & Discovery:</strong> We analyze your existing systems, applications, and infrastructure to identify migration candidates, dependencies, and potential challenges.</li>
                <li><strong>Strategy & Roadmap:</strong> We develop a comprehensive cloud strategy and migration roadmap aligned with your business objectives, compliance requirements, and technical constraints.</li>
                <li><strong>Architecture & Design:</strong> We design future-state cloud architecture that optimizes for performance, security, scalability, and cost-efficiency.</li>
                <li><strong>Migration & Modernization:</strong> We execute the migration using the appropriate strategy for each workload—rehost, replatform, refactor, or replace—while minimizing business disruption.</li>
                <li><strong>Security & Governance:</strong> We implement robust security controls, identity management, and governance frameworks to protect your data and ensure compliance.</li>
                <li><strong>Operations & Optimization:</strong> We establish cloud operations processes, implement monitoring and automation, and continuously optimize for performance and cost.</li>
                <li><strong>Innovation Enablement:</strong> We help you leverage cloud-native services and modern development practices to accelerate innovation and deliver new capabilities.</li>
              </ul>
              <p>
                This methodical approach minimizes risk while maximizing the business value you derive from your cloud investments.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Our Services</SectionSubtitle>
            <ContentTitle>Comprehensive Cloud Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our cloud computing services span the entire spectrum of cloud capabilities—from infrastructure and platform services to application modernization and DevOps transformation.
            </p>
          </CenteredContent>
          
          <CloudServiceTabs>
            <TabButton active={activeTab === 'infrastructure'} onClick={() => setActiveTab('infrastructure')}>
              Infrastructure Services
            </TabButton>
            <TabButton active={activeTab === 'platform'} onClick={() => setActiveTab('platform')}>
              Platform Services
            </TabButton>
            <TabButton active={activeTab === 'application'} onClick={() => setActiveTab('application')}>
              Application Services
            </TabButton>
            <TabButton active={activeTab === 'management'} onClick={() => setActiveTab('management')}>
              Management Services
            </TabButton>
          </CloudServiceTabs>
          
          {activeTab === 'infrastructure' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Cloud Infrastructure Services</ContentTitle>
                  <p>
                    Build a resilient, secure, and scalable foundation for your applications and data with our cloud infrastructure services:
                  </p>
                  <ul>
                    <li><strong>Infrastructure Assessment & Design:</strong> Evaluate your current infrastructure and design an optimal cloud architecture aligned with your business needs.</li>
                    <li><strong>Infrastructure Migration:</strong> Migrate physical and virtual servers, storage, and networking to the cloud with minimal disruption.</li>
                    <li><strong>Hybrid & Multi-Cloud Solutions:</strong> Design and implement hybrid or multi-cloud architectures that combine the best of public cloud, private cloud, and on-premises infrastructure.</li>
                    <li><strong>Cloud Network Design:</strong> Architect secure, high-performance networking spanning cloud environments, data centers, and branch offices.</li>
                    <li><strong>Backup & Disaster Recovery:</strong> Implement robust backup and disaster recovery solutions leveraging cloud capabilities.</li>
                    <li><strong>High-Performance Computing:</strong> Design and implement cloud-based HPC solutions for computationally intensive workloads.</li>
                  </ul>
                </ContentText>
                <ImagePlaceholder>
                  [Cloud Infrastructure Diagram]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
          )}
          
          {activeTab === 'platform' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Cloud Platform Services</ContentTitle>
                  <p>
                    Accelerate application development and deployment with our cloud platform services:
                  </p>
                  <ul>
                    <li><strong>Container Orchestration:</strong> Design, implement, and manage containerized applications using Kubernetes and other orchestration platforms.</li>
                    <li><strong>Serverless Architectures:</strong> Build event-driven, scalable applications using serverless computing frameworks.</li>
                    <li><strong>Database Modernization:</strong> Migrate and modernize databases to cloud-native database services for improved performance, scalability, and cost-efficiency.</li>
                    <li><strong>API Management:</strong> Design, implement, and manage APIs that connect applications, data, and services across your hybrid environment.</li>
                    <li><strong>Integration Services:</strong> Connect cloud and on-premises applications, data sources, and business processes.</li>
                    <li><strong>Messaging & Event Streaming:</strong> Implement message queues and event streaming platforms for reliable, scalable communication between services.</li>
                  </ul>
                </ContentText>
                <ImagePlaceholder>
                  [Cloud Platform Architecture]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
          )}
          
          {activeTab === 'application' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Cloud Application Services</ContentTitle>
                  <p>
                    Modernize your applications to fully leverage cloud capabilities:
                  </p>
                  <ul>
                    <li><strong>Application Assessment:</strong> Analyze your application portfolio to determine the optimal modernization approach for each application.</li>
                    <li><strong>Lift & Shift Migration:</strong> Rehost applications in the cloud with minimal code changes.</li>
                    <li><strong>Application Modernization:</strong> Refactor, re-architect, or rebuild applications to leverage cloud-native capabilities.</li>
                    <li><strong>Cloud-Native Development:</strong> Build new applications using microservices, containers, and serverless architectures.</li>
                    <li><strong>SaaS Integration:</strong> Connect your applications with SaaS platforms and extend their functionality.</li>
                    <li><strong>DevOps Transformation:</strong> Implement CI/CD pipelines, infrastructure as code, and other DevOps practices to accelerate software delivery.</li>
                  </ul>
                </ContentText>
                <ImagePlaceholder>
                  [Cloud-Native Application Architecture]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
          )}
          
          {activeTab === 'management' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Cloud Management Services</ContentTitle>
                  <p>
                    Optimize and govern your cloud environment for maximum value:
                  </p>
                  <ul>
                    <li><strong>Cloud Cost Optimization:</strong> Monitor and optimize cloud spending through right-sizing, reserved instances, spot instances, and other cost-saving strategies.</li>
                    <li><strong>Cloud Security & Compliance:</strong> Implement comprehensive security controls, identity management, and compliance frameworks.</li>
                    <li><strong>Performance Monitoring:</strong> Implement observability solutions that provide insights into application and infrastructure performance.</li>
                    <li><strong>Automation & Orchestration:</strong> Automate routine tasks and orchestrate complex workflows to improve efficiency and reduce manual errors.</li>
                    <li><strong>Site Reliability Engineering:</strong> Implement SRE practices to ensure system reliability, availability, and performance.</li>
                    <li><strong>Cloud Center of Excellence:</strong> Establish a CoE that drives cloud adoption, governance, and best practices across your organization.</li>
                  </ul>
                </ContentText>
                <ImagePlaceholder>
                  [Cloud Management Dashboard]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
          )}
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Business Impact</SectionSubtitle>
              <ContentTitle>Measurable Results from Cloud Transformation</ContentTitle>
              <p>
                Our clients consistently achieve significant business outcomes through their cloud initiatives:
              </p>
              <ul>
                <li><strong>30-50% Infrastructure Cost Reduction:</strong> Through optimized cloud architecture, right-sizing, and elastic scaling that matches resource consumption with demand.</li>
                <li><strong>40-60% Faster Time-to-Market:</strong> By leveraging cloud-native development approaches, automation, and on-demand resource provisioning.</li>
                <li><strong>99.99% Application Availability:</strong> Through resilient architecture, automated failover, and multi-region deployments.</li>
                <li><strong>70% Reduction in Management Overhead:</strong> By eliminating hardware maintenance and leveraging managed services and automation.</li>
                <li><strong>50-70% Improvement in Developer Productivity:</strong> Through standardized environments, self-service capabilities, and automated CI/CD pipelines.</li>
                <li><strong>Enhanced Security Posture:</strong> With consistent security controls, automated compliance checks, and advanced threat protection.</li>
                <li><strong>Unlimited Scalability:</strong> Supporting business growth and handling seasonal peaks without capacity planning headaches.</li>
              </ul>
              <p>
                These benefits translate into tangible business advantages: faster innovation, improved customer experiences, greater business agility, and sustainable competitive advantage.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Cloud ROI Dashboard]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Accelerate Your Cloud Journey?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Whether you're just starting your cloud journey or looking to optimize an existing cloud environment, our experts can help you achieve your business objectives while maximizing the value of your cloud investments.
            </p>
            <CTAButton href="/contact">Schedule a Cloud Strategy Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default CloudComputingPage; 