import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./carrousel";
import MyDropdown from "./dropdown";
import RatingStars from "./RatingStars";
import Tag from "./tag";

const FicheLogement = () => {
  const { id } = useParams(); // Récupère la valeur de l'ID depuis les paramètres de l'URL
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        const project = data.find(project => project.id === id);
        setProjectData(project);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  
  
  const { title, pictures, description, host, rating, location, tags } = projectData;
  console.log(projectData)

  return (
    <main>
      <Carrousel images={pictures} />
      <div className="fiche-details">
        <div className="location-details">
          <div className="location-title">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="card">
            <div className="card-name">
              <p>{host.name}</p>
            </div>
            <img src={host.picture} alt="Card" />
          </div>
        </div>
        <div className="property-info">
          <div className="tags-container">
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
          <RatingStars rating={rating} />
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
