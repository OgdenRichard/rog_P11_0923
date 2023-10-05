import arrow from '../../assets/images/arrow_nav.svg';

export const Arrow = ({
  direction,
  currentSlide,
  setCurrent,
  slidesLength,
}) => {
  const changeSlide = (e) => {
    const forward = e.target.className === 'arrow_right';
    const last = currentSlide + 1 === slidesLength;
    if (!currentSlide && !forward) {
      setCurrent(slidesLength - 1);
    } else if (forward && last) {
      setCurrent(0);
    } else {
      setCurrent(() => (forward ? currentSlide + 1 : currentSlide - 1));
    }
  };
  const altText = direction === 'arrow_right' ? 'suivante' : 'précédente';
  return (
    <img
      src={arrow}
      alt={altText}
      className={direction}
      onClick={changeSlide}
    />
  );
};
