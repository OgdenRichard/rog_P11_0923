import arrow from '../assets/images/arrow.svg';
import { useState } from 'react';

export const Collapse = ({ title }) => {
  return (
    <>
      <div className="collapse">
        <button className="collapse_button">
          {title}
          <img src={arrow} alt="flèche" className="arrow_img"></img>
        </button>
      </div>
    </>
  );
};
