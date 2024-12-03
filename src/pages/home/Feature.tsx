import useBaseUrl from '@docusaurus/useBaseUrl';
import { FunctionComponent, ReactNode } from 'react';
import styles from '../styles.module.css';
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

export default Feature;