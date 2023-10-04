import arrow from '../assets/images/arrow.svg';

export const Arrow = ({ direction }) => {
  const altText = direction === 'arrow_right' ? 'suivante' : 'précédente';
  return <img src={arrow} alt={altText} className={direction} />;
};
