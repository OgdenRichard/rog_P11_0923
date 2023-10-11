import PropTypes from 'prop-types';

export const Tag = ({ tag }) => {
  return <>{tag && <div className="tag">{tag}</div>}</>;
};

Tag.propTypes = {
  tag: PropTypes.string,
};
