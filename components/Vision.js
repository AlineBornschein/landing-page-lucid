import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const VisionSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to right, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const VisionContent = styled.div``;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
`;

const Preheading = styled.p`
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
`;

const VisionValues = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ValueItem = styled(motion.div)`
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ValueIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
`;

const ValueDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const VisionImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(5px);
  
  @media (min-width: 768px) {
    height: 500px;
  }
`;

const Vision = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const valueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <VisionSection id="vision">
      <BackgroundShape 
        style={{ top: '-10%', right: '-5%', width: '40%', height: '40%' }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <BackgroundShape 
        style={{ bottom: '-15%', left: '-10%', width: '50%', height: '50%' }}
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <Container>
        <VisionGrid>
          <VisionContent
            ref={contentRef}
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader>
              <Preheading>Our Vision</Preheading>
              <Title>Transforming ideas into digital excellence</Title>
              <Description>
                We're dedicated to pushing the boundaries of what's possible in the digital realm. Our vision is to create innovative software solutions that empower businesses to thrive in the digital age.
              </Description>
            </SectionHeader>
            
            <VisionValues>
              <ValueItem
                variants={valueVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ValueTitle>
                  <ValueIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </ValueIcon>
                  Innovation
                </ValueTitle>
                <ValueDescription>
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </ValueDescription>
              </ValueItem>
              
              <ValueItem
                variants={valueVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ValueTitle>
                  <ValueIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </ValueIcon>
                  Quality
                </ValueTitle>
                <ValueDescription>
                  We're committed to excellence in every aspect of our work, from code to user experience.
                </ValueDescription>
              </ValueItem>
              
              <ValueItem
                variants={valueVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ValueTitle>
                  <ValueIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </ValueIcon>
                  Collaboration
                </ValueTitle>
                <ValueDescription>
                  We work closely with our clients, building partnerships based on trust and mutual success.
                </ValueDescription>
              </ValueItem>
              
              <ValueItem
                variants={valueVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ValueTitle>
                  <ValueIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </ValueIcon>
                  User-Centric
                </ValueTitle>
                <ValueDescription>
                  We design with the end-user in mind, creating intuitive, accessible, and delightful experiences.
                </ValueDescription>
              </ValueItem>
            </VisionValues>
          </VisionContent>
          
          <VisionImage
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Placeholder for vision illustration */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px)',
                backgroundSize: '30px 30px',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            
            {/* Abstract elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: '20%',
                left: '25%',
                width: '150px',
                height: '150px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                filter: 'blur(1px)',
              }}
              animate={{
                rotate: [0, 360],
                x: [0, 20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '20%',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                filter: 'blur(1px)',
              }}
              animate={{
                rotate: [0, -180],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              style={{
                position: 'absolute',
                top: '60%',
                left: '15%',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
                filter: 'blur(1px)',
              }}
              animate={{
                rotate: [0, 180],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </VisionImage>
        </VisionGrid>
      </Container>
    </VisionSection>
  );
};

export default Vision; 