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

// Tabs Component
const TabsContainer = styled.div`
  margin: 3rem 0;
`;

const TabsNav = styled.div`
  display: flex;
  border-bottom: 2px solid var(--light-gray);
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--primary)' : 'var(--gray)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary)' : 'transparent'};
  margin-bottom: -2px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${props => props.active ? 'var(--primary)' : 'var(--dark)'};
  }
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const MobileAppServicePage = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('ios');
  
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
        <title>Mobile App Development | TechNova</title>
        <meta name="description" content="Strategic mobile app development services that transform ideas into successful digital products. We build custom iOS and Android apps that create business value." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/mobile-app-development" legacyBehavior><a>Mobile App Development</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>Strategic Mobile Solutions for Business Growth</SectionTitle>
            <SectionDescription>
              We transform business challenges into powerful mobile experiences that engage users, streamline operations, and create new revenue opportunities through user-centered design and robust engineering.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Mobile Development as a Strategic Business Initiative</ContentTitle>
              <p>
                In today's digital landscape, mobile apps are not just technical products—they're strategic business assets that can transform customer relationships, operational efficiency, and market positioning. At TechNova, we approach mobile app development through this strategic lens.
              </p>
              <p>
                Our process begins with understanding your business objectives, user needs, and market opportunities. We focus on identifying the unique value your mobile application can deliver, ensuring that every feature contributes to your core business goals.
              </p>
              <p>
                This business-first approach means that we're not just building apps with the latest technology—we're creating digital products designed to deliver measurable business impact, whether that's increased customer engagement, operational efficiency, or new revenue streams.
              </p>
              <p>
                By combining strategic thinking with technical excellence, we deliver mobile solutions that stand out in crowded marketplaces and create lasting value for your business and users.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Strategic Mobile Development Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Business-Aligned Development</CardTitle>
              <CardDescription>
                We align every aspect of mobile app development with your specific business objectives, ensuring that the final product drives measurable results for your organization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>User-Centered Design</CardTitle>
              <CardDescription>
                Our design process focuses on creating intuitive, engaging user experiences that solve real problems for your target audience and encourage continued engagement.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Engineering Excellence</CardTitle>
              <CardDescription>
                We build robust, high-performance applications using industry best practices that ensure reliability, scalability, and maintainability over time.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Our Process</SectionSubtitle>
            <ContentTitle>A Proven Approach to Mobile App Development</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Our structured development methodology ensures that we deliver high-quality mobile applications that meet your business objectives and user needs.
            </p>
          </CenteredContent>
          
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Strategic Discovery</StepTitle>
                <StepDescription>
                  We begin by deeply understanding your business goals, user needs, and market opportunities. This phase includes stakeholder interviews, market research, competitive analysis, and identifying key performance indicators that will define success.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Concept & Planning</StepTitle>
                <StepDescription>
                  Based on discovery insights, we develop the strategic concept, feature set, and technical approach. This phase includes creating user personas, user journeys, feature prioritization, and a detailed roadmap for development and deployment.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>UX/UI Design</StepTitle>
                <StepDescription>
                  Our designers create intuitive, engaging interfaces that balance user needs with business objectives. This phase includes wireframing, prototyping, visual design, and usability testing to refine the user experience before development begins.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Development & Integration</StepTitle>
                <StepDescription>
                  Our engineering team builds your application using modern development practices and frameworks. This phase includes front-end and back-end development, API integrations, database architecture, and continuous integration/deployment pipelines.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>5</StepNumber>
              <StepContent>
                <StepTitle>Quality Assurance</StepTitle>
                <StepDescription>
                  We thoroughly test your application across devices, operating systems, and network conditions. This phase includes automated and manual testing, performance optimization, security audits, and bug fixing to ensure a flawless user experience.
                </StepDescription>
              </StepContent>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>6</StepNumber>
              <StepContent>
                <StepTitle>Deployment & Growth</StepTitle>
                <StepDescription>
                  We manage the app store submission process and post-launch support. This phase includes deployment strategies, analytics implementation, user feedback collection, and ongoing optimization to continually improve performance and results.
                </StepDescription>
              </StepContent>
            </ProcessStep>
          </ProcessSteps>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Technology</SectionSubtitle>
            <ContentTitle>Native & Cross-Platform Excellence</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              We select the optimal technology approach based on your specific business requirements, budget, and timeline—delivering solutions that provide the best balance of performance, user experience, and development efficiency.
            </p>
          </CenteredContent>
          
          <TabsContainer>
            <TabsNav>
              <TabButton 
                active={activeTab === 'ios'} 
                onClick={() => setActiveTab('ios')}
              >
                iOS Development
              </TabButton>
              <TabButton 
                active={activeTab === 'android'} 
                onClick={() => setActiveTab('android')}
              >
                Android Development
              </TabButton>
              <TabButton 
                active={activeTab === 'cross'} 
                onClick={() => setActiveTab('cross')}
              >
                Cross-Platform
              </TabButton>
              <TabButton 
                active={activeTab === 'backend'} 
                onClick={() => setActiveTab('backend')}
              >
                Backend Services
              </TabButton>
            </TabsNav>
            
            <TabContent active={activeTab === 'ios'}>
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Native iOS Excellence</ContentTitle>
                  <p>
                    Our iOS development team creates exceptional applications that take full advantage of Apple's platform capabilities and design principles. We use Swift and Objective-C to build high-performance, beautiful apps that iOS users expect.
                  </p>
                  <p>
                    Our expertise includes leveraging the latest iOS features such as ARKit, Core ML, HealthKit, and Apple Pay to create innovative experiences that stand out in the App Store. We follow Apple's Human Interface Guidelines while adding unique elements that make your app memorable.
                  </p>
                  <p>
                    Beyond technical excellence, we focus on the strategic aspects of iOS development, including App Store optimization, user acquisition strategies, and leveraging Apple's ecosystem to maximize your business impact.
                  </p>
                </ContentText>
                <ImagePlaceholder>
                  [iOS Development Image]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
            
            <TabContent active={activeTab === 'android'}>
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Android Development Expertise</ContentTitle>
                  <p>
                    Our Android development team builds applications that perform beautifully across the diverse Android ecosystem. Using Kotlin and Java, we create apps that combine performance with adaptability to various device types and screen sizes.
                  </p>
                  <p>
                    We leverage advanced Android capabilities including Jetpack components, Material Design, Firebase integration, and hardware-specific features to create rich, responsive applications. Our approach ensures compatibility across the fragmented Android landscape while maintaining a consistent user experience.
                  </p>
                  <p>
                    We also address the strategic aspects of Android development, including Play Store optimization, adaptation to regional Android markets, and leveraging Google's services to enhance functionality and reach.
                  </p>
                </ContentText>
                <ImagePlaceholder>
                  [Android Development Image]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
            
            <TabContent active={activeTab === 'cross'}>
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Cross-Platform Solutions</ContentTitle>
                  <p>
                    When appropriate for your business goals, we leverage cross-platform frameworks like React Native and Flutter to accelerate development and maximize efficiency. These technologies allow us to build applications that run on both iOS and Android from a single codebase.
                  </p>
                  <p>
                    Our cross-platform expertise ensures that we can deliver near-native performance and user experience while reducing development time and cost. We carefully evaluate when this approach aligns with your business objectives, considering factors like performance requirements, platform-specific features, and long-term maintenance.
                  </p>
                  <p>
                    By strategically employing cross-platform development, we help businesses reach users across ecosystems more quickly and cost-effectively without sacrificing the quality that drives user engagement and business results.
                  </p>
                </ContentText>
                <ImagePlaceholder>
                  [Cross-Platform Development Image]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
            
            <TabContent active={activeTab === 'backend'}>
              <TwoColumnGrid>
                <ContentText>
                  <ContentTitle>Robust Backend Services</ContentTitle>
                  <p>
                    Great mobile apps require powerful backend services to deliver their full value. Our backend development team builds scalable, secure APIs and services that support your mobile applications and integrate with your existing systems.
                  </p>
                  <p>
                    We create custom backend solutions using Node.js, Python, Ruby, and other modern technologies, as well as leveraging managed services like Firebase, AWS Amplify, and Google Cloud Platform to accelerate development when appropriate.
                  </p>
                  <p>
                    Our backend solutions include user authentication, data storage and synchronization, real-time features, payment processing, analytics, and integration with third-party services. We design these systems with scalability, security, and performance in mind, ensuring they can grow with your business.
                  </p>
                </ContentText>
                <ImagePlaceholder>
                  [Backend Services Image]
                </ImagePlaceholder>
              </TwoColumnGrid>
            </TabContent>
          </TabsContainer>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Business Impact Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Business Impact</SectionSubtitle>
              <ContentTitle>Strategic Value of Mobile Applications</ContentTitle>
              <p>
                Mobile apps deliver significant business value when developed with clear strategic intent. Our clients consistently achieve meaningful results across several key areas:
              </p>
              <ul>
                <li><strong>Enhanced Customer Engagement:</strong> Mobile apps typically increase customer engagement by 88% compared to mobile websites, with users spending 3-4x more time in apps.</li>
                <li><strong>New Revenue Channels:</strong> Well-designed mobile apps can open direct monetization opportunities through in-app purchases, subscriptions, and premium features.</li>
                <li><strong>Operational Efficiency:</strong> Enterprise mobile apps streamline internal processes, reducing operational costs by 20-30% in many cases while improving data accuracy.</li>
                <li><strong>Improved Customer Insights:</strong> Mobile apps provide rich user data and behavior analytics that inform product improvements and business strategy.</li>
                <li><strong>Competitive Advantage:</strong> Innovative mobile experiences create significant differentiation, with 67% of companies reporting that mobile apps give them an edge over competitors.</li>
                <li><strong>Brand Presence:</strong> Well-designed mobile apps strengthen brand presence, with users interacting with your brand 2-3 times daily on average.</li>
              </ul>
              <p>
                These outcomes demonstrate why forward-thinking companies prioritize mobile app development as a core component of their digital strategy rather than a one-time technical project.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Mobile Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our mobile app development services span the entire product lifecycle, from conception to growth:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Mobile Strategy Consulting</CardTitle>
              <CardDescription>
                Strategic planning to define your mobile approach, identify opportunities, and create a roadmap aligned with your business objectives.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Native iOS Development</CardTitle>
              <CardDescription>
                High-performance iOS applications that leverage the full capabilities of Apple's ecosystem and provide exceptional user experiences.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Native Android Development</CardTitle>
              <CardDescription>
                Robust Android applications designed to deliver consistent experiences across the diverse Android device landscape.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Cross-Platform Development</CardTitle>
              <CardDescription>
                Efficient multi-platform solutions using React Native or Flutter when appropriate for your business goals and technical requirements.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>UX/UI Design for Mobile</CardTitle>
              <CardDescription>
                Human-centered design that creates intuitive, engaging interfaces optimized for mobile contexts and user behaviors.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>
                Scalable, secure server-side solutions that power your mobile applications and integrate with existing systems.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CardTitle>QA & Testing</CardTitle>
              <CardDescription>
                Comprehensive quality assurance across devices, operating systems, and conditions to ensure reliable performance.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CardTitle>App Store Optimization</CardTitle>
              <CardDescription>
                Strategic approach to improving visibility and conversion rates in app stores to maximize download and installation rates.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CardTitle>Post-Launch Support</CardTitle>
              <CardDescription>
                Ongoing maintenance, performance optimization, feature enhancements, and technical support to ensure long-term success.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Mobile Strategy?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how a strategic mobile application can help you achieve your business objectives. Our team will work with you to understand your specific challenges and create a tailored solution.
            </p>
            <CTAButton href="/contact">Schedule a Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default MobileAppServicePage; 