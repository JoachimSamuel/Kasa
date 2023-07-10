import React from "react";
import { Link } from 'react-router-dom';

function Carte( { title, cover } ) {
  return (
    <Link to="/fiche-logement">
        <div className="carte">
            <img src={cover} alt="Image de la location" />
            <span className="carte-titre">{title}</span>
        </div>
    </Link>
  );
}

export default Carte;