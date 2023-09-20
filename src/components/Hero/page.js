'use client'
import { MENULINKS, TYPED_STRINGS } from '@/app/constants'
import React from 'react'
import style from '../Hero/Hero.module.css'
import lottie from "lottie-web";
import SpanTypingAnimation from './SpanAnimation';
import Profile from '../Profile/page';
import RactLottie from "../../../public/lottie/lottie.json"

export default function Hero() {

    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#lottie-web"),
            animationData: RactLottie,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
        });

    }, [lottie]);
    return (
        <div className={"w-full flex items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 min-h-screen relative mb-24"}>
            <div className={"flex flex-col pt-40 md:pt-0 select-none"}>
                <h6 className={`${style.intro} first-line:font-mono text-fuchsia-700 text-2xl font-bold`}>Hi, my name is</h6>
                <h1 className={`${style.heroName} text-white text-6xl font-semibold leading-relaxed max-sm:text-4xl`}>
                    <span className={`relative ${style.emphasize}`}>Kerkrit</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>Meetib</span>
                </h1>
                <SpanTypingAnimation />
                <Profile />
            </div>
            <div id='lottie-web' className={"absolute w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16 max-sm:hidden max-md:hidden"}></div>
        </div>
    )
}
