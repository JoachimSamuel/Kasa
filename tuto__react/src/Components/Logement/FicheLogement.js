import React from "react";
import Carrousel from "./carrousel";
import MyDropdown from "./dropdown";
import RatingStars from "./RatingStars";
import Tag from "./tag";

const FicheLogement = () => {
    const ratingValue = 4; // Valeur dynamique pour le rating
  
    return (
      <main>
        <Carrousel />
        <div className="fiche-details">
          <div className="location-details">
            <div className="location-title">
              <h1>Nom de la location</h1>
              <p>Lieux</p>
            </div>
            <div className="card">
              <div className="card-name">
                <p>Nom</p>
                <p>Prenom</p>
              </div>
              <p>image</p>
            </div>
          </div>
          <div className="property-info">
            <div className="tags-container">
              <Tag />
              <Tag />
              <Tag />
            </div>
            <RatingStars rating={ratingValue} />
          </div>
        </div>
        <div className="contenair-dropdown">
          <MyDropdown />
          <MyDropdown />
        </div>
      </main>
    );
  };
  
  export default FicheLogement;
  