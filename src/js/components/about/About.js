import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../header/Footer';

import me from '../../../images/me.jpg';

// const me = require('../../images/me.jpg');

export default class About extends Component {
    renderAbout = () => {
        return (
            <Grid className="about-main">
                <Row>
                    <Col md={ 12 } className="about-img">
                        <img src={ me } alt="Graham von Oehsen" />
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        <h2>Developer | Designer | Musician</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 } mdOffset={ 3 }>
                        <p>
                            <span>M</span>y name is Graham von Oehsen, and I am a front-end
                            developer and designer based in Athens, GA. I am passionate about
                            creating simple, beautiful interfaces for the web.
                        </p>

                        <p>
                            I've been programming since I was in high school, but I've spent the
                            past 2.5 years honing my web development skills working on social media
                            tracking and eCommerce applications.
                        </p>

                        <p>
                            I most recently was a front-end developer for the Athens, GA based
                            start-up <a href="https://www.sellerlabs.com/">Seller Labs</a>. I
                            worked in an agile environment designing and programming features for
                            &nbsp;<a href="https://www.snagshout.com/">Snagshout</a>, a marketplace
                            for Amazon sellers to attract new customers.
                        </p>

                        <p>
                            I have strong HTML, CSS, and JavaScript skills and am always looking to
                            learn new technologies to enhance my ability. You can check out my
                            experience and qualifications on
                            &nbsp;<a href="https://www.linkedin.com/in/graham-von-oehsen-2067b776">
                                LinkedIn
                            </a>.
                        </p>

                        <p>
                            I'm also very interested in music creation and production. I can play
                            4 instruments (guitar, bass, drums, keys) and enjoy writing original
                            music. I will probably be posting samples of my music and/or mixtapes
                            of songs that I like on this page in the near future.
                        </p>

                        <p>
                            If you want to get in touch with me about collborating or just to chat
                            feel free to follow me on any of my social accounts or just send me an
                            &nbsp;<a href="mailto:grahamvo@gmail.com">email</a>.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 12 }>
                        <div className="divider" />
                    </Col>
                </Row>

                <Footer />
            </Grid>
        );
    }

    render() {
        return this.renderAbout();
    }
}
