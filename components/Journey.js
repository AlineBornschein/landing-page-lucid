import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const JourneySection = styled.section`
  padding: 6rem 0;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
`;

const ProcessSteps = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 24px;
    width: 4px;
    background-color: var(--light-gray);
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const StepLeft = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
`;

const StepRight = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const StepContentLeft = styled.div`
  position: relative;
  margin-left: 56px;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
  
  @media (min-width: 768px) {
    width: 45%;
    margin-left: 0;
    margin-right: auto;
  }
`;

const StepContentRight = styled.div`
  position: relative;
  margin-left: 56px;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
  
  @media (min-width: 768px) {
    width: 45%;
    margin-left: auto;
    margin-right: 0;
  }
`;

const StepNumberLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  z-index: 3;
  
  @media (min-width: 768px) {
    left: auto;
    right: 50%;
    transform: translateX(50%);
  }
`;

const StepNumberRight = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  z-index: 3;
  
  @media (min-width: 768px) {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const StepDescription = styled.p`
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const ActionButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 15px rgba(37, 99, 235, 0.3);
  }
`;

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by understanding your business, goals, and challenges. Through in-depth discussions and research, we identify the opportunities where technology can create the most impact."
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description: "Based on our discovery findings, we create a comprehensive plan that outlines the technical approach, timeline, and resources needed to achieve your objectives."
  },
  {
    id: 3,
    title: "Design & Development",
    description: "Our team of experts designs and develops your solution with a focus on quality, scalability, and user experience, keeping you involved throughout the process."
  },
  {
    id: 4,
    title: "Testing & Refinement",
    description: "We rigorously test every aspect of your solution to ensure it meets our high standards for performance, security, and usability, making refinements as needed."
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "After a successful launch, we provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolve with your business needs."
  }
];

const Journey = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getStepAnimationProps = (index, isLeft) => {
    return {
      initial: { opacity: 0, x: isLeft ? -50 : 50 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { duration: 0.8, delay: index * 0.2 }
    };
  };

  return (
    <JourneySection id="journey">
      <Container>
        <SectionHeader>
          <Title>Your Journey With Us</Title>
          <Subtitle>
            A seamless process designed to transform your vision into reality
          </Subtitle>
        </SectionHeader>
        
        <ProcessSteps ref={ref}>
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            if (isEven) {
              return (
                <StepLeft 
                  key={step.id}
                  {...getStepAnimationProps(index, true)}
                >
                  <StepNumberLeft>{step.id}</StepNumberLeft>
                  <StepContentLeft>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContentLeft>
                </StepLeft>
              );
            } else {
              return (
                <StepRight 
                  key={step.id} 
                  {...getStepAnimationProps(index, false)}
                >
                  <StepNumberRight>{step.id}</StepNumberRight>
                  <StepContentRight>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContentRight>
                </StepRight>
              );
            }
          })}
        </ProcessSteps>
        
        <CallToAction>
          <ActionButton 
            href="#contact"
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Start Your Journey Today
          </ActionButton>
        </CallToAction>
      </Container>
    </JourneySection>
  );
};

export default Journey; 