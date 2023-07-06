import React from "react";
import Carte from './carte'; 
import Banner from "../banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="contenair_carte">
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
      </div>
    </div>
  );
};

export default Home;