import { SKILLS } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

export default function Iconskills() {
    return (
        <>
            <h1 className={"text-gray-400 text-[16px] md:text-[1rem] xl:text-[1.5rem] pb-2"}>
                LANGUAGES AND TOOLS
            </h1>
            <div className={"flex items-center space-x-8 pb-5"}>
                {SKILLS.languagesAndTools.map((el, index) => (
                    <Image
                        key={index}
                        src={`/skills/${el}.svg`}
                        width={'50'}
                        height={'50'}
                        alt={el}
                    />
                ))}
            </div>
            <h1 className={"text-gray-400 text-[16px] md:text-[1rem] xl:text-[1.5rem] pb-2"}>
                LIBRARIES AND FRAMEEORK
            </h1>
            <div className={"flex items-center space-x-8 pb-5"}>
                {SKILLS.librariesAndFrameworks.map((el, index) => (
                    <Image
                        key={index}
                        src={`/skills/${el}.svg`}
                        width={'50'}
                        height={'50'}
                        alt={el}
                    />
                ))}
            </div>
            <h1 className={"text-gray-400 text-[16px] md:text-[1rem] xl:text-[1.5rem] pb-2"}>
                DATABAES
            </h1>
            <div className={"flex items-center space-x-8 pb-5"}>
                {SKILLS.databases.map((el, index) => (
                    <Image
                        key={index}
                        src={`/skills/${el}.svg`}
                        width={'50'}
                        height={'50'}
                        alt={el}
                    />
                ))}
            </div>
            <h1 className={"text-gray-400 text-[16px] md:text-[1rem] xl:text-[1.5rem] pb-2"}>
                OTHER
            </h1>
            <div className={"flex items-center space-x-8 pb-5"}>
                {SKILLS.other.map((el, index) => (
                    <Image
                        key={index}
                        src={`/skills/${el}.svg`}
                        width={'50'}
                        height={'50'}
                        alt={el}
                    />
                ))}
            </div>
        </>
    )
}

