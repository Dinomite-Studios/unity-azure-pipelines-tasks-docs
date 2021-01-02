import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_dev_productivity_umsq.svg',
    description: (
      <>
        Get started automating your Unity builds and save precious time in a breeze! Check the <a href="/docs">Documentation</a> to learn more.
      </>
    ),
  },
  {
    title: 'Improve your Quality Assurance',
    imageUrl: 'img/undraw_fixing_bugs_w7gi.svg',
    description: (
      <>
        Run tests on your automated builds to find bugs and other issues in your Unity based projects early and eliminate breaking builds in your production environment.
      </>
    ),
  },
  {
    title: 'Free and Open Source',
    imageUrl: 'img/undraw_open_source_1qxw.svg',
    description: (
      <>
        The extension is free to use and source code is available on <a href="https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks" target="_blank">GitHub</a>. Need a feature or found a bug? File an issue or implement it yourself!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="Set up CI/CD for Unity projects powered by Azure Pipelines on Azure DevOps.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
