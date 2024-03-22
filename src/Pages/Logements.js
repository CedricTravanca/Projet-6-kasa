import React from "react";
import "../css/Logement.css"
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../Components/Carousel";
import dataHebergements from "../data.json";
import Collapse from "../Components/Collapse";
import Rating from "../Components/Rating";


function Logements(){
    const {id} = useParams()
    const apartment = dataHebergements.find(apartment => apartment.id === id);
    const tagHebergement = apartment.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>);
    
    if (!apartment) {
        return <Navigate to="*" replace />;
      }

    return(
        <div className="apartment-page">
            <Carousel pictures= {apartment.pictures}/>
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
                <Rating rating={apartment?.rating}/>
                </div>
                </div>
            <div className="apartment-descriptions">
                <Collapse title="Description" content={apartment?.description}/>
                <Collapse title="Equipements" content={apartment?.equipments}/>
            </div>   
        </div>   
    )
}


 export default Logements