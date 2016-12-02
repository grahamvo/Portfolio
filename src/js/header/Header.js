import React, { Component, PropTypes } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Header extends Component {
    static propTypes = {
        page: PropTypes.string,
    }

    _renderHeader = () => {
        const page = this.props.page;

        return (
            <Grid className="header-main">
                <Row>
                    <Col md={ 3 } sm={ 4 } className="name">
                        <Link to="/">Graham von Oehsen</Link>
                    </Col>

                    <Col md={ 9 } sm={ 8 } xs={ 12 } className="left-links">
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className={ page === '/' ? 'active' : null }>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={ page === '/about' ? 'active' : null }>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/work"
                                        className={ page === '/work' ? 'active' : null }>
                                        Work
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Grid>
        );
    }

    render() {
        return this._renderHeader();
    }
}

function mapStateToProps(state) {
    if (state.routing.locationBeforeTransitions) {
        return {
            page: state.routing.locationBeforeTransitions.pathname,
        };
    }

    return {
        page: '/',
    };
}

export default connect(mapStateToProps)(Header);
