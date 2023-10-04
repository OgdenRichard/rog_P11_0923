import arrow from '../assets/images/arrow.svg';
import { useState } from 'react';

export const Slider = ({ slides }) => {
  const [currentSlide, setCurrent] = useState(0);
  const changeSlide = (e) => {
    const forward = e.target.className === 'arrow_right';
    const last = currentSlide + 1 === slides.length;
    if (!currentSlide && !forward) {
      setCurrent(slides.length - 1);
    } else if (forward && last) {
      setCurrent(0);
    } else {
      setCurrent(() => (forward ? currentSlide + 1 : currentSlide - 1));
    }
  };
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
        <img
          src={arrow}
          alt="précédente"
          className="arrow_left"
          onClick={changeSlide}
        />
      )}
      {isSlide && (
        <img
          src={arrow}
          alt="suivante"
          className="arrow_right"
          onClick={changeSlide}
        />
      )}
    </div>
  );
};
