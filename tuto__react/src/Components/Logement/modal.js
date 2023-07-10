import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Ouvrir la modale</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Titre de la modale</h2>
            <p>Contenu de la modale</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
