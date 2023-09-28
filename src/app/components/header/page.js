"use client"
import { MENULINKS } from '@/app/constants';
import React from 'react';
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";


export default function Header() {
    const { t } = useTranslation("");

    const [islanguage, setIsLanguage] = React.useState(false);

    const onHandlelanguage = (e) => {
        setIsLanguage(!islanguage)
    }

    React.useEffect(() => {
        if (islanguage) {

        }
    }, [islanguage])
    return (
        <nav className={"w-full border fixed top-0 py-8 select-none bg-gradient-to-b from-gray-900 transition-all duration-300 z-40"}>
            {/* <div className={"absolute mt-[-30px] right-2 z-50 space-x-1"}>
                <label
                    className={"inline-block pl-[0.15rem] hover:cursor-pointer text-white"}
                    for="flexSwitchCheckDefault"
                >
                    {islanguage ? "TH" : "EN"}
                </label>
                <input
                    className={`mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] ${islanguage ? "bg-red-500" : "bg-neutral-300"} before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={(e) => onHandlelanguage(e)}
                />
            </div> */}
            <div className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"}>
                <div className={"relative flex h-16 items-center "}>
                    <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
                        {/* 5555555 */}
                    </div>
                    <div className={"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"}>
                        <img className={" w-14 h-14 md:w-24 md:h-24 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"} src="IMG_20230730_194542_745.jpg" alt="Bordered avatar" />
                    </div>
                    <div className={"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}>
                        <div className={"hidden sm:ml-6 sm:block"}>
                            <div className="flex space-x-4 items-center">
                                {MENULINKS.map((el, index) => (
                                    <a href={`#${el.ref}`} key={index} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold" aria-current="page">{t(el.name)}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}



