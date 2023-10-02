import arrow from '../assets/images/arrow.svg';
import { useState } from 'react';

export const Collapse = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    e.currentTarget.classList.toggle('expanded');
  };
  return (
    <>
      <div className="collapse">
        <button className="collapse_button" onClick={toggleDropdown}>
          {title}
          <img
            src={arrow}
            alt="flèche"
            className={isOpen ? 'arrow_img' : 'arrow_img arrow_rotate'}
          ></img>
        </button>
        {isOpen && (
          <ul className="dropdown-content show">
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
