import { NavLink } from "react-router-dom";
import "../Scss/Card.scss";
import React from "react";

function Card(props){
    //console.log(props)
    return(
        <NavLink to={`/logements/${props.id}`}>
            <div className="card-container">
                <img className="card-img" src={props.cover} alt={props.title}/>
                <div className="card-title">{props.title}</div>
            </div> 
        </NavLink>  
    )
}

export default Card 