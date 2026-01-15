'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path && path.startsWith(href);

  return (
    <Link href={href} className={`${isActive ? 'text-primary font-bold' : ''} text-md`}>
      {children}
    </Link>
  );
};

export default Navlink;
