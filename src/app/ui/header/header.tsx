'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'


interface HeaderProps {
    left?: React.ReactNode,
    title: string,
    right?: React.ReactNode,
}

const Header = ({ left, title, right }: HeaderProps) => {
    return (
        <div className="z-50 fixed top-0 w-full flex items-center bg-teal-600 text-white">
            {left ? left : <HamburgerMenu />}
            <div className="flex-1">
                <p className="font-bold">{title}</p>
            </div>
            {right ? right : <DotsMenu />}

        </div>
    )
}

const DotsMenu = () => {
    return (
        <HeaderButton onClick={() => console.log('menu open')}>
            <BsThreeDotsVertical />
        </HeaderButton>
    )
}

const HamburgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <HeaderButton
                onClick={() => setOpen(true)}
            ><GiHamburgerMenu />
            </HeaderButton>

            <div className={clsx('z-50 w-64 h-screen shadow-lg fixed top-0 text-black bg-white transition-all duration-150 ease-in-out',
                {
                    'left-0': open,
                    'left-[-300px]': !open
                }
            )}>
                <HeaderButton onClick={() => setOpen(false)}>
                    <GiHamburgerMenu />
                </HeaderButton>
                <NavMenuItems />
            </div>
            <div
                onClick={() => { setOpen(false) }}
                className={clsx('top-0 left-0 fixed transition-all duration-150 ease-in-out', {
                    ' bg-black w-full h-screen z-[10] opacity-50': open,
                    '': !open,
                })}></div>

        </>
    )
}

import { BiSolidHome } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";
import Link from 'next/link'
import HeaderButton from './headerbutton'

const links = [
    {
        name: "Home",
        href: "/",
        icon: <BiSolidHome />
    },
    {
        name: "Prices",
        href: "/prices",
        icon: <IoPricetag />
    },
]

const NavMenuItems = () => {

    return (
        <ul>
            {links.map((link, i) => (
                <Link href={link.href} key={i}>
                    <button className='hover:bg-gray-200 flex gap-4 items-center px-4 py-4 w-full'>
                        {link.icon}
                        <p className=''>{link.name}</p>
                    </button>
                </Link>
            ))}
        </ul>
    )
}


export default Header