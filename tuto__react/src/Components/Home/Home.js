import React, { useEffect, useState } from "react";
import Carte from "./carte";
import Banner from "../banner";

function Home() {
  const [cartesData, setCartesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        setCartesData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <div className="contenair_carte">
      {cartesData.map((carte) => (
        <Carte key={carte.id} title={carte.title} cover={carte.cover} />
      ))}
      </div>
    </div>
  );
}

export default Home;
