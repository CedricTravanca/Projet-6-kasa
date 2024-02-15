import React from "react";
import { useParams } from "react-router-dom";

function Logements(){
    const {id} = useParams()
   // console.log(id)
    return(

    <h1>page des logements</h1>   
    )
}


 export default Logements