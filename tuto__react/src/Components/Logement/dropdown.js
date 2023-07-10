import React, { useState } from 'react';
import Arrow from "../images/arrow_back_ios-24px 2.png";

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className={`dropdown-toggle ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <p>{title}</p> {/* Utilisez le titre comme texte */}
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>
          <img src={Arrow} alt="arrow" />
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
