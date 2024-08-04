'use client'

import { BsThreeDotsVertical } from 'react-icons/bs'
import HeaderButton from './header-button'
import SidebarMenu from './sidebar'


interface HeaderProps {
    left?: React.ReactNode,
    title: string,
    right?: React.ReactNode,
}

const Header = ({ left, title, right }: HeaderProps) => {
    return (
        <div className="px-3 py-2 z-50 fixed top-0 w-full flex items-center bg-teal-600 text-white">
            {left ? left : <SidebarMenu />}
            <div className="flex-1 ml-1">
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



export default Header