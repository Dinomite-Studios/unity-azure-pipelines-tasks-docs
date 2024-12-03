import { FunctionComponent } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const HeroBannerSection: FunctionComponent = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary text-center p-12 md:p-24')}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className="flex items-center justify-center">
                    <Link
                        className={clsx('button button--outline button--secondary button--lg')}
                        to={useBaseUrl('docs/')}>
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HeroBannerSection;