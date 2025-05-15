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

const AIMLIntegrationPage = () => {
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
        <title>AI & Machine Learning Integration | TechNova</title>
        <meta name="description" content="Enhance your existing systems with AI & ML capabilities. From natural language processing to computer vision and predictive analytics, we integrate intelligent solutions into your business." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/ai-ml-integration" legacyBehavior><a>AI & ML Integration</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>AI & Machine Learning Integration</SectionTitle>
            <SectionDescription>
              Enhance your existing systems with intelligent capabilities that transform data into insights, automate processes, and deliver personalized experiences to your customers.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Seamless Integration of Intelligence</ContentTitle>
              <p>
                In today's competitive landscape, businesses are looking for ways to leverage artificial intelligence and machine learning without completely overhauling their existing technology infrastructure. The challenge lies in determining where and how to apply these technologies for maximum impact.
              </p>
              <p>
                At TechNova, we take a pragmatic approach to AI integration. Rather than pushing for complete system replacements, we identify strategic points in your existing workflows and applications where AI can create the most value. This targeted approach allows for faster implementation, quicker ROI, and minimized disruption.
              </p>
              <p>
                Our AI integration methodology begins with a thorough assessment of your business objectives, existing systems, and data assets. We then design tailored AI solutions that complement your current infrastructure while adding intelligent capabilities that drive measurable business outcomes.
              </p>
              <p>
                Whether you're looking to enhance customer experiences, optimize operations, or gain deeper insights from your data, our AI integration services provide the expertise and technical capabilities to transform your existing systems into intelligent platforms.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [AI & ML Integration Strategy Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Intelligent Automation</CardTitle>
              <CardDescription>
                Enhance your business processes with AI-powered automation that can handle complex decision-making, adapt to changing conditions, and continuously improve over time.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Predictive Capabilities</CardTitle>
              <CardDescription>
                Integrate predictive models into your applications that forecast trends, identify opportunities, and anticipate potential issues before they impact your business.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Personalization Engines</CardTitle>
              <CardDescription>
                Add machine learning-driven personalization to your customer touchpoints that deliver tailored experiences, recommendations, and interactions.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [AI Integration Process Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Process</SectionSubtitle>
              <ContentTitle>How We Integrate AI Into Your Systems</ContentTitle>
              <p>
                Our proven AI integration framework ensures that intelligence is seamlessly woven into your existing technology ecosystem:
              </p>
              <ul>
                <li><strong>Discovery & Assessment:</strong> We analyze your business objectives, current systems, and data infrastructure to identify the highest-value opportunities for AI integration.</li>
                <li><strong>Solution Design:</strong> We develop a tailored integration plan that outlines the AI capabilities, data requirements, integration points, and expected outcomes.</li>
                <li><strong>Data Preparation:</strong> We assist with data cleansing, structuring, and enrichment to ensure your AI models have the quality inputs they need to generate valuable outputs.</li>
                <li><strong>Model Development:</strong> We build custom AI models or select and adapt pre-trained solutions based on your specific requirements and use cases.</li>
                <li><strong>Integration & API Development:</strong> We create secure and efficient interfaces between your existing systems and new AI components for seamless interaction.</li>
                <li><strong>Testing & Validation:</strong> We rigorously test the integrated solution to ensure accuracy, performance, and reliability in real-world scenarios.</li>
                <li><strong>Deployment & Monitoring:</strong> We support the deployment of AI capabilities and establish monitoring systems to track performance and identify areas for improvement.</li>
                <li><strong>Continuous Improvement:</strong> We help you establish processes for ongoing refinement of your AI models and integration points based on real-world results and changing business needs.</li>
              </ul>
              <p>
                Throughout this process, we focus on creating AI solutions that are explainable, ethical, and aligned with your business values and regulatory requirements.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Integration Capabilities</SectionSubtitle>
            <ContentTitle>AI Technologies We Integrate</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our AI integration services span a wide range of technologies that can be incorporated into your existing systems:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Natural Language Processing</CardTitle>
              <CardDescription>
                Add the ability to understand, interpret, and generate human language to your applications, enabling chatbots, sentiment analysis, content summarization, and more.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Computer Vision</CardTitle>
              <CardDescription>
                Integrate visual recognition capabilities that can analyze images and video to identify objects, faces, scenes, and activities for various business applications.
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
                Incorporate statistical models and machine learning algorithms that identify patterns in your data to forecast future outcomes and behavior.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Recommendation Systems</CardTitle>
              <CardDescription>
                Embed intelligent recommendation engines that analyze user behavior and preferences to suggest relevant products, content, or actions.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Anomaly Detection</CardTitle>
              <CardDescription>
                Implement systems that can identify unusual patterns in your data, highlighting potential issues, fraud, or opportunities that might otherwise go unnoticed.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Decision Support Systems</CardTitle>
              <CardDescription>
                Add AI-powered analytics and recommendations to your business applications that help users make better, data-driven decisions.
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
              <ContentTitle>The Value of AI & ML Integration</ContentTitle>
              <p>
                Integrating AI and machine learning capabilities into your existing systems delivers tangible business benefits across multiple dimensions:
              </p>
              <ul>
                <li><strong>Enhanced Customer Experience:</strong> Personalized interactions, intelligent recommendations, and conversational interfaces that improve customer satisfaction and loyalty.</li>
                <li><strong>Operational Efficiency:</strong> Automated processes, predictive maintenance, and resource optimization that reduce costs and improve productivity.</li>
                <li><strong>Data-Driven Insights:</strong> Advanced analytics that uncover hidden patterns, market opportunities, and strategic insights from your existing data assets.</li>
                <li><strong>Competitive Advantage:</strong> Differentiated products and services that leverage AI to deliver unique value propositions in the marketplace.</li>
                <li><strong>Risk Reduction:</strong> Predictive models that identify potential issues before they occur, enabling proactive risk management and mitigation.</li>
                <li><strong>Revenue Growth:</strong> New revenue streams, optimized pricing, improved customer targeting, and increased conversion rates driven by AI capabilities.</li>
                <li><strong>Innovation Acceleration:</strong> Faster development of new features and capabilities that leverage the latest advances in AI technology.</li>
              </ul>
              <p>
                Our clients typically see ROI within 6-12 months of implementing AI integration projects, with benefits that continue to compound as models learn and improve over time. By taking a targeted approach to AI integration, we help you achieve maximum impact with minimal disruption to your existing operations.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [AI & ML Business Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Enhance Your Systems with AI?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how AI and machine learning integration can help you achieve your business goals. Our team will work with you to identify the most impactful opportunities for intelligent enhancement.
            </p>
            <CTAButton href="/contact">Schedule an AI Integration Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default AIMLIntegrationPage; 