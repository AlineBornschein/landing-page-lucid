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

const DataAnalyticsPage = () => {
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
        <title>Data Analytics Services | TechNova</title>
        <meta name="description" content="Turn raw data into actionable insights with our data analytics solutions. We help you make informed decisions and identify new business opportunities." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/data-analytics" legacyBehavior><a>Data Analytics</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>Data-Driven Insights for Strategic Decision Making</SectionTitle>
            <SectionDescription>
              Transform your raw data into actionable intelligence that drives business growth, operational efficiency, and competitive advantage in today's data-rich environment.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Beyond Reports: Actionable Intelligence</ContentTitle>
              <p>
                In today's business landscape, data is abundant but insights are scarce. Many organizations collect vast amounts of data but struggle to transform it into meaningful action that drives business value.
              </p>
              <p>
                At TechNova, we take a business-first approach to data analytics. We begin by understanding your strategic objectives, key performance indicators, and decision-making challenges. This allows us to design analytics solutions that deliver relevant insights directly aligned with your business goals.
              </p>
              <p>
                Our consultative process combines deep technical expertise with business acumen. We help you identify which questions to ask of your data, what metrics truly matter to your organization, and how to implement analytics in a way that drives measurable outcomes rather than just producing reports.
              </p>
              <p>
                Whether you're looking to understand customer behavior, optimize operational efficiency, or identify new market opportunities, our data analytics solutions transform complex data into clear, actionable insights that empower confident decision-making.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Data Analytics Strategy Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Descriptive Analytics</CardTitle>
              <CardDescription>
                Understand what has happened in your business through comprehensive data visualization, dashboards, and reports that make complex data easy to comprehend and act upon.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Diagnostic Analytics</CardTitle>
              <CardDescription>
                Discover why events occurred through root cause analysis and correlation studies that identify the drivers behind your business outcomes and performance trends.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Predictive Analytics</CardTitle>
              <CardDescription>
                Anticipate future outcomes with statistical models and machine learning algorithms that identify patterns in your data to forecast trends and future scenarios.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Data Analytics Implementation Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>How We Transform Data into Value</ContentTitle>
              <p>
                Our data analytics methodology follows a structured yet flexible approach designed to deliver quick wins while building toward long-term analytics maturity.
              </p>
              <ul>
                <li><strong>Discovery & Assessment:</strong> We evaluate your current data ecosystem, business objectives, and analytics capabilities to identify opportunities and challenges.</li>
                <li><strong>Data Strategy:</strong> We develop a roadmap that outlines how to leverage your data assets to achieve specific business outcomes, including data governance, technology selection, and analytics prioritization.</li>
                <li><strong>Data Architecture:</strong> We design or optimize your data infrastructure to ensure data quality, accessibility, and security—creating a solid foundation for all analytics initiatives.</li>
                <li><strong>Analytics Development:</strong> We build custom analytics solutions, from interactive dashboards to complex predictive models, that address your specific business questions.</li>
                <li><strong>Insight Activation:</strong> We integrate analytics into your business processes and decision-making workflows to ensure insights drive tangible actions.</li>
                <li><strong>Continuous Improvement:</strong> We monitor performance, gather feedback, and refine analytics solutions to deliver increasing value over time.</li>
              </ul>
              <p>
                Throughout this process, we emphasize knowledge transfer and capability building, ensuring your team develops the skills to leverage analytics tools and insights effectively.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Data Analytics Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our data analytics services can be tailored to address specific challenges or delivered as end-to-end solutions:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Business Intelligence</CardTitle>
              <CardDescription>
                Interactive dashboards and reporting solutions that provide real-time visibility into key performance indicators and business metrics across your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Customer Analytics</CardTitle>
              <CardDescription>
                Deep insights into customer behavior, preferences, and journeys that enable personalized experiences, targeted marketing, and improved customer satisfaction.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Operational Analytics</CardTitle>
              <CardDescription>
                Performance analysis and optimization solutions that identify inefficiencies, reduce costs, and streamline processes across your business operations.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Predictive Modeling</CardTitle>
              <CardDescription>
                Advanced statistical models and machine learning algorithms that forecast sales, demand, customer churn, and other critical business outcomes.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Data Visualization</CardTitle>
              <CardDescription>
                Intuitive visual representations of complex data that make insights accessible and actionable for stakeholders across your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Analytics Training & Enablement</CardTitle>
              <CardDescription>
                Customized training programs and workshops that build data literacy and analytical capabilities within your organization.
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
              <ContentTitle>The Value of Data-Driven Decision Making</ContentTitle>
              <p>
                Investing in data analytics delivers substantial business value that extends across your entire organization. Our clients consistently report significant improvements in key performance indicators:
              </p>
              <ul>
                <li><strong>Increased Revenue:</strong> Identify new opportunities, optimize pricing, and improve cross-selling through customer insights, typically resulting in revenue increases of 10-20%.</li>
                <li><strong>Cost Reduction:</strong> Pinpoint inefficiencies, reduce waste, and optimize resource allocation, often delivering cost savings of 15-25% in targeted areas.</li>
                <li><strong>Improved Customer Experience:</strong> Personalize interactions and anticipate customer needs based on behavioral insights, leading to customer satisfaction increases of 20-30%.</li>
                <li><strong>Faster Decision Making:</strong> Reduce decision cycles from weeks to days or hours with real-time dashboards and automated analytics, accelerating time-to-market for new initiatives.</li>
                <li><strong>Risk Mitigation:</strong> Identify potential issues before they impact the business through early warning indicators and anomaly detection, reducing operational and financial risks.</li>
                <li><strong>Competitive Advantage:</strong> Develop unique insights that competitors don't have, creating sustainable differentiation in the marketplace.</li>
              </ul>
              <p>
                These outcomes demonstrate why forward-thinking companies view data analytics not as a cost center but as a strategic investment with measurable returns across the business.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Data Analytics Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Data into Business Value?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our data analytics solutions can help you achieve your business goals. Our team will work with you to understand your specific challenges and create a tailored solution.
            </p>
            <CTAButton href="/contact">Schedule a Data Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default DataAnalyticsPage; 