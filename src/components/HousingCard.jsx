import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import default_house from '../assets/images/default_house.jpg';

export const HousingCard = ({ id, title, cover }) => {
  return (
    <>
      {id.length && (
        <Link to={`${id}`}>
          <figure
            className="housing__card"
            style={{
              gridArea: 'image',
              backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.15), 
              rgba(0, 0, 0, 0.15)
            ),url(${cover})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <figcaption>{title}</figcaption>
          </figure>
        </Link>
      )}
    </>
  );
};

HousingCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  cover: PropTypes.string,
};

HousingCard.defaultProps = {
  cover: default_house,
};
