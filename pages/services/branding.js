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

const BrandingPage = () => {
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
        <title>Branding & Visual Identity Services | Lucid Code Labs Software</title>
        <meta name="description" content="Create a powerful brand identity that resonates with your audience and differentiates your business. Our strategic branding solutions build recognition, trust, and loyalty." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/branding" legacyBehavior><a>Branding & Visual Identity</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 3h5c.28 0 .5.22.5.5v.5h3.5l2 2v7a2 2 0 0 1-2 2H18v7.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V15H5a2 2 0 0 1-2-2V6l2-2H8.5V3Z"></path>
                <path d="M11 9h2"></path>
                <path d="M9 15v5"></path>
                <path d="M14 15v6"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Strategic Branding & Visual Identity</SectionTitle>
            <SectionDescription>
              Build a distinctive, memorable brand that communicates your unique value and creates meaningful connections with your target audience.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Brand as a Strategic Business Asset</ContentTitle>
              <p>
                In today's crowded marketplace, a strong brand is essential for standing out, building trust, and creating lasting customer relationships. Your brand is more than just a logo or visual elements—it's the foundation of how your business is perceived in the market.
              </p>
              <p>
                At Lucid Code Labs, we approach branding as a strategic business initiative that directly impacts your organization's growth and success. We believe that effective branding must be authentic, distinctive, and consistently executed across all touchpoints.
              </p>
              <p>
                Our branding process begins with deep research into your business objectives, target audience, market positioning, and competitive landscape. We work closely with you to uncover your organization's unique value proposition, personality, and core values—the authentic elements that will resonate with your audience and differentiate you from competitors.
              </p>
              <p>
                From this strategic foundation, we develop comprehensive brand identity systems that communicate your brand's essence through thoughtful visual design, messaging, and experiences. The result is a cohesive, compelling brand that builds recognition, trust, and loyalty among your target audience.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Branding Strategy Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Strategic Foundation</CardTitle>
              <CardDescription>
                Research-driven brand strategies that align with your business objectives and resonate with your target audience.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Distinctive Identity</CardTitle>
              <CardDescription>
                Memorable visual systems that capture your brand's essence and create recognition in a crowded marketplace.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Consistent Implementation</CardTitle>
              <CardDescription>
                Comprehensive guidelines and assets that ensure brand consistency across all channels and touchpoints.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Branding Process Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>A Strategic Process for Building Powerful Brands</ContentTitle>
              <p>
                Our proven branding methodology ensures that your brand identity is built on solid strategic foundations and effectively communicates your unique value:
              </p>
              <ul>
                <li><strong>Discovery & Research:</strong> We conduct in-depth research into your industry, competitors, target audience, and internal stakeholders to understand perceptions, expectations, and opportunities.</li>
                <li><strong>Brand Strategy Development:</strong> Based on our research, we define your brand positioning, personality, values, value proposition, and messaging framework—the strategic elements that guide all brand expressions.</li>
                <li><strong>Visual Identity Design:</strong> We create distinctive visual elements including logo, color palette, typography, imagery style, and design system that capture your brand's essence and create recognition.</li>
                <li><strong>Brand Voice & Messaging:</strong> We develop a consistent brand voice and key messages that communicate your value proposition clearly and resonate with your target audience.</li>
                <li><strong>Brand Guidelines:</strong> We document comprehensive guidelines that ensure consistent application of your brand across all touchpoints and by all team members.</li>
                <li><strong>Asset Creation:</strong> We design and develop the essential brand assets you need for implementation, from business cards and marketing materials to website elements and social media templates.</li>
                <li><strong>Implementation Support:</strong> We provide guidance and assistance in rolling out your new or refreshed brand across all channels and touchpoints.</li>
                <li><strong>Brand Management:</strong> We offer ongoing support to help you maintain brand consistency and evolve your brand appropriately as your business grows.</li>
              </ul>
              <p>
                This comprehensive approach ensures that your brand not only looks professional but also effectively communicates your value proposition and creates meaningful connections with your audience.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Branding Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our branding services cover every aspect of creating, refreshing, and implementing powerful brand identities:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Brand Strategy</CardTitle>
              <CardDescription>
                Research-driven development of brand positioning, personality, values, and messaging frameworks that align with your business objectives.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Logo Design</CardTitle>
              <CardDescription>
                Creation of distinctive, versatile logos and marks that become recognizable symbols of your brand identity.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Visual Identity Systems</CardTitle>
              <CardDescription>
                Development of comprehensive visual frameworks including color palettes, typography, imagery styles, and design elements.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Brand Guidelines</CardTitle>
              <CardDescription>
                Creation of detailed documentation for consistent application of your brand across all touchpoints and by all team members.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Brand Voice & Messaging</CardTitle>
              <CardDescription>
                Development of distinctive tone, language, and key messages that communicate your brand's personality and value proposition.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Marketing Collateral</CardTitle>
              <CardDescription>
                Design of business cards, stationery, brochures, presentation templates, and other print materials that showcase your brand.
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
              <ContentTitle>The Tangible Value of Strategic Branding</ContentTitle>
              <p>
                Investing in strategic branding delivers substantial business value that impacts multiple aspects of your organization:
              </p>
              <ul>
                <li><strong>Brand Recognition:</strong> A distinctive, consistently applied visual identity helps you stand out in a crowded marketplace and increases recall among your target audience.</li>
                <li><strong>Customer Trust:</strong> Professional, cohesive branding signals credibility and quality, building trust with potential customers before they even engage with your products or services.</li>
                <li><strong>Price Premium:</strong> Strong brands command price premiums of 20-25% over generic alternatives, directly impacting your profit margins and revenue.</li>
                <li><strong>Customer Loyalty:</strong> Emotional connections fostered by authentic branding lead to higher retention rates and increased customer lifetime value.</li>
                <li><strong>Marketing Efficiency:</strong> Clear brand positioning and messaging make your marketing efforts more effective and reduce the cost of acquiring new customers.</li>
                <li><strong>Team Alignment:</strong> Well-defined brand values and positioning help align your team around a common purpose and vision, improving internal culture and performance.</li>
              </ul>
              <p>
                Our clients typically see measurable improvements in key metrics following strategic branding initiatives, including increased website engagement, higher conversion rates, improved customer retention, and stronger market positioning against competitors. Beyond these quantifiable benefits, strong branding creates intangible assets that drive long-term business value and resilience.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Branding Business Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Build a Powerful Brand?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our branding solutions can help your organization create meaningful connections with your audience and stand out in your market.
            </p>
            <CTAButton href="/#contact">Schedule a Brand Strategy Session</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default BrandingPage; 