import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './global.css'
import SliderCard from "./components/SliderCard/SliderCard.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

function App() {

    return (
        <div className={'bg-[#0F0F0F] w-full h-screen flex items-center justify-center'}>
            {/*<ImageSlider/>*/}
            {/*<div className={'max-w-[390px] max-h-[844px]'}>*/}
                <SliderCard/>
            {/*</div>*/}

        </div>
    )
}

export default App
