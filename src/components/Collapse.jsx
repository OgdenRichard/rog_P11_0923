import PropTypes from 'prop-types';
import arrow from '../assets/images/arrow.svg';
import { useState } from 'react';

export const Collapse = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    e.currentTarget.classList.toggle('expanded');
  };
  const validOptions = (options) => {
    if (Array.isArray(options)) {
      return options;
    } else if (options.length) {
      return [options];
    } else {
      return ['Aucun élément disponible'];
    }
  };
  return (
    <>
      <div
        className="collapse"
        style={
          isOpen
            ? { backgroundColor: '#f6f6f6' }
            : { backgroundColor: 'transparent' }
        }
      >
        <button className="collapse__button" onClick={toggleDropdown}>
          {title}
          <img
            src={arrow}
            alt="flèche"
            className={isOpen ? 'arrow_img' : 'arrow_img arrow_rotate'}
          ></img>
        </button>
        {isOpen && (
          <ul className="dropdown-content">
            {validOptions(options).map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
