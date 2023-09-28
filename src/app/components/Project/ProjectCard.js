import React from 'react'

export default function ProjectCard() {
    return (
        <div className={"flex pl-0 md:pl-10 xl:pl-32 py-10"}>
            <div className={" h-60  w-96 relative cursor-pointer mb-5"}>
                <div className={"absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"}></div>
                <div className={"absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300"}>
                    <div className={"h-full w-full bg-white rounded-lg shadow-2xl"}>
                        <h1 className={" text-indigo-400"}>Project</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
