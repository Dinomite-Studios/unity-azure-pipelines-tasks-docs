import { FunctionComponent } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const HeroSection: FunctionComponent = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className='h-screen relative overflow-hidden'>
            <div className='relative w-full h-full'>
                <img className='w-full h-full object-cover' src='img/home-hero.png' alt='Unity Tools for Azure Devops' />
                <div className='absolute left-0 top-0 right-0 bottom-0 hero-overlay'></div>
            </div>

            <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center flex-col">
                <h1 className="hero__title hero-title">{siteConfig.title}</h1>
                <p className="hero__subtitle hero-title">{siteConfig.tagline}</p>
                <div className="flex items-center justify-center gap-8">
                    <Link
                        className='flex items-center cursor-pointer px-8 py-4 transition-transform hover:drop-shadow-md hover:scale-105 rounded-lg hover:no-underline text-xl font-bold button-primary'
                        title='Get Started'
                        to={useBaseUrl('docs/')}>
                        Get Started
                    </Link>
                    <Link
                        className='flex items-center cursor-pointer px-8 py-4 transition-transform hover:drop-shadow-md hover:scale-105 rounded-lg hover:no-underline text-xl font-bold button-secondary'
                        title='Tutorials'
                        to='https://www.youtube.com/@dinomite-tv'>
                        Tutorials
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;