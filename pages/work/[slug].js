import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  getPortfolioProjectBySlug,
  getPortfolioSlugs,
} from '../../data/portfolioProjects';

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
  line-height: 1.15;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  max-width: 720px;
  margin: 0 auto 1.75rem;
  line-height: 1.6;
  opacity: 0.92;
`;

const ExternalCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  color: var(--primary-dark);
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const BodySection = styled.section`
  padding: 4rem 2rem 2rem;
  background: white;
`;

const Prose = styled.div`
  max-width: 720px;
  margin: 0 auto 3rem;
  p {
    font-size: 1.1rem;
    line-height: 1.75;
    color: var(--text-light);
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Tag = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: var(--background-light);
  color: var(--text-dark);
  border: 1px solid #e5e7eb;
`;

const GallerySection = styled.section`
  padding: 2rem 2rem 5rem;
  background: var(--background-light);
`;

const GalleryTitle = styled.h2`
  font-size: 1.75rem;
  color: var(--text-dark);
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: 700;
`;

const GalleryGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const GalleryCell = styled.div`
  min-width: 0;
`;

const Shot = styled(motion.figure)`
  margin: 0;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
`;

const ShotImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #f1f5f9;
`;

const Caption = styled.figcaption`
  padding: 1rem 1.25rem 1.25rem;
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.5;
`;

const BottomCta = styled.div`
  text-align: center;
  padding: 3rem 2rem 4rem;
  background: white;
  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function WorkCaseStudyPage({ project }) {
  return (
    <PageContainer>
      <Head>
        <title>{`${project.name} — Case study | Lucid Code Labs`}</title>
        <meta name="description" content={project.tagline} />
      </Head>
      <Navbar />
      <HeroSection>
        <SectionContainer>
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/work">Our Work</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>{project.name}</span>
          </Breadcrumbs>
          <Title>{project.name}</Title>
          <Tagline>{project.tagline}</Tagline>
          <ExternalCta href={project.url} target="_blank" rel="noopener noreferrer">
            Visit live site ↗
          </ExternalCta>
        </SectionContainer>
      </HeroSection>

      <BodySection>
        <SectionContainer>
          <Prose>
            {project.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Prose>
          <TagsRow>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagsRow>
        </SectionContainer>
      </BodySection>

      <GallerySection>
        <SectionContainer>
          <GalleryTitle>Project gallery</GalleryTitle>
          <GalleryGrid>
            {project.screenshots.map((shot, i) => (
              <GalleryCell key={`${shot.src}-${i}`}>
                <Shot
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                >
                  <ShotImageWrap>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      style={{
                        objectFit: shot.objectFit === 'cover' ? 'cover' : 'contain',
                        objectPosition: shot.objectPosition || 'center',
                      }}
                      priority={i === 0}
                    />
                  </ShotImageWrap>
                  {shot.caption ? <Caption>{shot.caption}</Caption> : null}
                </Shot>
              </GalleryCell>
            ))}
          </GalleryGrid>
        </SectionContainer>
      </GallerySection>

      <BottomCta>
        <Link href="/work">← All our work</Link>
      </BottomCta>

      <Footer />
    </PageContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: getPortfolioSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getPortfolioProjectBySlug(params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}
