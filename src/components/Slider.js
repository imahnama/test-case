import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../images/CarouselImage1.png';
import Slide2 from '../images/CarouselImage2.png';
import Slide3 from '../images/CarouselImage3.png';

export default function Slider() {
  return (
    <div className="carousel-wrapper slider">
      <Container>
        <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
          <div>
            <Image src={Slide1} responsive />
          </div>
          <div>
            <Image src={Slide2} responsive />
          </div>
          <div>
            <Image src={Slide3} responsive />
          </div>
        </Carousel>
      </Container>
    </div>
  );
}
