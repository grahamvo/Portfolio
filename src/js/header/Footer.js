import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    _renderFooter = () => {
        return (
            <Row className="icon-row-footer">
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

                <Col md={ 12 }>
                    <h5>Designed and Programmed by Graham von Oehsen</h5>
                </Col>
            </Row>
        );
    };

    render() {
        return this._renderFooter();
    }
}
