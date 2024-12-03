import { FunctionComponent } from 'react';
import Feature, { FeatureProps } from './Feature';

const FeaturesSection: FunctionComponent = () => {
    const features: FeatureProps[] = [
        {
            title: 'Save Time and Money',
            imageUrl: 'img/undraw_dev_productivity_umsq.svg',
            description: (
                <>
                    Setup is easy and fast. Get started automating your Unity builds and save precious time in a breeze! Check the <a href="/docs">documentation</a> to learn more.
                </>
            ),
        },
        {
            title: 'Improved QA',
            imageUrl: 'img/undraw_fixing_bugs_w7gi.svg',
            description: (
                <>
                    Using CI a breaking build will never surprise you again. Find issues early in development and run automated tests to improve the overall quality of your project.
                </>
            ),
        },
        {
            title: 'Free and Open Source',
            imageUrl: 'img/undraw_open_source_1qxw.svg',
            description: (
                <>
                    The extension is free to use and source code is available on <a href="https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks" target="_blank">GitHub</a>. Need a feature or found a bug? File an issue or submit a pull request!
                </>
            ),
        },
    ];

    return (
        <section className="flex items-center p-4 md:p-8">
            <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;