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
          <img src={arrow} alt="flèche" className="arrow_img"></img>
        </button>
        {isOpen && <div className="dropdown-content show">Content Here</div>}
      </div>
    </>
  );
};
