import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

const ImageContainer = styled.div`
  background-color: #e2e8f0;
  border-radius: 1rem;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
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

const ImagePlaceholder = styled.div`
  background-color: #e2e8f0;
  border-radius: 1rem;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const AIServicePage = () => {
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
        <title>AI Powered Software Solutions | TechNova</title>
        <meta name="description" content="Unlock your business potential with our custom AI solutions. We transform data into actionable intelligence and automation that evolves with your business." />
      </Head>
      
      <Navbar scrolled={scrolled} />
      
      <HeroSection>
        <Container>
          <Breadcrumbs>
            <Link href="/" legacyBehavior><a>Home</a></Link>
            <span>/</span>
            <Link href="/services" legacyBehavior><a>Services</a></Link>
            <span>/</span>
            <Link href="/services/ai-powered-software" legacyBehavior><a>AI Powered Software</a></Link>
          </Breadcrumbs>
          
          <HeroContent>
            <ServiceIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4v5.5a4 4 0 0 0 8 0V6A4 4 0 0 0 12 2Z"></path>
                <path d="M10 16a2 2 0 1 0 4 0v-1h1a2 2 0 1 0 0-4h-1"></path>
                <path d="M8 17A4 4 0 0 1 8 13"></path>
              </svg>
            </ServiceIcon>
            <SectionTitle>Transformative AI Solutions for Your Business</SectionTitle>
            <SectionDescription>
              We don't just build AI systems—we architect intelligent solutions that adapt to your evolving business needs, turning complex data into strategic advantages and automating processes for unprecedented efficiency.
            </SectionDescription>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ContentSection>
        <Container>
          <TwoColumnGrid>
            <ContentText>
              <SectionSubtitle>Our Approach</SectionSubtitle>
              <ContentTitle>Beyond AI Implementation: Strategic Transformation</ContentTitle>
              <p>
                In today's rapidly evolving business landscape, artificial intelligence isn't just a technology upgrade—it's a strategic imperative. However, many organizations struggle to move beyond basic AI implementation to achieve meaningful transformation.
              </p>
              <p>
                At TechNova, we take a fundamentally different approach. We partner with you to understand your unique business challenges, goals, and data environment before designing customized AI solutions that deliver tangible outcomes.
              </p>
              <p>
                Our consultative process begins with deep discovery. We work closely with your team to identify high-value opportunities where AI can create the most significant impact, whether that's automating repetitive tasks, uncovering hidden patterns in your data, or creating entirely new capabilities.
              </p>
              <p>
                Rather than offering one-size-fits-all AI tools, we craft bespoke solutions that align perfectly with your specific objectives and integrate seamlessly with your existing systems and workflows.
              </p>
            </ContentText>
            <ImageContainer>
              <Image 
                src="/images/Neural Network Design.jpg"
                alt="AI Strategy Consultation - Neural Network Design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </ImageContainer>
          </TwoColumnGrid>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Data-Driven Decision Making</CardTitle>
              <CardDescription>
                Transform raw data into actionable intelligence. Our AI solutions help you make faster, more accurate decisions by surfacing insights that would otherwise remain hidden in your data.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Intelligent Process Automation</CardTitle>
              <CardDescription>
                Move beyond basic automation to intelligent systems that learn and improve over time. We identify and automate complex workflows, freeing your team to focus on higher-value activities.
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
                Anticipate future trends and behaviors with sophisticated prediction models. Our predictive systems help you identify opportunities and mitigate risks before they materialize.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <ContentSection style={{ backgroundColor: 'var(--light)' }}>
        <Container>
          <TwoColumnGrid>
            <ImagePlaceholder>
              [AI Implementation Image]
            </ImagePlaceholder>
            <ContentText>
              <SectionSubtitle>Our Methodology</SectionSubtitle>
              <ContentTitle>From Vision to Value: How We Deliver</ContentTitle>
              <p>
                Our approach to AI implementation is structured yet adaptive, ensuring we deliver solutions that create immediate value while laying the foundation for continuous improvement.
              </p>
              <ul>
                <li><strong>Strategic Assessment:</strong> We begin by understanding your business objectives, data landscape, and existing systems to identify the highest-impact opportunities for AI implementation.</li>
                <li><strong>Solution Design:</strong> Our experts design a comprehensive AI strategy and architecture tailored to your specific needs, selecting the most appropriate algorithms and technologies.</li>
                <li><strong>Data Preparation:</strong> We help you organize, clean, and enrich your data—often the most critical step in successful AI implementation.</li>
                <li><strong>Iterative Development:</strong> We develop your solution using agile methodologies, with frequent checkpoints to gather feedback and ensure alignment with your goals.</li>
                <li><strong>Integration & Deployment:</strong> We seamlessly integrate the AI solution with your existing systems and workflows, ensuring minimal disruption and maximum adoption.</li>
                <li><strong>Continuous Optimization:</strong> Post-launch, we monitor performance and continuously refine the solution to improve accuracy and adapt to changing business needs.</li>
              </ul>
              <p>
                Throughout this process, we maintain complete transparency, ensuring you understand the "how" and "why" behind our recommendations and empowering your team with the knowledge to leverage these new capabilities effectively.
              </p>
            </ContentText>
          </TwoColumnGrid>
        </Container>
      </ContentSection>
      
      <ContentSection>
        <Container>
          <CenteredContent>
            <SectionSubtitle>Outcomes</SectionSubtitle>
            <ContentTitle>Strategic Impact for Your Business</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '3rem' }}>
              Our AI-powered solutions deliver tangible, measurable outcomes that directly contribute to your strategic objectives:
            </p>
          </CenteredContent>
          
          <CardsGrid>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle>Operational Efficiency</CardTitle>
              <CardDescription>
                Reduce operational costs by 30-50% through intelligent automation of complex workflows and processes, while simultaneously improving accuracy and consistency.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardTitle>Enhanced Decision Making</CardTitle>
              <CardDescription>
                Make better decisions faster with AI-powered insights that surface patterns and opportunities invisible to traditional analysis, leading to improved business outcomes.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle>Competitive Advantage</CardTitle>
              <CardDescription>
                Gain and maintain market leadership through proprietary AI capabilities that provide unique insights, personalized customer experiences, and innovative offerings.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardTitle>Scalability</CardTitle>
              <CardDescription>
                Handle growing volumes of data and increasing business complexity without proportional increases in resources, allowing your organization to scale efficiently.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardTitle>Risk Mitigation</CardTitle>
              <CardDescription>
                Identify potential risks and issues before they materialize, allowing preemptive action and reducing the impact of unforeseen challenges on your business.
              </CardDescription>
            </Card>
            <Card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Innovation Acceleration</CardTitle>
              <CardDescription>
                Accelerate the pace of innovation by automating routine aspects of the development process and uncovering non-obvious connections and opportunities in your data.
              </CardDescription>
            </Card>
          </CardsGrid>
        </Container>
      </ContentSection>
      
      <CTASection>
        <Container>
          <CenteredContent>
            <ContentTitle>Ready to Transform Your Business with AI?</ContentTitle>
            <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>
              Let's discuss how our AI-powered solutions can address your specific challenges and opportunities. Our experts will work with you to develop a strategic roadmap tailored to your unique business needs.
            </p>
            <CTAButton href="/contact">Schedule a Strategic Consultation</CTAButton>
          </CenteredContent>
        </Container>
      </CTASection>
      
      <Footer />
    </PageContainer>
  );
};

export default AIServicePage; 