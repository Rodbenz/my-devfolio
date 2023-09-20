import React from 'react'
import Iconskills from './iconskills'

export default function Skills() {
    return (
        <div className={"w-full min-h-screen relative "}>
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
        </div>
    )
}
