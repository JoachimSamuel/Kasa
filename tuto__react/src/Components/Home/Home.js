import React from "react";
import Carte from './carte'; 

const Home = () => {
  return (
    <div>
      Page d'accueil
      <Carte /> {/* Utiliser le composant Carte avec une majuscule */}
    </div>
  );
};

export default Home;