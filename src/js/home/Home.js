import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarouselActions from '../../redux/work/actions';

export default class Home extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        loaded: PropTypes.bool,
    }

    _renderHome = () => {
        return (
            <Grid className="home-main">
                <Row className="hello-container">
                    <Col
                        md={ 3 }
                        mdOffset={ 2 }
                        sm={ 3 }
                        smOffset={ 2 }
                        xs={ 8 }
                        xsOffset={ 2 }
                        className={ this.props.loaded ? 'big-hello-no' : 'big-hello' }
                        id="big-hello">
                        <h1>Hello.</h1>
                    </Col>

                    <Col
                        md={ 7 }
                        sm={ 7 }
                        xs={ 12 }
                        className={ this.props.loaded ? 'little-hello-no' : 'little-hello' }>
                        <h1>Welcome to my world</h1>
                    </Col>
                </Row>

                <Row className={ this.props.loaded ? 'icon-row-no' : 'icon-row' }>
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
        return this._renderHome();
    }
}

function mapStateToProps(state) {
    return {
        loaded: state.carousel.loaded,
    };
}

export default connect(mapStateToProps)(Home);
