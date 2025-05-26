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

const BusinessIntelligencePage = () => {
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
        <title>Business Intelligence Solutions | Lucid Code Labs Software</title>
        <meta name="description" content="Transform your business data into powerful insights with our comprehensive business intelligence solutions. Real-time dashboards, automated reporting, and actionable insights." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/business-intelligence" legacyBehavior><a>Business Intelligence</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>Business Intelligence for Data-Driven Decision Making</SectionTitle>
            <SectionDescription>
              Empower your organization with real-time insights, interactive dashboards, and automated reporting systems that transform complex data into clear business opportunities.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Beyond Data Visualization: Intelligence That Drives Action</ContentTitle>
              <p>
                In today's complex business environment, organizations are overwhelmed with data but struggling to extract meaningful insights. Traditional reporting approaches are often slow, fragmented, and fail to deliver the actionable intelligence needed for strategic decisions.
              </p>
              <p>
                At Lucid Code Labs, we take a holistic approach to business intelligence that focuses on outcomes rather than just outputs. Our solutions are designed not only to visualize data but to transform it into a strategic asset that drives measurable business value.
              </p>
              <p>
                We combine deep technical expertise with business acumen to build BI systems that serve as the single source of truth across your organization. Our consultative approach ensures that your BI solution aligns perfectly with your business goals, data literacy levels, and decision-making processes.
              </p>
              <p>
                Whether you need executive dashboards for strategic decisions, operational dashboards for day-to-day management, or self-service analytics for team empowerment, our BI solutions deliver the right insights to the right people at the right time.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Business Intelligence Overview Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Real-time Dashboards</CardTitle>
              <CardDescription>
                Interactive, dynamic visualizations that present key metrics and KPIs in real-time, enabling immediate insights and faster decision-making across your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Automated Reporting</CardTitle>
              <CardDescription>
                Scheduled, customizable reports that deliver critical business information to stakeholders automatically, eliminating manual data collection and processing.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Self-Service Analytics</CardTitle>
              <CardDescription>
                Intuitive tools that empower business users to explore data, create visualizations, and answer their own questions without relying on technical teams.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [BI Implementation Framework Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>A Strategic Framework for Business Intelligence Success</ContentTitle>
              <p>
                Our proven methodology for business intelligence implementation ensures high user adoption, maximum ROI, and long-term success:
              </p>
              <ul>
                <li><strong>Business Discovery:</strong> We begin by understanding your strategic objectives, decision-making processes, and key questions that drive your business forward.</li>
                <li><strong>Data Assessment:</strong> We evaluate your existing data sources, quality, and accessibility to create an implementation plan that addresses data integration challenges.</li>
                <li><strong>BI Strategy:</strong> We develop a roadmap aligning your BI initiative with business outcomes, defining key metrics, user personas, and implementation priorities.</li>
                <li><strong>Data Architecture:</strong> We design a scalable data architecture that integrates multiple sources into a unified, reliable foundation for all analytics.</li>
                <li><strong>Dashboard & Report Design:</strong> We create intuitive visualizations that tell compelling data stories, focusing on user experience and actionable insights.</li>
                <li><strong>Implementation & Integration:</strong> We build and deploy your BI solution, integrating with existing systems and ensuring seamless data workflows.</li>
                <li><strong>User Enablement:</strong> We provide training and documentation to ensure users can effectively leverage BI tools to drive decision-making.</li>
                <li><strong>Continuous Improvement:</strong> We establish processes for ongoing refinement based on user feedback, changing business needs, and emerging analytics capabilities.</li>
              </ul>
              <p>
                Throughout this process, we focus on delivering quick wins while building toward a comprehensive BI ecosystem that evolves with your organization.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Business Intelligence Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our business intelligence offerings span the entire analytics lifecycle, from data strategy to implementation and optimization:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Executive Dashboards</CardTitle>
              <CardDescription>
                Strategic dashboards that provide leadership with high-level KPIs, trend analysis, and performance metrics to guide strategic decision-making and monitor company health.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Operational Intelligence</CardTitle>
              <CardDescription>
                Real-time monitoring dashboards that provide operational teams with visibility into daily performance, resource utilization, and process efficiency.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Sales & Marketing Analytics</CardTitle>
              <CardDescription>
                Comprehensive dashboards that track campaign performance, sales pipeline, customer acquisition costs, and other critical metrics for revenue generation.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Financial Intelligence</CardTitle>
              <CardDescription>
                Financial analytics dashboards that provide visibility into profitability, cash flow, budget variance, and other key financial indicators for fiscal management.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Customer Analytics</CardTitle>
              <CardDescription>
                Customer-focused dashboards that reveal behavior patterns, satisfaction metrics, segmentation analysis, and lifetime value to improve customer experience.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>BI Platform Implementation</CardTitle>
              <CardDescription>
                End-to-end implementation of leading BI platforms like Power BI, Tableau, Looker, or custom solutions built on modern data stack technologies.
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
              <ContentTitle>The Value of Strategic Business Intelligence</ContentTitle>
              <p>
                Investing in business intelligence delivers substantial ROI across your organization. Our clients consistently report significant improvements in key areas:
              </p>
              <ul>
                <li><strong>Faster Decision Making:</strong> Reduce decision cycles by 60-80% with real-time access to critical business information, enabling agile responses to market changes.</li>
                <li><strong>Improved Operational Efficiency:</strong> Identify process bottlenecks and resource inefficiencies, typically resulting in 15-25% operational cost savings.</li>
                <li><strong>Revenue Growth:</strong> Discover untapped sales opportunities, optimize pricing, and improve customer targeting, leading to 10-20% revenue increases.</li>
                <li><strong>Enhanced Collaboration:</strong> Create a single source of truth that aligns teams around common goals and shared insights, breaking down organizational silos.</li>
                <li><strong>Reduced Reporting Overhead:</strong> Automate manual reporting processes, saving 20-30 hours per month per department and redirecting resources to higher-value activities.</li>
                <li><strong>Proactive Problem Solving:</strong> Identify issues before they impact the business through anomaly detection and trend analysis, reducing risk and improving service levels.</li>
                <li><strong>Data-Driven Culture:</strong> Foster an organization-wide culture of evidence-based decision making that improves business outcomes at all levels.</li>
              </ul>
              <p>
                These benefits demonstrate why leading organizations view business intelligence not as a cost center but as a strategic investment that drives competitive advantage in today's data-rich environment.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Business Impact Visualization]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Data into a Strategic Asset?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our business intelligence solutions can help you achieve your business goals and deliver measurable results. Our team will work with you to create a tailored approach.
            </p>
            <CTAButton href="/#contact">Schedule a BI Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default BusinessIntelligencePage; 