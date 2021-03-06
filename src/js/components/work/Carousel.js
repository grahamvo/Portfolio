import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import CarouselActions from '../../redux/work/actions';

export default class Carousel extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        carousel: PropTypes.object,
        imgArray: PropTypes.array
    }

    handleClose = () => {
        document.getElementById('carousel-main').style.height = '0%';
        this.props.dispatch(CarouselActions.toggleCarousel(false, this.props.carousel.id));
    };

    handleLeftClick = () => {
        const id = this.props.carousel.id;
        const size = this.props.imgArray.length - 1;

        if (id === 0) {
            this.props.dispatch(CarouselActions.changeId(size));
        } else {
            this.props.dispatch(CarouselActions.changeId(id - 1));
        }
    };

    handleRightClick = () => {
        const id = this.props.carousel.id;
        const size = this.props.imgArray.length - 1;

        if (id === size) {
            this.props.dispatch(CarouselActions.changeId(0));
        } else {
            this.props.dispatch(CarouselActions.changeId(id + 1));
        }
    };

    renderCarousel = () => {
        const id = this.props.carousel.id;
        return (
            <Row className="carousel-main" id="carousel-main">
                <i id="close" className="fa fa-times" onClick={ this.handleClose } />
                <Col
                    md={ 2 }
                    sm={ 2 }
                    xsHidden
                    className="left-col"
                    onClick={ this.handleLeftClick }>
                    <i className="fa fa-chevron-left" onClick={ this.handleLeftClick } />
                </Col>

                <Col md={ 8 } sm={ 8 } xs={ 12 }>
                    <div className="carousel-content">
                        <img src={ this.props.imgArray[id] } alt={ id } />
                    </div>
                </Col>

                <Col
                    md={ 2 }
                    sm={ 2 }
                    xsHidden
                    className="right-col"
                    onClick={ this.handleRightClick }>
                    <i className="fa fa-chevron-right" onClick={ this.handleRightClick } />
                </Col>
            </Row>
        );
    };

    render() {
        return this.renderCarousel();
    }
}
