import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ClientsSection = styled.section`
  padding: 6rem 0;
  background-color: var(--light);
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

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ClientCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ClientLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  font-weight: 700;
  font-size: 1.25rem;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(77, 127, 255, 0.1) 0%,
    rgba(0, 112, 243, 0.05) 100%
  );
  backdrop-filter: blur(2px);
  pointer-events: none;
`;

const TestimonialsContainer = styled.div`
  margin-top: 4rem;
  position: relative;
  padding: 2rem;
  overflow: hidden;
`;

const TestimonialsWrapper = styled.div`
  position: relative;
  padding: 4rem 0;
  perspective: 1000px;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(0, 112, 243, 0.02) 0%, 
    rgba(77, 127, 255, 0.02) 100%
  );
  z-index: 1;
`;

const QuoteMark = styled(motion.span)`
  position: absolute;
  font-size: 7rem;
  font-family: 'Georgia', serif;
  background: linear-gradient(135deg, var(--primary) 0%, #4d7fff 50%, #6d9fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.12;
  line-height: 1;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.08));
  z-index: 1;
`;

const Testimonial = styled(motion.div)`
  background-color: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  max-width: 800px;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
`;

const TestimonialContent = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  margin: 2.5rem 3rem;
  color: var(--dark);
  font-style: italic;
  white-space: pre-wrap;
  position: relative;
  z-index: 2;
`;

const TestimonialAuthor = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--dark);
  font-size: 1.25rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.125rem;
  color: var(--dark);
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.875rem;
  color: var(--gray);
`;

const clients = [
  { id: 1, name: 'TechCorp' },
  { id: 2, name: 'InnoSystems' },
  { id: 3, name: 'GlobalFin' },
  { id: 4, name: 'MediaPulse' },
  { id: 5, name: 'HealthNet' },
  { id: 6, name: 'EduLearn' },
  { id: 7, name: 'RetailPro' },
  { id: 8, name: 'TravelWise' },
  { id: 9, name: 'FoodDelight' },
  { id: 10, name: 'EcoTech' },
];

const testimonial = {
  content: "Working with TechNova has been an incredible experience. They took our vision for Loyalty Club PLC and brought it to life with a level of expertise, creativity, and attention to detail that exceeded our expectations. Their team developed a robust, user-friendly loyalty platform that not only looks fantastic but also works flawlessly for both our business partners and customers.\n\nThroughout the project, communication was clear, deadlines were met, and they always went the extra mile to ensure everything was exactly how we envisioned. Thanks to TechNova, we now have a powerful loyalty software that is the foundation of our business and allows us to confidently grow and expand. We couldn't be happier with the result and highly recommend them to anyone looking for a top-tier development partner.",
  author: {
    name: "Tony Lewis",
    role: "CEO, Loyalty Club PLC"
  }
};

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const testimonialVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -10
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const authorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.3,
        duration: 0.5 
      }
    }
  };

  const quoteVariants = {
    hidden: (isLeft) => ({ 
      opacity: 0,
      x: isLeft ? -40 : 40,
      y: isLeft ? -40 : 40,
      scale: 0.5,
      rotate: isLeft ? -15 : 15
    }),
    visible: { 
      opacity: 0.12,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const generateBubbles = (count, position) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${position}-${i}`,
      size: Math.random() * 100 + 50, // 50-150px
      delay: i * 0.1,
      duration: Math.random() * 1.5 + 2, // 2-3.5s for slightly slower upward movement
      position,
      ...(position === 'top-left' 
        ? {
            x: Math.random() * 200 - 100, // Spread X: -100 to +100
            y: Math.random() * 400 + 200, // Y spread: 200-600px downward
          }
        : {
            x: Math.random() * -300, // Spread X: -300 to 0 (leftward)
            y: Math.random() * -500 - 100, // Y spread: -600 to -100 (upward)
          }
      )
    }));
  };

  const bubbleVariants = {
    hidden: bubble => ({
      opacity: 0,
      scale: 0,
      ...(bubble.position === 'top-left'
        ? { x: -50, y: -50 }
        : { x: 50, y: 50 }
      )
    }),
    visible: bubble => ({
      opacity: [0, 0.5, 0],
      scale: [0, 1, 1.2],
      x: bubble.position === 'top-left' 
        ? [0, bubble.x]
        : [0, bubble.x],
      y: bubble.position === 'top-left'
        ? [0, bubble.y]
        : [0, bubble.y],
      transition: {
        duration: bubble.duration,
        delay: bubble.delay,
        ease: bubble.position === 'top-left' ? "easeOut" : "easeIn",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0.5
      }
    })
  };

  const topLeftBubbles = generateBubbles(8, 'top-left');
  const bottomRightBubbles = generateBubbles(12, 'bottom-right'); // More bubbles from bottom
  const allBubbles = [...topLeftBubbles, ...bottomRightBubbles];

  return (
    <ClientsSection id="clients">
      <Container>
        <SectionHeader>
          <Title>Our Clients</Title>
          <Subtitle>
            Trusted by leading companies across various industries
          </Subtitle>
        </SectionHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ClientsGrid>
            {clients.map((client) => (
              <ClientCard key={client.id} variants={itemVariants}>
                <ClientLogo>
                  {client.name}
                </ClientLogo>
              </ClientCard>
            ))}
          </ClientsGrid>
        </motion.div>
        
        <TestimonialsContainer>
          {allBubbles.map(bubble => (
            <Bubble
              key={bubble.id}
              custom={bubble}
              variants={bubbleVariants}
              initial="hidden"
              animate={testimonialInView ? "visible" : "hidden"}
              style={{
                width: bubble.size,
                height: bubble.size,
                ...(bubble.position === 'top-left'
                  ? { left: "10%", top: "10%" }
                  : { right: "5%", bottom: "5%" } // Adjusted position
                )
              }}
            />
          ))}
          
          <SectionHeader
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>What Our Clients Say</Title>
            <Subtitle>
              Hear from the businesses we've helped succeed
            </Subtitle>
          </SectionHeader>
          
          <TestimonialsWrapper>
            <Testimonial
              ref={testimonialRef}
              variants={testimonialVariants}
              initial="hidden"
              animate={testimonialInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <QuoteMark
                custom={true}
                variants={quoteVariants}
                initial="hidden"
                animate={testimonialInView ? "visible" : "hidden"}
                style={{ top: '1rem', left: '1.5rem' }}
              >
                "
              </QuoteMark>
              <TestimonialContent>
                {testimonial.content}
              </TestimonialContent>
              <QuoteMark
                custom={false}
                variants={quoteVariants}
                initial="hidden"
                animate={testimonialInView ? "visible" : "hidden"}
                style={{ bottom: '1rem', right: '1.5rem' }}
              >
                "
              </QuoteMark>
              <TestimonialAuthor
                variants={authorVariants}
                initial="hidden"
                animate={testimonialInView ? "visible" : "hidden"}
              >
                <AuthorImage>
                  {testimonial.author.name.split(' ').map(name => name[0]).join('')}
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>{testimonial.author.name}</AuthorName>
                  <AuthorRole>{testimonial.author.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </Testimonial>
          </TestimonialsWrapper>
        </TestimonialsContainer>
      </Container>
    </ClientsSection>
  );
};

export default Clients; 