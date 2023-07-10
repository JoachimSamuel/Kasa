import React, { useState } from 'react';
import Arrow from '../images/arrow_back_ios-24px 2.png';

function Dropdown({ title, options, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLogementPage = options && options.length > 0; // Vérifie si options est défini et non vide

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className={`dropdown-toggle ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <p>{title}</p>
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>
          <img src={Arrow} alt="arrow" />
        </span>
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${isLogementPage ? 'options' : 'text'}`}>
          {isLogementPage ? (
            options.map((option, index) => (
              <p key={index}>{option}</p>
            ))
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
