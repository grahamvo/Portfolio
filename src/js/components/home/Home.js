import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
// import CarouselActions from '../../redux/work/actions';

// stylesheet
import styles from '../../../scss/home/_home.scss';

class Home extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        loaded: PropTypes.bool,
    }

    renderHome = () => {
        return (
            <Grid className={styles.homeMain}>
                <Row className={styles.helloContainer}>
                    <Col
                        lgOffset={ 2 }
                        lg={ 3 }
                        md={ 3 }
                        mdOffset={ 2 }
                        sm={ 3 }
                        smOffset={ 2 }
                        xs={ 8 }
                        xsOffset={ 2 }
                        className={ this.props.loaded ? styles.bigHelloNo : styles.bigHello }
                        id="big-hello">
                        <h1>Hello.</h1>
                    </Col>

                    <Col
                        lg={ 7 }
                        md={ 7 }
                        sm={ 7 }
                        xs={ 12 }
                        className={ this.props.loaded ? styles.littleHelloNo : styles.littleHello }>
                        <h1>Welcome to my world</h1>
                    </Col>
                </Row>

                <Row className={ this.props.loaded ? styles.iconRowNo : styles.iconRow }>
                    <Col md={ 12 }>
                        <a href="https://twitter.com/grahamvo" target="_blank">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="https://github.com/grahamvo" target="_blank">
                            <i className="fa fa-github" />
                        </a>
                        <a href="https://www.instagram.com/grahamvo/" target="_blank">
                            <i className="fa fa-instagram" />
                        </a>
                        <a href="mailto:grahamvo@gmail.com">
                            <i className="fa fa-envelope" />
                        </a>
                    </Col>
                </Row>
            </Grid>
        );
    }

    render() {
        return this.renderHome();
    }
}

function mapStateToProps(state) {
    return {
        loaded: state.carousel.loaded,
    };
}

export default connect(mapStateToProps)(Home);
