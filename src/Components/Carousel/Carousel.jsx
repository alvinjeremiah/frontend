import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img1 from '../Assets/picture1.jpg'
import img2 from '../Assets/picture2.JPG'
import img3 from '../Assets/picture3.jpg'


const Carousel = () => {
  return (
    <div className="carousel-container">
      <ReactCarousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div>
          <img src={img1} alt="Slide 1" />
          <p className="legend">Shop</p>
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
          <p className="legend">View More</p>
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
          <p className="legend">Apply</p>
        </div>
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
