import React, {Component} from 'react';
import Bushes from './Bushes';
import Leaves from './Leaves';

// stylesheet
import styles from '../../../scss/maintenance/maintenance.scss';

// SVG
import smallGreen from '../../../assets/images/maintenance/smallGreen.svg';
import yellow from '../../../assets/images/maintenance/yellow.svg';
import bigGreen from '../../../assets/images/maintenance/bigGreen.svg';

export default class Maintenance extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        i'm growing...
                    </div>

                    <div className={styles.subHeader}>
                        please check back soon
                    </div>
                </div>
                <div className={styles.treeContainer}>
                    <div className={styles.fakeTree} />
                    <div className={styles.firstTreeContainer}>
                        <img src={smallGreen} className={styles.smallGreen} />
                        <div className={styles.firstTree}>
                            <div className={styles.firstBranch} />
                            <div className={styles.secondBranch} />
                        </div>
                    </div>
                    <div className={styles.secondTreeContainer}>
                        <img src={yellow} className={styles.yellow} />
                        <div className={styles.secondTree}>
                            <div className={styles.firstBranch} />
                            <div className={styles.secondBranch} />
                            <div className={styles.thirdBranch} />
                        </div>
                    </div>
                    <div className={styles.thirdTreeContainer}>
                        <img src={bigGreen} className={styles.bigGreen} />
                        <div className={styles.thirdTree}>
                            <div className={styles.firstBranch} />
                            <div className={styles.secondBranch} />
                            <div className={styles.thirdBranch} />
                        </div>
                    </div>
                    <Bushes />
                    <Leaves />
                    <div className={styles.bottomLine} />
                </div>
                <p className={styles.copyright}>&copy; Graham von Oehsen 2016</p>
            </div>
        );
    }
}
