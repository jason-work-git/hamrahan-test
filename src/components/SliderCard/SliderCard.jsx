import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import MenuIcon from "../../assets/icnos/menuIcon.jsx";
import ArrowLeft from "../../assets/icnos/arrowLeft.jsx";
import '../../global.css'
import CheckBox from "../../assets/icnos/checkBox.jsx";
import ArrowRightSwiper from "../../assets/icnos/arrowRightSwiper.jsx";
import ArrowLeftSwiper from "../../assets/icnos/arrowLeftSwiper.jsx";

const SliderCard = () => {
    const [counter, setCounter] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const [swiper, setSwiper] = useState(null);
    const [checkbox, setCheckbox] = useState(false);

    const images = [
        'women-1.png',
        'women-2.png',
        'women-3.png',
        'women-4.png',
        'women-5.png',
        'women-6.png',
    ]


    return (
        <div className={'bg-[#1B1B1B] w-full h-full px-5 py-6 text-white flex flex-col max-w-[390px] max-h-[844]'}>
            <div className={'cursor-pointer'}>
                <MenuIcon/>
            </div>
            <div className={'mt-9 flex flex-col'}>
                <div className={'flex items-center gap-x-2'}>
                    <ArrowLeft/>
                    <span className={'text-[18px]'}>درصد چربی بدن</span>
                </div>
                <span className={'text-[14px] mr-6'}>Body fat percentage</span>
            </div>
            <span className={'text-[14px] mt-4'}>نزدیک ترین تصویر به بدن خود را انتخاب کنید</span>

            <div className={'my-auto'}>
                <div className={'relative'}>
                    <Swiper
                        style={{direction: 'ltr'}}
                        onSwiper={(swiper) => {
                            setSwiper(swiper);
                        }}
                        onActiveIndexChange={(swiper) => {
                            console.log("active index is", swiper.activeIndex);
                            setActiveIndex(swiper.activeIndex)
                            setCounter(swiper.activeIndex + 1)
                        }}
                        className='fatPercentageSwiper'>
                        {images.map((item, index) => (
                            <SwiperSlide className={'w-full flex items-center justify-center px-5'} key={index}>
                                <img className={'w-full h-full object-contain'} src={`/src/assets/slider/${item}`}
                                     alt=""/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={'absolute top-[50%] w-full flex items-center justify-between z-10'}>
                        <button onClick={() => swiper.slideNext()}><ArrowRightSwiper/></button>
                        <button onClick={() => swiper.slidePrev()}><ArrowLeftSwiper/></button>
                    </div>
                </div>
                <div className="swiper-custom-pagination"/>

                <div className={'w-full flex items-center justify-center mt-8 mb-10'}>
                    <button onClick={() => setCheckbox(!checkbox)}>
                        {checkbox ? <CheckBox/> : <CheckBox fill={'#808080'}/>}
                    </button>
                </div>
                <div style={{direction: 'ltr'}} className="w-full flex flex-col space-y-2 p-2">
                    <input
                        value={counter}
                        onChange={() => {
                        }}
                        type="range"
                        className="w-full bg-green-400 accent-[#BED972] cursor-pointer disabled:accent-[#BED972]"
                        min="1" max="6" step="1"/>
                    <ul className="flex justify-between w-full px-[10px]">
                        {[0, 14, 18, 21, 26, 37, 44].map((item, index) => (
                            <li key={index} className="flex justify-center relative"><span
                                className="absolute">{item}</span></li>
                        ))}
                    </ul>
                </div>
                <div style={{direction: 'ltr'}}
                     className={'w-full flex items-center justify-center gap-x-2 transition-all mt-12'}>
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <span key={index}
                              className={`${activeIndex + 1 === item ? 'w-7' : 'w-2 '} h-2 bg-[#BED972] rounded-full transition-all`}></span>
                    ))}
                </div>
            </div>

            <div className={''}>
                <button disabled={!checkbox}
                        className={'disabled:border-2 disabled:text-[#B7DD66] disabled:border-[#B7DD66] disabled:bg-transparent bg-[#B7DD66] w-full h-[54px] rounded-[6px] text-black'}>
                    تایید و ادامه
                </button>
            </div>

        </div>
    );
};


export default SliderCard;