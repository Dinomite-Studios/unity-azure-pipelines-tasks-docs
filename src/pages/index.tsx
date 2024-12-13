import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from './home/HeroSection';
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <Layout description="Save time and money by automating your Unity builds and deployments!">
      <main>
        <Head>
          <meta property='og:url' content='https://www.unitydevops.com/' />
          <meta property='og:site_name' content='Unity Tools for Azure DevOps' />
          <meta property='og:title' content='Unity Tools for Azure DevOps' />
          <meta property='og:description' content='Free and open source. Save time and money by automating your Unity builds and deployments!' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='img/page-preview.png' />
        </Head>
        <HeroSection />
      </main>
    </Layout>
  );
}
