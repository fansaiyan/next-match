'use client';
import { NavbarItem } from '@heroui/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    href: string;
    label: string
}

const NavLink = ({href, label}: Props) => {
    const pathname = usePathname()
    return (
        <NavbarItem isActive={pathname == href} as={Link} href={href}>{label}</NavbarItem>
    )
}

export default NavLink