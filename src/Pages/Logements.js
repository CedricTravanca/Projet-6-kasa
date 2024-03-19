import React from "react";
import "../css/Logement.css"
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../Components/Carousel";
import dataHebergements from "../data.json";
import Collapse from "../Components/Collapse";
import starActive from "../Assets/star-active.png";
import starInactive from "../Assets/star-inactive.png";


function Logements(){
    const {id} = useParams()
    console.log(id)
    const apartment = dataHebergements.find(apartment => apartment.id === id);
    console.log(apartment)

    const tagHebergement = apartment.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>);
    
    if (!apartment) {
        return <Navigate to="*" replace />;
      }

      function afficherNoteSur5(rating) {
        // Nombre maximum d'étoiles
        const maxStars = 5;
    
        // Sélectionner l'élément où les étoiles seront affichées
        const $rating = document.getElementsByClassName("host-rate");
    
        // Vider l'élément si déjà rempli
        $rating.innerHTML = '';
    
        // Ajouter les étoiles
        for (let i = 1; i <= maxStars; i++) {
            const img = document.createElement('img');
            img.id = 'star-' + i;
            img.src = i <= rating ? {starActive} : {starInactive};
            $rating.appendChild(img);
            console.log(img)
        }
    }


    return(
        <div className="apartment-page">
            <Carousel />
            <div className="apartment-container">
                
                <div className="apartment-info">
                    <span className="apartment-title">{apartment?.title}</span>
                    <span className="apartment-location">{apartment?.location}</span>
                    <div className="tags">
                        {tagHebergement}
                    </div>
                </div>
                <div className="host-space">
                    <div className="host-info">
                        <span className="host-name">{apartment?.host.name}</span>
                        <img className="host-picture" src={apartment?.host.picture} alt="Photo de l'Hôte"></img>
                    </div>    
                <div className="host-rate">{afficherNoteSur5}</div>
                </div>
                </div>
            <div className="apartment-descriptions">
                <Collapse title="Description" content={apartment?.description}/>
                <Collapse title="Equipements" content={apartment?.equipements}/>
            </div>   
        </div>   
    )
}


 export default Logements