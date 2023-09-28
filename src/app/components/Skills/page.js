'use client'
import React from 'react'
import Iconskills from './iconskills'
import { MENULINKS } from '@/app/constants'
import Lottie from 'lottie-web';
import linneAnimation from '../../../../public/lottie/line-animation.json'

export default function Skills() {
    const lineAnimation = React.useRef(null);

    React.useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: lineAnimation.current,
            animationData: linneAnimation,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
        });
        animation.play();
        return () => {
            // Clean up when the component unmounts
            animation.destroy();
        };
    }, []);
    return (
        <section id={MENULINKS[1].ref} className={"w-full min-h-screen relative "}>
            <div ref={lineAnimation} className={"absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"}></div>
            <div className={" pt-40 pl-0 md:pl-10 xl:pl-32"}>
                <h1 className={"text-fuchsia-800 font-bold text-4xl md:text-6xl xl:text-7xl leading-tight py-10"}>
                    My Skills
                </h1>
                <h1 className={"text-white font-medium text-xl md:text-2xl xl:text-4xl leading-tight py-3"}>
                    I Link to take reponsibility to craft aesthetic user
                </h1>
                <h1 className={"text-white font-medium text-xl md:text-2xl xl:text-4xl leading-tight pb-10"}>
                    experience using modern frntend architecture.
                </h1>
                <Iconskills/>
            </div>
        </section>
    )
}
