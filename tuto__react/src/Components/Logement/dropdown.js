import React, { useState } from 'react';
import Arrow from "../images/arrow_back_ios-24px 2.png";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className={`dropdown-toggle ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <p>Sélectionner une option</p>
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}>
          <img src={Arrow} alt="arrow" />
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
}


export default Dropdown;
