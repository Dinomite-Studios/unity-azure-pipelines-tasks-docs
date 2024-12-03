import useBaseUrl from '@docusaurus/useBaseUrl';
import { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';

export interface FeatureProps {
    imageUrl: string;
    title: string;
    description: ReactNode;
}

const Feature: FunctionComponent<FeatureProps> = ({
    imageUrl,
    title,
    description }
) => {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4')}>
            {imgUrl && (
                <div className="text--center">
                    <img className="w-48 h-48" src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Feature;