import React from "react";
import { Link } from 'react-router-dom';

function Carte() {
  return (
    <Link to="/fiche-logement">
        <div className="carte">
            <img src="" alt="Image de la location" />
            <span className="carte-titre">Titre de la location</span>
        </div>
    </Link>
  );
}

export default Carte;
