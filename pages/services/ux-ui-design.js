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

// Process Steps Component
const ProcessSteps = styled.div`
  margin: 3rem 0;
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: 1.5rem;
  
  @media (max-width: 640px) {
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--dark);
`;

const StepDescription = styled.p`
  color: var(--gray);
  line-height: 1.7;
`;

const UXUIServicePage = () => {
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
        <title>UX/UI Design Solutions | TechNova</title>
        <meta name="description" content="Strategic UX/UI design services that transform user experiences. We create intuitive, engaging digital interfaces that drive business success and user satisfaction." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/ux-ui-design" legacyBehavior><a>UX/UI Design</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>Human-Centered Design for Business Impact</SectionTitle>
            <SectionDescription>
              We design digital experiences that not only delight users but drive meaningful business outcomes—transforming how people interact with your brand through research-backed, strategic design solutions.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Where User Needs Meet Business Objectives</ContentTitle>
              <p>
                Exceptional design isn't just about aesthetics—it's about creating experiences that solve real problems for both users and businesses. At TechNova, we take a strategic approach to UX/UI design that begins with a deep understanding of your business objectives.
              </p>
              <p>
                We believe the most successful digital products exist at the intersection of user needs, business goals, and technological feasibility. Our consultative process is designed to uncover insights in each of these areas, ensuring that every design decision contributes to your strategic objectives.
              </p>
              <p>
                Rather than treating design as a subjective creative exercise, we approach it as a problem-solving discipline guided by research, user insights, and measurable outcomes. This evidence-based methodology ensures that your investment in design drives tangible business results.
              </p>
              <p>
                Our team works as strategic partners, helping you translate business challenges into design opportunities and user-centered solutions that create competitive advantage in your market.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Strategic Design Thinking Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>User Research & Insights</CardTitle>
              <CardDescription>
                We uncover deep insights about your users' needs, behaviors, and pain points through contextual research, interviews, and usability testing.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Experience Strategy</CardTitle>
              <CardDescription>
                We align user experience with your business strategy, creating a cohesive plan that guides design decisions toward your key performance indicators.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Interface Design</CardTitle>
              <CardDescription>
                We create intuitive, visually compelling interfaces that express your brand identity while making complex tasks feel simple and natural for users.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Our Process</SectionSubtitle>
            <ContentTitle>A Structured Approach to Design Excellence</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Our human-centered design process is refined through years of experience and hundreds of successful projects, ensuring consistent results for our clients.
            </p>
          </CenteredContent>
          
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Discovery & Research</StepTitle>
                <StepDescription>
                  We begin by understanding your business objectives, competitive landscape, and user needs through stakeholder interviews, market analysis, and user research. This foundation ensures that design decisions are informed by strategic insights rather than assumptions.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Strategy & Definition</StepTitle>
                <StepDescription>
                  With research insights in hand, we develop a clear UX strategy that bridges user needs and business goals. We create user personas, journey maps, and information architecture to define the optimal user experience and establish metrics for success.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Wireframing & Prototyping</StepTitle>
                <StepDescription>
                  We design the structural elements of your interface through iterative wireframing, focusing on user flows and interaction patterns. Interactive prototypes allow stakeholders to experience and validate concepts before visual design begins.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Visual Design</StepTitle>
                <StepDescription>
                  Our designers craft a polished visual language that embodies your brand while enhancing usability. We create comprehensive UI systems with consistent components, ensuring scalability and maintainability across your digital ecosystem.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>5</StepNumber>
              <StepContent>
                <StepTitle>Validation & Iteration</StepTitle>
                <StepDescription>
                  We validate design solutions through usability testing and stakeholder feedback, identifying opportunities for improvement. This iterative approach ensures that the final product meets both user needs and business requirements.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>6</StepNumber>
              <StepContent>
                <StepTitle>Implementation Support</StepTitle>
                <StepDescription>
                  We collaborate closely with development teams to ensure design fidelity during implementation, providing detailed specifications, assets, and guidance to bring your vision to life exactly as designed.
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessSteps>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Design Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our UX/UI design services can be tailored to address specific challenges or delivered as a comprehensive end-to-end solution:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>UX Research & Strategy</CardTitle>
              <CardDescription>
                In-depth user research, competitive analysis, and experience strategy that establishes a solid foundation for design decisions aligned with business goals.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Digital Product Design</CardTitle>
              <CardDescription>
                End-to-end design for web and mobile applications, from concept through wireframing, prototyping, and polished UI that delivers exceptional user experiences.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Website Design & Optimization</CardTitle>
              <CardDescription>
                Conversion-focused website design that balances brand expression with user needs, creating intuitive pathways that guide visitors toward business objectives.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Design System Development</CardTitle>
              <CardDescription>
                Creation of comprehensive design systems with reusable components and clear guidelines that ensure consistency, accelerate development, and simplify scaling.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Usability Evaluation</CardTitle>
              <CardDescription>
                Expert review and user testing of existing products to identify friction points and opportunities for improvement, with actionable recommendations.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Design Workshops & Training</CardTitle>
              <CardDescription>
                Collaborative workshops and customized training programs that build design thinking capabilities within your organization and align teams around user-centered approaches.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Design Impact Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Business Impact</SectionSubtitle>
              <ContentTitle>The Strategic Value of Exceptional Design</ContentTitle>
              <p>
                Investing in strategic UX/UI design delivers substantial business value that extends far beyond aesthetics. Our clients consistently report significant improvements in key performance indicators:
              </p>
              <ul>
                <li><strong>Increased Conversion Rates:</strong> Streamlined user journeys and intuitive interfaces typically improve conversion rates by 30-150% across websites and digital products.</li>
                <li><strong>Enhanced Customer Satisfaction:</strong> User-centered design directly improves satisfaction metrics, with our clients seeing average increases of 25-40% in NPS scores and similar metrics.</li>
                <li><strong>Reduced Support Costs:</strong> Intuitive interfaces reduce support inquiries by making products easier to use, often decreasing support volume by 20-35%.</li>
                <li><strong>Accelerated Time-to-Market:</strong> Design systems and clear specifications improve development efficiency, reducing implementation time by up to 40%.</li>
                <li><strong>Competitive Differentiation:</strong> Exceptional experiences create meaningful differentiation in crowded markets, strengthening brand perception and customer loyalty.</li>
                <li><strong>Higher User Adoption:</strong> Products that address real user needs and provide intuitive interfaces see significantly higher adoption rates and reduced abandonment.</li>
              </ul>
              <p>
                These outcomes demonstrate why forward-thinking companies view UX/UI design not as a cost center but as a strategic investment with measurable returns.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Digital Experience?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our strategic design approach can help you achieve your business goals. Our team will work with you to understand your specific challenges and create a tailored solution.
            </p>
            <CTAButton href="/contact">Schedule a Strategic Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default UXUIServicePage; 