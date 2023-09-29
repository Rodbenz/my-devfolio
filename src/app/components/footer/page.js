'use client'
import React from 'react';
import CarAnimation from '../../../../public/lottie/car-animation.json';
import Lottie from 'lottie-web';

export default function Footer() {
    const carAnimation = React.useRef(null);
    React.useEffect(() => {
        const animation = Lottie.loadAnimation({
            container: carAnimation.current,
            animationData: CarAnimation,
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
    <div className={"w-full min-h-screen relative"}>
        <div ref={carAnimation}></div>
    </div>
  )
}
