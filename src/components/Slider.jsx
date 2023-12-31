import PropTypes from 'prop-types';
import { useState } from 'react';
import { Arrow } from './atoms/Arrow';
import default_house from '../assets/images/default_house.jpg';

export const Slider = ({ slides }) => {
  const [currentSlide, setCurrent] = useState(0);
  const isSlide = slides.length > 1;
  return (
    <div
      className="slider"
      style={{
        gridArea: 'image',
        backgroundImage: `url(${slides[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {isSlide && (
        <>
          <Arrow
            direction={'arrow_left'}
            currentSlide={currentSlide}
            setCurrent={setCurrent}
            slidesLength={slides.length}
          />
          <Arrow
            direction={'arrow_right'}
            currentSlide={currentSlide}
            setCurrent={setCurrent}
            slidesLength={slides.length}
          />
        </>
      )}
      <p>
        {currentSlide + 1}/{slides.length}
      </p>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array,
};

Slider.defaultProps = {
  slides: [default_house],
};
