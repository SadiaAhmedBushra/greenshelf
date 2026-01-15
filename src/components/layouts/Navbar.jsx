'use client';

import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import Logo from './Logo';
import Navlink from '../Button/Navlink';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current);

    const auth = Cookies.get('auth');
    if (auth) {
      setIsLoggedIn(true);

      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        const mockUser = {
          name: 'John Doe',
          image: 'https://i.pravatar.cc/40', 
        };
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'night' ? 'light' : 'night';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

  const handleLogout = () => {
    Cookies.remove('auth');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setDropdownOpen(false);
    // Redirect to login page or home (adjust if needed)
    window.location.href = '/login';
  };

  const navLinks = (
    <>
      <li><Navlink href="/">Home</Navlink></li>
      <li><Navlink href="/products">Products</Navlink></li>
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
            {navLinks}
            {!isLoggedIn && (
              <li><Navlink href="/login">Login</Navlink></li>
            )}

            {isLoggedIn && user && (
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                  aria-label="User menu"
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="hidden md:inline font-semibold text-gray-700 dark:text-gray-200">{user.name}</span>
                </button>

                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-base-200 rounded-md shadow-lg py-2 z-50">
                    <li className="px-4 py-2 text-gray-700 dark:text-gray-300 cursor-default select-none">
                      Signed in as <br />
                      <span className="font-bold">{user.name}</span>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )}

            <li>
              <button
                onClick={toggleTheme}
                className="btn btn-sm btn-ghost"
                aria-label="Toggle Theme"
              >
                {theme === 'night' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </li>
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
              {navLinks}
              {!isLoggedIn && (
                <li><Navlink href="/login">Login</Navlink></li>
              )}

              {isLoggedIn && user && (
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 focus:outline-none"
                    aria-label="User menu"
                  >
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold">{user.name}</span>
                  </button>

                  {dropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-40 bg-base-200 rounded-md shadow-lg py-2 z-50">
                      <li className="px-4 py-2 text-gray-700 cursor-default select-none">
                        Signed in as <br />
                        <span className="font-bold">{user.name}</span>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              )}

              <li>
                <button
                  onClick={toggleTheme}
                  className="btn btn-sm btn-outline w-full mt-2"
                >
                  {theme === 'night' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
