import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from './home/HeroSection';

export default function Home(): JSX.Element {
  return (
    <Layout description="Save time and money by automating your Unity builds and deployments!">
      <main>
        <HeroSection />
      </main>
    </Layout>
  );
}
