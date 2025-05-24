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

const WebhostingPage = () => {
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
        <title>Webhosting Services | Lucid Code Labs Software</title>
        <meta name="description" content="Secure, scalable, and high-performance web hosting solutions tailored to your business needs. We provide reliable infrastructure to keep your digital presence online 24/7." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/webhosting" legacyBehavior><a>Webhosting</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </ServiceIcon>
            <SectionTitle>Reliable, Secure Web Hosting Solutions</SectionTitle>
            <SectionDescription>
              Ensure your digital presence is always online with our enterprise-grade hosting infrastructure, designed for performance, security, and scalability.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Beyond Basic Hosting: Infrastructure as a Strategic Asset</ContentTitle>
              <p>
                In today's digital-first world, your website and web applications are often the primary touchpoint with your customers. The infrastructure that powers these digital assets is far more than a technical necessity—it's a strategic component of your business operations.
              </p>
              <p>
                At Lucid Code Labs, we approach web hosting as a critical business service that directly impacts user experience, conversion rates, and brand perception. Unlike commodity hosting providers, we design hosting solutions specifically tailored to your application requirements, security needs, and business goals.
              </p>
              <p>
                Our team begins by understanding your application architecture, traffic patterns, and business priorities. This enables us to create a hosting environment that balances performance, reliability, security, and cost-efficiency—ensuring you get exactly what your business needs without overpaying for unnecessary resources.
              </p>
              <p>
                Whether you need a simple hosting solution for a corporate website or a complex, highly-available infrastructure for mission-critical applications, our hosting services provide the solid foundation your digital business needs to thrive.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Web Hosting Infrastructure Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Performance Optimization</CardTitle>
              <CardDescription>
                Tailored server configurations, content delivery networks, and caching strategies to ensure fast load times across all devices and locations.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Security & Compliance</CardTitle>
              <CardDescription>
                Comprehensive security measures including SSL certificates, firewalls, malware scanning, and compliance with industry regulations.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Scalability</CardTitle>
              <CardDescription>
                Elastic infrastructure that grows with your business, handling traffic spikes and expanding as your digital presence evolves.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [Hosting Management Console Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>A Systematic Approach to Hosting Excellence</ContentTitle>
              <p>
                Our proven hosting methodology ensures that your digital presence remains secure, available, and performant at all times:
              </p>
              <ul>
                <li><strong>Requirements Analysis:</strong> We analyze your application's technical requirements, expected traffic patterns, security needs, and business priorities.</li>
                <li><strong>Infrastructure Design:</strong> Based on the analysis, we design a tailored hosting architecture using the most appropriate technologies and platforms.</li>
                <li><strong>Performance Optimization:</strong> We implement caching strategies, content delivery networks, and server-side optimizations to ensure maximum speed.</li>
                <li><strong>Security Implementation:</strong> We deploy comprehensive security measures including SSL certificates, firewalls, intrusion detection, and regular security audits.</li>
                <li><strong>Monitoring Setup:</strong> We establish robust monitoring systems that track performance, uptime, and security, with automated alerts for any issues.</li>
                <li><strong>Backup and Disaster Recovery:</strong> We implement automated backup solutions and disaster recovery plans to protect against data loss and minimize downtime.</li>
                <li><strong>Continuous Management:</strong> Our team provides ongoing maintenance, updates, and optimization to ensure your hosting environment remains secure and efficient.</li>
                <li><strong>Scalability Planning:</strong> We develop strategies for scaling your hosting infrastructure to accommodate growth and handle traffic spikes without disruption.</li>
              </ul>
              <p>
                This systematic approach ensures that your hosting infrastructure is not just a place to store your website, but a strategic asset that contributes to your business success through reliability, performance, and security.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Services</SectionSubtitle>
            <ContentTitle>Comprehensive Hosting Solutions</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our hosting services cover every aspect of your web infrastructure needs, from basic website hosting to complex, multi-region application deployments:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Shared Hosting</CardTitle>
              <CardDescription>
                Cost-effective hosting solutions for small to medium websites with balanced resources and essential features for reliable performance.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>VPS Hosting</CardTitle>
              <CardDescription>
                Virtual private servers with dedicated resources offering greater control, scalability, and performance for growing businesses.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Dedicated Server Hosting</CardTitle>
              <CardDescription>
                Fully dedicated physical servers providing maximum performance, security, and customization for high-traffic websites and applications.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Cloud Hosting</CardTitle>
              <CardDescription>
                Flexible, scalable cloud infrastructure that adapts to your needs in real-time, ensuring optimal resource utilization and cost efficiency.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Managed WordPress Hosting</CardTitle>
              <CardDescription>
                Specialized hosting optimized for WordPress sites with automated updates, enhanced security, and performance optimizations.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>E-commerce Hosting</CardTitle>
              <CardDescription>
                Hosting solutions designed specifically for online stores with PCI compliance, enhanced security, and optimized for conversion.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CardTitle>High-Availability Hosting</CardTitle>
              <CardDescription>
                Redundant hosting infrastructure with automatic failover mechanisms to ensure near-zero downtime for mission-critical applications.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CardTitle>Content Delivery Network (CDN)</CardTitle>
              <CardDescription>
                Global content distribution networks that cache your website at edge locations worldwide, dramatically improving load times for all users.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CardTitle>DevOps-Enabled Hosting</CardTitle>
              <CardDescription>
                Modern hosting environments with CI/CD integration, containerization support, and infrastructure-as-code capabilities for agile development.
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
              <ContentTitle>The Strategic Value of Professional Hosting</ContentTitle>
              <p>
                Investing in professional hosting solutions delivers tangible business benefits that extend far beyond simply keeping your website online:
              </p>
              <ul>
                <li><strong>Enhanced User Experience:</strong> Faster page load times and consistent availability lead to improved user satisfaction, longer session duration, and higher conversion rates.</li>
                <li><strong>Search Engine Optimization:</strong> Website speed and uptime are critical ranking factors for search engines, meaning better hosting directly contributes to higher search visibility.</li>
                <li><strong>Brand Protection:</strong> Reliable hosting with robust security measures protects your brand reputation by preventing embarrassing outages and security breaches.</li>
                <li><strong>Operational Efficiency:</strong> Managed hosting solutions free your team from infrastructure concerns, allowing them to focus on core business activities and innovation.</li>
                <li><strong>Scalability for Growth:</strong> Flexible hosting infrastructure allows your digital presence to scale seamlessly as your business grows, eliminating performance bottlenecks.</li>
                <li><strong>Cost Optimization:</strong> Right-sized hosting solutions ensure you're not overpaying for unused resources while still maintaining headroom for traffic spikes.</li>
                <li><strong>Competitive Advantage:</strong> While competitors struggle with slow-loading sites and downtime, your consistently available and fast-loading digital presence wins customer trust and business.</li>
                <li><strong>Reduced Risk:</strong> Professional hosting with comprehensive security, backup solutions, and disaster recovery planning significantly reduces business continuity risks.</li>
              </ul>
              <p>
                Our clients typically experience 30-50% improvements in page load speeds, 99.9%+ uptime, and significant reductions in security incidents after migrating to our hosting solutions. This translates directly to improved customer satisfaction, higher conversion rates, and stronger business performance.
              </p>
            </ContentText>
            <ImagePlaceholder>
              [Hosting Business Impact Image]
            </ImagePlaceholder>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Upgrade Your Web Hosting?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our hosting solutions can enhance your digital presence with improved performance, security, and reliability. Our team will work with you to design a hosting environment tailored to your specific needs.
            </p>
            <CTAButton href="/#contact">Schedule a Hosting Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default WebhostingPage; 