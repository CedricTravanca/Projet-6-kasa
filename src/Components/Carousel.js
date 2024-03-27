import React, {useState} from "react";
import "../css/Carousel.css";
import leftArrow from "../Assets/carouselArrowL.png"
import rightArrow from "../Assets/carouselArrowR.png"

const Carousel = ({ pictures }) => {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0); 
    const totalPictures = pictures.length;


    const nextPicture = () => {
        setCurrentPictureIndex((currentIndex) => (currentIndex + 1) % totalPictures);
};

    const prevPicture = () => {
        setCurrentPictureIndex((currentIndex) => (currentIndex - 1 + totalPictures) % totalPictures);
};

return (
    <div className="carousel">
        
        <img  src={leftArrow} className="left-arrow" alt="précédente" onClick={prevPicture}></img>
        <img  src={rightArrow} className="right-arrow" alt="suivante" onClick={nextPicture}></img>
        <img src={pictures[currentPictureIndex]} className="img-carousel" alt='images du carousel'></img>
        <div className="image-counter">{currentPictureIndex + 1}/{totalPictures}</div>

    </div>
)
};

export default Carousel;