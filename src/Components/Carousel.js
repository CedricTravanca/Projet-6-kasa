import React, {useState} from "react";
import dataHebergements from "../data.json";
import "../css/Carousel.css";
import leftArrow from "../Assets/carouselArrowL.png"
import rightArrow from "../Assets/carouselArrowR.png"

const Carousel = ({ pictures }) => {
    
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0); 
    const totalPictures = pictures.length;


    const nextPicture = () => {

};

    const prevPicture = () => {

};

return (
    <div className="carousel">
        <img src={leftArrow} className="left-arrow"></img>
        <img src={rightArrow} className="right-arrow"></img>


    </div>
)
}
export default Carousel;