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

const DigitalGrowthPage = () => {
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
        <title>Digital Growth & Performance Services | Lucid Code Labs Software</title>
        <meta name="description" content="Accelerate your business growth with data-driven digital marketing strategies. Optimize your online presence, increase conversions, and maximize ROI across channels." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/digital-growth" legacyBehavior><a>Digital Growth & Performance</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                <path d="m16 6 4 14"></path>
                <path d="M8 6v4"></path>
                <path d="M3 3v18"></path>
                <path d="M20 3v2"></path>
                <path d="M20 19v2"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Strategic Digital Growth & Performance</SectionTitle>
            <SectionDescription>
              Accelerate your business with data-driven digital marketing strategies that optimize your online presence, increase conversions, and maximize ROI across all channels.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Growth-Driven Digital Strategy</ContentTitle>
              <p>
                In today's digital landscape, businesses face increasing competition for customer attention across a multitude of platforms and channels. Simply having an online presence is no longer enough—you need a strategic, data-driven approach to digital marketing that delivers measurable results.
              </p>
              <p>
                At Lucid Code Labs, we approach digital growth as a systematic process that combines strategic thinking, creative execution, and continuous optimization. We begin by understanding your business objectives, target audience, and competitive landscape to develop a tailored digital strategy that aligns with your specific goals.
              </p>
              <p>
                Our methodology is centered on the performance marketing framework—implementing measurable campaigns, analyzing results in real-time, and continuously optimizing for improved performance. This data-driven approach ensures that every marketing dollar you invest delivers the maximum possible return.
              </p>
              <p>
                What sets us apart is our integrated approach that combines technical expertise with creative marketing strategies. By leveraging advanced analytics, marketing automation, and our deep understanding of digital platforms, we create cohesive digital experiences that attract, engage, and convert your target audience at every stage of the customer journey.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Digital Growth Strategy Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Data-Driven Decisions</CardTitle>
              <CardDescription>
                Strategic marketing initiatives based on comprehensive data analysis and audience insights rather than assumptions.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Conversion Optimization</CardTitle>
              <CardDescription>
                Systematic approach to improving user experience and messaging to increase conversion rates across all digital touchpoints.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Multi-Channel Strategy</CardTitle>
              <CardDescription>
                Cohesive approach that integrates multiple digital channels to create seamless customer journeys that drive growth.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Digital Growth Methodology Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>The Science Behind Digital Growth</ContentTitle>
              <p>
                Our proven methodology ensures that your digital marketing initiatives are strategic, measurable, and consistently optimized for maximum performance:
              </p>
              <ul>
                <li><strong>Discovery & Analysis:</strong> We conduct comprehensive audits of your current digital presence, analyze competitor strategies, and identify market opportunities and audience insights.</li>
                <li><strong>Strategy Development:</strong> Based on our analysis, we create a tailored digital strategy that defines target audiences, channels, messaging, and specific KPIs aligned with your business objectives.</li>
                <li><strong>Conversion Funnel Optimization:</strong> We map the customer journey and optimize each stage of your conversion funnel to guide prospects smoothly from awareness to conversion.</li>
                <li><strong>Content & Creative Development:</strong> We create compelling, audience-centric content and creative assets that resonate with your target audience and support your strategic objectives.</li>
                <li><strong>Technical Implementation:</strong> We set up the necessary technical infrastructure, including analytics, tracking, automation tools, and campaign platforms for optimal performance.</li>
                <li><strong>Campaign Execution:</strong> We implement integrated campaigns across appropriate channels, ensuring consistent messaging and optimal resource allocation.</li>
                <li><strong>Continuous Optimization:</strong> We employ A/B testing, performance analysis, and iterative improvements to continuously enhance campaign effectiveness and ROI.</li>
                <li><strong>Reporting & Strategic Refinement:</strong> We provide transparent reporting on key metrics and use insights to refine the digital strategy for ongoing improvement.</li>
              </ul>
              <p>
                This systematic approach ensures that your digital marketing initiatives are not just creative but also strategic and measurable, with clear connections between marketing activities and business outcomes.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Digital Growth Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our digital growth services encompass every aspect of online marketing and performance optimization:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Digital Strategy</CardTitle>
              <CardDescription>
                Development of comprehensive digital marketing strategies that align with your business objectives and provide a roadmap for growth.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Search Engine Optimization (SEO)</CardTitle>
              <CardDescription>
                Technical and content optimization to improve organic search visibility and drive qualified traffic to your website.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Pay-Per-Click Advertising (PPC)</CardTitle>
              <CardDescription>
                Strategic paid search and display advertising campaigns that maximize ROI through targeted audience segmentation and optimization.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Social Media Marketing</CardTitle>
              <CardDescription>
                Strategic organic and paid social media campaigns that build brand awareness, engagement, and conversions across relevant platforms.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Conversion Rate Optimization (CRO)</CardTitle>
              <CardDescription>
                Data-driven analysis and testing to improve website performance and increase the percentage of visitors who take desired actions.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Email & Marketing Automation</CardTitle>
              <CardDescription>
                Personalized email campaigns and automation workflows that nurture leads, build relationships, and drive conversions throughout the customer lifecycle.
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
              <ContentTitle>Measurable Results That Drive Growth</ContentTitle>
              <p>
                Strategic digital growth initiatives deliver tangible business outcomes that impact your bottom line:
              </p>
              <ul>
                <li><strong>Increased Revenue:</strong> Well-executed digital marketing campaigns drive qualified leads and conversions, directly contributing to revenue growth.</li>
                <li><strong>Improved ROI:</strong> Data-driven optimization ensures that your marketing budget is allocated to the most effective channels and tactics, maximizing return on investment.</li>
                <li><strong>Enhanced Brand Visibility:</strong> Strategic digital presence across multiple channels increases brand awareness and recognition among your target audience.</li>
                <li><strong>Customer Acquisition:</strong> Targeted campaigns attract new customers at a lower cost per acquisition than traditional marketing methods.</li>
                <li><strong>Customer Retention:</strong> Personalized nurturing strategies keep existing customers engaged and increase their lifetime value through repeat purchases and referrals.</li>
                <li><strong>Market Insights:</strong> Digital analytics provide valuable data on customer behavior and preferences, informing product development and business strategy.</li>
              </ul>
              <p>
                Our clients typically see significant improvements in key performance indicators within the first 3-6 months of implementing our digital growth strategies. These include 30-50% increases in organic traffic, 20-35% improvements in conversion rates, and 15-25% reductions in customer acquisition costs. Beyond these metrics, our strategic approach to digital marketing creates sustainable competitive advantages that support long-term business growth.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Digital Growth Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Accelerate Your Digital Growth?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our data-driven digital marketing strategies can help your business attract more customers, increase conversions, and maximize ROI across all digital channels.
            </p>
            <CTAButton href="/#contact">Schedule a Digital Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default DigitalGrowthPage; 