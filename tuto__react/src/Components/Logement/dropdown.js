import React, { useState } from "react";


function Dropdown() {
  // state (état, données)
  const [isOpen, setIsOpen] = useState(false);

  //comportements
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //return (render)
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Sélectionner une option
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
