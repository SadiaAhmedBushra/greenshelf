// "use client"
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { use } from 'react';

// const Navlink = ({href, children}) => {
//     const path = usePathname();
//     return (
//         <Link className={`${path.startsWith(href) && 'text-primary text-bold'} text-md`} href={href}>{children}</Link>
//     );
// };

// export default Navlink;

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
