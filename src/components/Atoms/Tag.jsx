import PropTypes from 'prop-types';

export const Tag = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

Tag.propTypes = {
  tag: PropTypes.string,
};
