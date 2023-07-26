import React, { useState } from 'react';

const Carrousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="carrousel">
      {/* Bouton "Précédent" */}
      {images.length > 1 && (
        <button className="prev-btn" onClick={prevImage}>
          &#8249;
        </button>
      )}

      {/* Image courante */}
      <img
        className="carrousel-image"
        src={process.env.PUBLIC_URL + images[currentImage]}
        alt={images[currentImage].alt}
      />

      {/* Bouton "Suivant" */}
      {images.length > 1 && (
        <button className="next-btn" onClick={nextImage}>
          &#8250;
        </button>
      )}

      {/* Compteur d'images */}
      {images.length > 1 && <div className="counter">{`${currentImage + 1} / ${images.length}`}</div>}
    </div>
  );
};

export default Carrousel;
