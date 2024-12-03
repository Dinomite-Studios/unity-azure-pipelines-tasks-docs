import React from 'react';
import Layout from '@theme/Layout';
import FeaturesSection from './home/FeaturesSection';
import HeroBannerSection from './home/HeroBannerSection';

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Set up CI/CD for Unity projects powered by Azure Pipelines on Azure DevOps.">
      <HeroBannerSection />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
