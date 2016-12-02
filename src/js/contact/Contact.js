import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Contact extends Component {
    _renderContact = () => {
        return (
            <Grid className="contact-main">
                <Row>
                    <Col md={ 10 } mdOffset={ 2 }>
                        <h4 className="status">
                            <i className="fa fa-check" />
                            &nbsp;I am currently accepting freelance or full time work.
                        </h4>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 10 } mdOffset={ 2 }>
                        <ul>
                            <li>
                                <h4>Nothing</h4>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
        );
    }

    render() {
        return this._renderContact();
    }
}
