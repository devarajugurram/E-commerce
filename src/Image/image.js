import React from 'react';
import Image from './slideImages/image.jpg';
import './image.css';
const ImageSlider = () => {
    return (
        <>
        <div className="image-slider">
            <img src={Image} alt="Opps Something went wrong"/>
        </div>
        </>
    );
    
}
  
export default ImageSlider;