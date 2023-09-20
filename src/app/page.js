"use client"
import About from "@/components/About/page";
import Hero from "@/components/Hero/page";
import Skills from "@/components/Skills/page";
import Header from "@/components/header/page";
import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });
export default function Home() {

  const [clientHeight, setClientHeight] = React.useState(0);

  React.useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;
    setClientHeight(innerHeight);
  }, [])

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-black from-gray-900">
        <div
          role="img"
          className={"text-white opacity-10 sm:text-8xl xl:text-9xl absolute rotate-90 right-0 md:top-52 sm:top-96"}
        >
          DEV
        </div>
        <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
        <Hero />
        <About clientHeight={clientHeight}/>
        <Skills/>
      </main>
    </div>
  )
}
