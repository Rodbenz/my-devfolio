"use client"
import { MENULINKS } from '../../../../libs/constants'
import React from 'react'
import { sendEmail } from '../../../../utils/send-email';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendEmail(formData)
    };

    return (
        <section id={MENULINKS[3].ref} className={"w-full min-h-screen relative"}>
            <div className={" pt-40 pl-0 md:pl-10 xl:pl-32"}>
                <h1 className={"text-fuchsia-800 font-bold text-4xl md:text-6xl xl:text-7xl leading-tight py-10"}>
                    Contact
                </h1>
                {/* <p className={"text-white"}>phone number : 096-979-2378</p> */}
            </div>
            <div className={"py-8 lg:py-16 px-4 mx-auto max-w-screen-md"}>
                <form onSubmit={handleSubmit} className={"space-y-8"}>
                    <div>
                        <label for="name" className={"block mb-2 text-sm font-medium text-fuchsia-600 dark:text-gray-300"}>Name</label>
                        <input type="text" id="name" name='name' className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"} onChange={handleChange} placeholder="Neme" required />
                    </div>
                    <div>
                        <label for="email" className={"block mb-2 text-sm font-medium text-fuchsia-600  dark:text-gray-300"}>Email</label>
                        <input type="email" id="email" name='email' className={"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"} onChange={handleChange} placeholder="Email" required />
                    </div>
                    <div className={"sm:col-span-2"}>
                        <label for="message" className={"block mb-2 text-sm font-medium text-fuchsia-600  dark:text-gray-400"}>Your message</label>
                        <textarea id="message" name='message' rows="6" className={"block p-2.5 w-full text-sm  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"} onChange={handleChange} placeholder="message"></textarea>
                    </div>
                    <button type="submit" className={"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-fuchsia-600 bg-primary-700 sm:w-fit hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-offset-fuchsia-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"}>Send message</button>
                </form>
            </div>
            <div className={"pt-[1rem] raletive"}>
                <p className={"text-fuchsia-600 font-medium text-xl absolute right-2"}>phone number : 096-979-2378</p>
                <p className={"text-fuchsia-600 font-medium text-xl absolute right-2 pt-6"}>line id : rodbenz0808</p>
            </div>
        </section>
    )
}
