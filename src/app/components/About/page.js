"use client";
import React from 'react'
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About({ clientHeight }) {
    const quoteRef = React.useRef(null);
    const targetSection = React.useRef(null);

    React.useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone, duration: 0.1 },
        });

        timeline
            .fromTo(
                quoteRef.current.querySelector(".about-1"),
                { opacity: 0.2 },
                { opacity: 1 }
            )
            .to(quoteRef.current.querySelector(".about-1"), {
                opacity: 0.2,
                delay: 0.5,
            })
            .fromTo(
                quoteRef.current.querySelector(".about-2"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<"
            )
            .to(quoteRef.current.querySelector(".about-2"), {
                opacity: 0.2,
                delay: 1,
            });

        ScrollTrigger.create({
            trigger: targetSection.current,
            start: "center 80%",
            end: "center top",
            scrub: 0,
            animation: timeline,
        });
    }, [quoteRef, targetSection]);
    return (
        <section className={"w-full relative select-none min-h-screen"} ref={targetSection}>
            <div className={`${clientHeight > 650 ? "pt-60 pb-16 px-28" : "pt-80 pb-72"} items-center justify-center`}>
                <h1 ref={quoteRef} className={"text-yellow-50 text-[2.70rem] max-sm:text-xl md:text-6xl lg:text-[4rem] text-center font-bold"}>
                    <span className={"about-1 leading-tight"}>
                        I&apos;m a passionate Engineer who&apos;s focused on building
                        scalable and performant apps.{" "}
                    </span>
                    <span className="about-2 leading-tight">
                        I take responsibility to craft a good user experience using modern
                        frontend architecture.{" "}
                    </span>
                </h1>
            </div>
        </section>
    )
}
