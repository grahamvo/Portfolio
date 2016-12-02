import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Image from './Image';
import Footer from '../header/Footer';
import Carousel from './Carousel';

const work = require.context('../../images/Examples', true, /^\.\/.*\.jpg$/);

export default class Work extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        carousel: PropTypes.object,
    }

    _renderImg = (image, location, i) => {
        return (
            <Image
                image={ image }
                location={ location }
                dispatch={ this.props.dispatch }
                id={ i } />
        );
    };

    _renderWork = () => {
        const imgArray = work.keys().map(work);

        let realImg = imgArray.map((img, i) => {
            const location = work.keys()[i];
            return this._renderImg(img, location, i);
        });

        return (
            <Grid className="img-holder">
                <Carousel
                    carousel={ this.props.carousel }
                    imgArray={ imgArray }
                    dispatch={ this.props.dispatch } />
                <Row>
                    <h2>Work</h2>
                    <h5>Screenshots and examples of various projects I've contributed to</h5>
                </Row>

                <Row>
                    { realImg }
                </Row>

                <Row>
                    <Col md={ 12 }>
                        <div className="divider" />
                    </Col>
                </Row>

                <Footer />
            </Grid>
        );
    };

    render() {
        return this._renderWork();
    }
}

function mapStateToProps(state) {
    return {
        carousel: state.carousel,
    };
}

export default connect(mapStateToProps)(Work);
