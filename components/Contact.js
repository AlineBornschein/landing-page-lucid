import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Script from 'next/script';

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: var(--primary);
    color: white;
  }
`;

const TallyFormWrapper = styled(motion.div)`
  background-color: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
  min-height: 550px;
  overflow: hidden;
`;

const AnimatedHeroBanner = styled(motion.section)`
  width: 100%;
  min-height: 600px;
  background: linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)),
              url('/images/developer-workspace.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 480px;
  }
`;

const AnimatedHeroOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 41, 59, 0.2);
  z-index: 1;
  backdrop-filter: blur(1px);
`;

const AnimatedHeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 700px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimatedHeroTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const AnimatedHeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.2rem;
  opacity: 0.95;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const AnimatedHeroButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: #ff9900;
  color: #fff;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  border: none;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  cursor: pointer;
  &:hover {
    background: #e67c00;
    transform: translateY(-2px) scale(1.04);
  }
`;

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleHeroClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <AnimatedHeroBanner
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <AnimatedHeroOverlay />
        <AnimatedHeroContent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedHeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We can transform your digital journey
          </AnimatedHeroTitle>
          <AnimatedHeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Start the conversation today
          </AnimatedHeroSubtitle>
          <AnimatedHeroButton
            onClick={handleHeroClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact us <FaArrowRight />
          </AnimatedHeroButton>
        </AnimatedHeroContent>
      </AnimatedHeroBanner>
      <ContactSection id="contact">
        <Container>
          <SectionHeader>
            <Title>Get In Touch</Title>
            <Subtitle>Have a question or want to work together? Reach out to us!</Subtitle>
          </SectionHeader>
          
          <ContactGrid>
            <TallyFormWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {isClient ? (
                <>
                  <Script 
                    src="https://tally.so/widgets/embed.js" 
                    strategy="afterInteractive"
                    onLoad={() => {
                      if (typeof window !== 'undefined' && window.Tally) {
                        window.Tally.loadEmbeds();
                      }
                    }}
                  />
                  <iframe 
                    data-tally-src="https://tally.so/embed/np9Xr1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Contact Form"
                    style={{ minHeight: '500px' }}
                  />
                </>
              ) : (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  minHeight: '500px',
                  color: '#64748b'
                }}>
                  Loading contact form...
                </div>
              )}
            </TallyFormWrapper>
            
            <ContactInfo>
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </IconWrapper>
                <InfoContent>
                  <h3>Call Us</h3>
                  <p><a href="tel:+4917681417544">+49 176 8141 7544</a></p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </IconWrapper>
                <InfoContent>
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@lucidcodelabs.com">info@lucidcodelabs.com</a></p>
                </InfoContent>
              </InfoItem>
              
              <SocialLinks>
                <SocialIcon href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialIcon>
              </SocialLinks>
            </ContactInfo>
          </ContactGrid>
        </Container>
      </ContactSection>
    </>
  );
};

export default Contact; 