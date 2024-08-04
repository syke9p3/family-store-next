import React, { useState } from 'react'
import { BiSolidHome } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";
import Link from 'next/link'
import HeaderButton from './header-button'
import { GiHamburgerMenu } from 'react-icons/gi'
import clsx from 'clsx'
import Image from 'next/image';


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

const SidebarMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <HeaderButton
                className='rounded-full hover:bg-white/20 animate'
                onClick={() => setOpen(true)}
            ><GiHamburgerMenu />
            </HeaderButton>

            <div
                className={clsx('p-3 py-3 z-50 w-[24rem] h-screen shadow-lg fixed top-0 text-black bg-white animate',
                    {
                        'left-0': open,
                        'left-[-32rem]': !open
                    }
                )}>
                <HeaderButton
                    className='rounded-full hover:bg-gray-200 animate'
                    onClick={() => setOpen(false)}>
                    <GiHamburgerMenu />
                </HeaderButton>
                <div className='p-4 flex gap-3 items-center'>
                    <img
                        className='rounded-full'
                        width={64} height={64} src="https://avatars.githubusercontent.com/u/75114627?v=4" alt="" />
                    <div>
                        <h3 className='font-bold'>Kenth Saya-ang</h3>
                        <p className='text-xs opacity-70'>kgsayaang@gmail.com</p>
                    </div>
                </div>
                <SidebarMenuItems />
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


const SidebarMenuItems = () => {

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

export default SidebarMenu;