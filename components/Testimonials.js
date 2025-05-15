import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
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
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 4rem;
    color: var(--primary);
    opacity: 0.1;
    font-family: Georgia, serif;
  }
`;

const CompanyName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const TestimonialText = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-style: italic;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionHeader>
          <Title>Client Success Stories</Title>
          <Subtitle>Hear what our clients have to say about working with us</Subtitle>
        </SectionHeader>
        
        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <CompanyName>Loyalty Club PLC</CompanyName>
          <TestimonialText>
            <p>
              "Working with TechNova Solutions has been an incredible experience. They took our vision for Loyalty Club PLC and brought it to life with a level of expertise, creativity, and attention to detail that exceeded our expectations. Their team developed a robust, user-friendly loyalty platform that not only looks fantastic but also works flawlessly for both our business partners and customers.
            </p>
            <p>
              Throughout the project, communication was clear, deadlines were met, and they always went the extra mile to ensure everything was exactly how we envisioned. Thanks to TechNova Solutions, we now have a powerful loyalty software that is the foundation of our business and allows us to confidently grow and expand. We couldn't be happier with the result and highly recommend them to anyone looking for a top-tier development partner."
            </p>
          </TestimonialText>
          <Author>
            <AuthorInfo>
              <h4>Tony Lewis</h4>
              <p>CEO</p>
            </AuthorInfo>
          </Author>
        </TestimonialCard>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 