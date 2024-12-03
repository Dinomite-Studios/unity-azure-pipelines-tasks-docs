import { FunctionComponent } from 'react';
import styles from '../styles.module.css';
import Feature, { FeatureProps } from './Feature';

export interface FeaturesProps {
    features: FeatureProps[];
}

const Features: FunctionComponent<FeaturesProps> = ({
    features
}
) => {

    return (
        <section className={styles.features}>
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

export default Features;