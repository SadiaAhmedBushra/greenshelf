'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navlink from '../Button/Navlink';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'night' ? 'light' : 'night';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

const nav = (
  <>
    <li><Navlink href="/">Home</Navlink></li>
    <li><Navlink href="/products">Products</Navlink></li>
    <li><Navlink href="/login">Login</Navlink></li>
  </>
);



  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-300">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {nav}
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-ghost"
              aria-label="Toggle Theme"
            >
              {theme === 'night' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden btn btn-ghost"
            aria-label="Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="menu bg-base-200 rounded-box mt-2 gap-2">
              {nav}
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-outline w-full mt-2"
              >
                {theme === 'night' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
