"use client"
import React, { ReactNode, useState } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
  }

  const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

  return (
    <div className="relative flex h-screen">
    {/* Sidebar */}
    <nav
      className={`fixed z-30 h-full w-64 bg-[var(--bg-gray)] text-white transform ${
        isNavOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 flex justify-between items-center md:hidden">
      <img src="/images/logo.svg" alt="" className="max-w-[200px] md:max-w-[250px] w-[90%] m-auto" />
        <button
          className="text-white focus:outline-none"
          onClick={toggleNav}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <img src="/images/logo.svg" alt="" className="max-w-[200px] md:max-w-[250px] w-[90%] m-auto hidden md:block mt-4" />

      <ul className="p-4 space-y-4">
        <li><a href="#" className="block">Home</a></li>
        <li><a href="#" className="block">About</a></li>
        <li><a href="#" className="block">Contact</a></li>
      </ul>
    </nav>

    {/* Hamburger Icon */}
    {!isNavOpen && (
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button
          className="text-white focus:outline-none"
          onClick={toggleNav}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    )}

    {/* Overlay */}
    {isNavOpen && (
      <div
        className="fixed inset-0 z-20 bg-gray bg-opacity-5 backdrop-blur-sm md:hidden"
        onClick={toggleNav}
      ></div>
    )}

    {/* Main Content */}
    <main className="flex-1 ml-0 md:ml-64 p-6 bg-[var(--bg-secondary)]">
      <header></header>
      <div className="min-h-[80vh] mt-20">
      {children}
      </div>

      <footer>School dashboard @ 2024</footer>
    </main>
  </div>
  );
};

export default AdminLayout;
