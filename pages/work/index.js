import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { portfolioProjects } from '../../data/portfolioProjects';

const PageContainer = styled.div`
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --background-light: #f9fafb;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  box-sizing: border-box;
  padding: 10.5rem 2rem 4rem;
  color: white;
  text-align: center;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.55);
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
`;

const GridSection = styled.section`
  padding: 4rem 2rem 6rem;
  background: var(--background-light);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.article)`
  background: white;
  border-radius: 0.75rem;
  padding: 1.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: var(--text-dark);
  margin: 0 0 0.5rem;
  font-weight: 700;
`;

const CardTagline = styled.p`
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.55;
  margin: 0 0 1.25rem;
  flex: 1;
`;

const CardLink = styled.span`
  font-weight: 600;
  color: var(--primary);
  font-size: 0.9375rem;
`;

export default function WorkIndexPage() {
  return (
    <PageContainer>
      <Head>
        <title>Our Work — Case studies | Lucid Code Labs</title>
        <meta
          name="description"
          content="Selected client projects and case studies from Lucid Code Labs."
        />
      </Head>
      <Navbar />
      <HeroSection>
        <SectionContainer>
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>Our Work</span>
          </Breadcrumbs>
          <Title>Our Work</Title>
          <Subtitle>
            A selection of projects we have delivered—each with its own goals, constraints, and outcomes.
          </Subtitle>
        </SectionContainer>
      </HeroSection>

      <GridSection>
        <SectionContainer>
          <Grid>
            {portfolioProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CardTitle>{project.name}</CardTitle>
                  <CardTagline>{project.tagline}</CardTagline>
                  <CardLink>View case study →</CardLink>
                </Card>
              </Link>
            ))}
          </Grid>
        </SectionContainer>
      </GridSection>

      <Footer />
    </PageContainer>
  );
}
