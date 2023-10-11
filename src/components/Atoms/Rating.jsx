import PropTypes from 'prop-types';
import star_active from '../../assets/images/star_active.svg';
import star_grey from '../../assets/images/star_grey.svg';

export const Rating = ({ rating }) => {
  const nb_inactive = 5 - rating;
  const active_array = Array.from({ length: rating }, () => true);
  const inactive_array = Array.from({ length: nb_inactive }, () => false);
  const rating_array = [...active_array, ...inactive_array];
  return (
    <>
      <div className="details_rating">
        {rating_array.map((is_active, index) => (
          <img
            key={index}
            src={is_active ? star_active : star_grey}
            alt={is_active ? 'étoile active' : 'étoile désactivée'}
            className="rating_star"
          />
        ))}
      </div>
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
