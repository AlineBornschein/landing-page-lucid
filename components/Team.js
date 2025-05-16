import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamSection = styled.section`
  padding: 5rem 0;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamMemberCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #f3f4f6, #ffffff);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.4s ease;
    padding: 1rem;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(59, 130, 246, 0.1),
      rgba(147, 197, 253, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${TeamMemberCard}:hover & {
    img {
      transform: scale(1.05);
    }
    
    &:after {
      opacity: 1;
    }
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
  background: white;
  transition: background-color 0.3s ease;
  
  ${TeamMemberCard}:hover & {
    background-color: #f8fafc;
  }
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  ${TeamMemberCard}:hover & {
    color: var(--primary);
  }
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0;
  transition: color 0.3s ease;
`;

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'George Beard',
      position: 'Founder & Fullstack Developer',
      image: '/images/geroge.png'
    },
    {
      id: 2,
      name: 'Maya Pandit',
      position: 'Backend Developer',
      image: '/images/tim.png'
    },
    {
      id: 3,
      name: 'Simon Lau',
      position: 'Mobile Developer',
      image: '/images/maya.png'
    },
    {
      id: 4,
      name: 'Michael Redford',
      position: 'Software Architect',
      image: '/images/michael.png'
    },
    {
      id: 5,
      name: 'Bianca Smith',
      position: 'Lead Designer',
      image: '/images/bianca.png'
    },
    {
      id: 6,
      name: 'Andy Becker',
      position: 'Data Engineer',
      image: '/images/andy2.png'
    },
    {
      id: 7,
      name: 'Rushan Singh',
      position: 'Frontend Developer',
      image: '/images/rushan.png'
    },
    {
      id: 8,
      name: 'Mirta Svobodá',
      position: 'UX/UI Designer',
      image: '/images/mirta.png'
    }
  ];

  return (
    <TeamSection id="team">
      <Container>
        <SectionHeader>
          <Title>Our Team</Title>
          <Subtitle>Meet the talented individuals behind our success</Subtitle>
        </SectionHeader>
        
        <TeamGrid>
          <TeamMemberCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MemberImage>
              <img src="/images/aline3.png" alt="Aline Bornschein" />
            </MemberImage>
            <MemberInfo>
              <MemberName>Aline Bornschein</MemberName>
              <MemberPosition>Founder & Machine Learning Engineer</MemberPosition>
            </MemberInfo>
          </TeamMemberCard>

          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              viewport={{ once: true }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
              </MemberInfo>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team; 