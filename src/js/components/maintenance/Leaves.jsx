import React from 'react';
import LeafData from './LeafData';

import styles from '../../../scss/maintenance/maintenance.scss';

const drawLeaves = () => {
    return LeafData.map((leaf, i) => {
        const style = {
            width: leaf.size,
            height: leaf.size,
            border: `${leaf.border} solid ${leaf.color}`,
            borderRadius: '50%',
            animationDelay: `${(Math.floor(Math.random() * (1000 - 600 + 1) + 600)) / 100}s`,
        };

        const styleName = `leaf${i + 1}`;

        return (
            <div style={style} className={`${styles[styleName]}`} key={styleName} />
        );
    });
};

const leaves = () => (
    <div>
        {drawLeaves()}
    </div>
);

export default leaves;
