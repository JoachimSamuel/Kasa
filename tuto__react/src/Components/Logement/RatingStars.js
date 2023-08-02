import React from 'react';

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = rating >= i ? '#FF6060' : 'gray';
      stars.push(<div key={i} className="star" style={{ backgroundColor: starColor }} />);
    }
    return stars;
  };

  return (
    <div className="stars">
      {renderStars()}
    </div>
  );
};

export default RatingStars;
