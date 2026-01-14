// import Link from 'next/link';
// import React from 'react';
// import { MdOutlineStorefront } from 'react-icons/md';

// const Logo = () => {
//   return (
//     <Link href="/" className="flex items-center gap-2">
//       <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white">
//         <MdOutlineStorefront className="text-lg" />
//       </div>
//       <span className="font-bold text-lg sm:text-xl text-neutral">
//         Green<span className="text-primary">Shelf</span>
//       </span>
//     </Link>
//   );
// };

// export default Logo;


'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineStorefront } from 'react-icons/md';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
          <MdOutlineStorefront className="text-xl" />
        </div>
        <span className="font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl">
          <span className="text-primary">Green</span>
          <span className="text-neutral">Shelf</span>
        </span>
      </Link>
    </motion.div>
  );
};

export default Logo;
