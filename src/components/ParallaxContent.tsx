import React, { useRef } from 'react'

import { ScrollParallax } from 'react-just-parallax';

import { Image } from 'astro:assets';
import img1 from "../assets/images/IMG-032.jpg";


const ParallaxContent: React.FunctionComponent<{
    direction?: "reverse" | null,
    textStrength: number,
    imageStrength: number
}> = ({
    direction,
    imageStrength,
    textStrength
}) => {
        const wrapper = useRef()
        return (
            <div className={`wrapper flex flex-col-reverse ${direction === 'reverse' ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-8 mt-20 overflow-hidden items-center px-4`}>
                <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl parallax-image">
                    <ScrollParallax enableOnTouchDevice={true} shouldPause strength={imageStrength} scrollContainerRef={wrapper}>
                        <img src={img1.src} alt="" className="w-full h-full object-cover" />
                    </ScrollParallax>
                </div>
                <ScrollParallax enableOnTouchDevice={false} shouldPause strength={textStrength}>
                    <div className="w-full lg:p-8 parallax-text">
                        <h4 className="text-white text-3xl mb-4">Climb Kilimanjaro</h4>
                        <p className="text-white/75">
                            Conquer the heights of Africa with guided treks to the majestic
                            peaks of Kilimanjaro and Mount Meru. Whether you seek the
                            challenge of Africa’s highest summit or the breathtaking views of
                            Meru, our expert guides ensure a safe and unforgettable ascent,
                        </p>
                    </div>
                </ScrollParallax>
            </div>
        )
    }

export default ParallaxContent