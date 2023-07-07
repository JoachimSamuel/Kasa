import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const getColor = (index) => {
    if (rating >= index) {
      return '#FF6060'; 
    } else {
      return 'gray'; 
    }
  };

  return (
    <div>
      <h1>Mon composant avec 5 étoiles</h1>
      <div>
        <FaStar color={getColor(1)} />
        <FaStar color={getColor(2)} />
        <FaStar color={getColor(3)} />
        <FaStar color={getColor(4)} />
        <FaStar color={getColor(5)} />
      </div>
    </div>
  );
};

export default RatingStars;


