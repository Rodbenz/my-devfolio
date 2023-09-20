import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <nav className={"w-full border fixed top-0 py-8 select-none bg-gradient-to-b from-gray-900 transition-all duration-300 z-50"}>
            <div className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"}>
                <div className={"relative flex h-16 items-center justify-between"}>
                    <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
                        {/* 5555555 */}
                    </div>
                    <div className={"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"}>
                        {/* <a href='#home' className='link'>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={40}
                                height={24}
                                priority
                            />
                        </a> */}
                        <img className={" w-24 h-24 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"} src="IMG_20230730_194542_745.jpg" alt="Bordered avatar"/>
                    </div>
                    <div className={"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"}>
                        <div className={"hidden sm:ml-6 sm:block"}>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold" aria-current="page">Home</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold">Skills</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold">Projects</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold">Work</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

