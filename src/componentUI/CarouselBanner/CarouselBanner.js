import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../CarouselBanner/CarouselBanner.module.css';

function CarouselBanner(data) {
    return (
        <Carousel fade style={{borderRadius: 100}}>
            {data.data.map((item) => (
                <Carousel.Item>
                    <img className={`d-block w-100 ${styles.ResponsiveImg}`} src={item.image} alt="First slide" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselBanner;
