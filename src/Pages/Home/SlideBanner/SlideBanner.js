import React from 'react';
import { Carousel } from 'react-bootstrap';

const SlideBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100"
                    src="https://t4.ftcdn.net/jpg/02/82/00/75/240_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Find Your Latest Car Here</h3>
                    <p>You can find any car in vehica car house shopping center.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100"
                    src="https://t4.ftcdn.net/jpg/03/08/44/53/240_F_308445331_ZZinysRse5xOZacNTnoQqG24TAy7ftZ5.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>This is Most Of Ther Rear Car</h3>
                    <p>How the adventure and rear car in this car house.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100"
                    src="https://image.freepik.com/free-vector/high-speed-race-hatchback-car-trailing-lights-motion-effect-realistic-composition-night-city-street_1284-28805.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Find Your Perfect Car</h3>
                    <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideBanner;