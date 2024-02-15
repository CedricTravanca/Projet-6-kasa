import { NavLink } from "react-router-dom";
import "../css/Card.css";
import React from "react";

function Card(props){
    console.log(props)
    return(
        <NavLink to={`/logements/${props.id}`}>
            <div className="card-container">
                <img className="card-img" src={props.cover}/>
                <div className="card-title">{props.title}</div>
            </div> 
        </NavLink>  
    )
}

export default Card 