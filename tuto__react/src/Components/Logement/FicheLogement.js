import React from "react";
import Carrousel from "./carrousel";
import MyDropdown from "./dropdown";
import RatingStars from "./RatingStars";
import Tag from "./tag";

export default function FicheLogement() {
  return (
    <main>
      <Carrousel />
      <div>
        <div>
          <h1>Nom de la location</h1>
          <p>Lieux</p>
          <div className="card">
            <div className="card-name">
              <p>Nom</p>
              <p>Prenom</p>
            </div>
            <p>image</p>
          </div>
          <RatingStars rating={4} />  
        </div>
        <Tag />
        <Tag />
        <Tag />
      </div>
      <MyDropdown />
      <MyDropdown />
    </main>
  );
}


// rating{}  permet dechanger la couleur des étoile. Pour la mise ne place changer les chiifre dynamiquement 