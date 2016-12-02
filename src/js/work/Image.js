import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import CarouselActions from '../../redux/work/actions';

export default class Image extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        image: PropTypes.string,
        location: PropTypes.string,
        id: PropTypes.number,
    }

    _handleClick = () => {
        document.getElementById('carousel-main').style.height = '100%';
        this.props.dispatch(CarouselActions.toggleCarousel(true, this.props.id));
    }

    _renderImage = () => {
        return (
            <Col md={ 4 } sm={ 6 } className="img-feature">
                <img
                    src={ this.props.image }
                    alt={ this.props.location }
                    onClick={ this._handleClick } />
            </Col>
        );
    }

    render() {
        return this._renderImage();
    }
}
