import React from 'react'
import  Icon  from '../Icons/icon'
import { SOCIAL_LINKS } from '../../../../libs/constants'

export default function Profile() {
    return (
        <div className={"flex flex-row items-center space-x-4 link"}>
            {SOCIAL_LINKS.map((el, index) => (
                <a
                    key={index}
                    href={el.url}
                    className={"text-white"}
                    rel='noreferrer'
                    target={"_blank"}
                    aria-label={el.name}
                >
                    <Icon name={el.name}></Icon>
                </a>
            ))}
        </div>
    )
}
