import React from 'react';
import SliderCard from "../SliderCard/SliderCard.jsx";

const ImageSlider = () => {
    return (
        <div className={'flex items-center gap-x-10'}>
            {
                [1, 2, 3, 4].map((item, index) => (
                    <div key={index}>
                        <SliderCard id={index}/>
                    </div>
                ))
            }
        </div>
    );
};

export default ImageSlider;