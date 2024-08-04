import clsx from 'clsx'
import React from 'react'

interface HeaderButtonProps {
    children: React.ReactNode,
    onClick: any;
    className?: string,
}

const HeaderButton = ({ children, className, onClick }: HeaderButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx('p-4', className)}>
            {children}
        </button>
    )
}

export default HeaderButton