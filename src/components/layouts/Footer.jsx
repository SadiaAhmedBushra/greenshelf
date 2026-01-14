import Link from 'next/link';
import React from 'react';

import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">GreenShelf</h2>
          <p className="text-sm text-neutral/80">
            Sustainable products for a greener tomorrow.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/products" className="hover:text-primary">Items</Link></li>
            <li><Link href="/login" className="hover:text-primary">Login</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-outline btn-sm">
              <FaFacebookF />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-sm">
              <FaGithub />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-sm">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-neutral/70 border-t border-base-300">
        © {new Date().getFullYear()} GreenShelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
