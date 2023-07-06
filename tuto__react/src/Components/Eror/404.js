import React from "react";
import { Link } from 'react-router-dom';


export default function error() {

    // state (état, données)
  
    //comportements

    //return (render)
    return (
         <div>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>      
            <button>
                <Link to = "/">Retourner sur la page d'accueil</Link>
            </button>
        </div>
    )
}