import PropTypes from 'prop-types';

export const Banner = ({ title, image }) => {
  return (
    <div
      className="banner"
      style={{
        gridArea: 'image',
        backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.2)
          ),url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};
