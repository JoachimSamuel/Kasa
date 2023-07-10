import React from "react";
import { Link } from 'react-router-dom';

function Carte({ carteId, title, cover }) {
  return (
    <div className="carte">
      <Link to={`/fiche-logement/${carteId}`}>
        <img src={cover} alt="Image de la location" />
        <span className="carte-titre">{title}</span>
      </Link>
    </div>
  );
}

export default Carte;
