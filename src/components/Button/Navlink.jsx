"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const Navlink = ({href, children}) => {
    const path = usePathname();
    return (
        <Link className={`${path.startsWith(href) && 'text-primary text-bold'} text-md`} href={href}>{children}</Link>
    );
};

export default Navlink;