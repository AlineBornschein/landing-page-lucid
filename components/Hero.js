import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
`;

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  max-width: 650px;
  color: white;
  padding-top: 6rem;

  @media (max-width: 1024px) {
    padding-top: 10rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: white;
  color: var(--primary);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const HeroImage = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  z-index: 5;
  
  @media (max-width: 1024px) {
    display: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom right;
  }
`;

const HeroContent = styled.div`
  color: white;
  max-width: 600px;
  position: relative;
  z-index: 2;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 45%;
  max-width: 500px;
  z-index: 1;
  opacity: 0.8;
  mix-blend-mode: screen;
  border-radius: 24px;
  overflow: hidden;
  height: 350px;

  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(var(--primary-rgb), 0.15),
      transparent 70%
    );
    border-radius: 32px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 24px;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: '/images/dashboard2.png',
      alt: 'Dashboard Interface'
    },
    {
      src: '/images/startup_meeting.png',
      alt: 'Startup Meeting'
    },
    {
      src: '/images/hipster_phone.png',
      alt: 'Hipster Phone'
    },
    {
      src: '/images/city_asia_phone.png',
      alt: 'City Asia Phone'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      opacity: 0,
      scale: 1.05,
    })
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      rotate: [0, -1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowAnimation = {
    initial: { opacity: 0.8, scale: 1 },
    animate: {
      opacity: [0.8, 0.9, 0.8],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    whileHover: { 
      scale: 1.05,
      opacity: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundShapes>
        <Shape
          style={{ top: '10%', left: '10%', width: '300px', height: '300px' }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <Shape
          style={{ top: '60%', left: '20%', width: '150px', height: '150px' }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <Shape
          style={{ top: '30%', right: '20%', width: '200px', height: '200px' }}
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </BackgroundShapes>
      
      {/* Uncomment and add your hero image
      <HeroImage
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src="/hero-image.png" alt="Hero" />
      </HeroImage>
      */}
      
      <Container>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building Intelligent Solutions for the Digital Age
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine cutting-edge technology with creative problem-solving to deliver software that transforms businesses and delights users.
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton href="#contact">Get Started</PrimaryButton>
            <SecondaryButton href="#services">Explore Services</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        
        <ImageContainer
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          variants={glowAnimation}
        >
          <ImageWrapper
            variants={floatingAnimation}
          >
            {images.map((image, index) => (
              <ImageLayer
                key={image.src}
                custom={index === 0 ? -1 : 1}
                variants={slideVariants}
                initial="enter"
                animate={index === activeImage ? "center" : "exit"}
                exit="exit"
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 1 },
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={500}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 45vw"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 4px 30px rgba(0, 0, 0, 0.2))',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '24px',
                  }}
                />
              </ImageLayer>
            ))}
          </ImageWrapper>
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero; 