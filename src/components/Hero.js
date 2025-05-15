import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroText = styled.div`
  color: white;
`;

const MainHeading = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 500px;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: white;
  color: var(--primary);
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const HeroImageContainer = styled(motion.div)`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <FloatingShapes>
        <Shape
          style={{ width: '300px', height: '300px', top: '-100px', left: '10%' }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <Shape
          style={{ width: '200px', height: '200px', top: '50%', right: '5%' }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <Shape
          style={{ width: '150px', height: '150px', bottom: '10%', left: '20%' }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </FloatingShapes>
      
      <HeroContent>
        <HeroGrid>
          <HeroText>
            <MainHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Exceptional Digital Solutions for Tomorrow
            </MainHeading>
            <SubHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We transform innovative ideas into cutting-edge software solutions that drive business growth and enhance user experiences.
            </SubHeading>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PrimaryButton
                to="services"
                smooth={true}
                duration={500}
              >
                Explore Our Services
              </PrimaryButton>
              <SecondaryButton
                to="contact"
                smooth={true}
                duration={500}
              >
                Get in Touch
              </SecondaryButton>
            </HeroButtons>
          </HeroText>
          
          <HeroImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroImage>
              {/* Placeholder for hero image */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: '80%', 
                  height: '80%',
                  top: '10%',
                  left: '10%',
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
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
              
              {/* Decorative elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: '150px',
                  height: '150px',
                  top: '20%',
                  left: '25%',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6))',
                  filter: 'blur(2px)',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  bottom: '25%',
                  right: '20%',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.6), rgba(248, 113, 113, 0.6))',
                  filter: 'blur(2px)',
                }}
                animate={{
                  rotate: [0, -360],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </HeroImage>
          </HeroImageContainer>
        </HeroGrid>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 