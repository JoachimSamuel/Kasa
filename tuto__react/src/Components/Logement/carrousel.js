import React, { useState } from 'react';

const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="carrousel">
      {/* Bouton "Précédent" */}
      <button className="prev-btn" onClick={prevImage}>
        &#8249;
      </button>

      {/* Image courante */}
      <img className="carrousel-image" src={images[currentImage].src} alt={images[currentImage].alt} />

      {/* Bouton "Suivant" */}
      <button className="next-btn" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

export default Carrousel;