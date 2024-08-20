"use client";
import NavLink from "@/components/UI/NavLink";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaCog, FaUser } from "react-icons/fa";
import { MdDashboard, MdRoom } from "react-icons/md";
import { PiStudent } from "react-icons/pi";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navigation = [
    { name: "Home", href: "/admin/dashboard", icon: <MdDashboard /> },
    { name: "Students", href: "/admin/profile", icon: <PiStudent /> },
    { name: "Teachers", href: "/admin/profile", icon: <FaUser /> },
    { name: "Classes", href: "/admin/profile", icon: <MdRoom /> },
    { name: "Calendar", href: "/admin/profile", icon: <BiCalendar /> },
    { name: "Profile", href: "/admin/profile", icon: <FaUser /> },
    { name: "Settings", href: "/admin/settings", icon: <FaCog /> },
  ];

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <nav
        className={`fixed z-30 h-full w-64 bg-[var(--bg-gray)] text-white transform p-4 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center md:hidden  mb-12">
          <Link href="/"> <img
            src="/images/logo.svg"
            alt=""
            className="max-w-[200px] md:max-w-[250px] w-[80%]"
          /></Link>
          <button className="text-white focus:outline-none" onClick={toggleNav}>
            <svg
              className="w-6 h-6"
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

        <Link href="/"> <img
          src="/images/logo.svg"
          alt=""
          className="max-w-[200px] md:max-w-[250px] w-[90%] m-auto hidden md:block mt-2 mb-12"
        /></Link>

        {navigation.map((item) => (
          <NavLink key={item.name} href={item.href}>
            {item?.icon} {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger Icon */}
      {!isNavOpen && (
        <div className="md:hidden fixed top-4 left-4 z-40">
          <button className="text-white focus:outline-none" onClick={toggleNav}>
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
        <div className="min-h-[80vh] mt-20">{children}</div>

        <footer>School dashboard @ 2024</footer>
      </main>
    </div>
  );
};

export default AdminLayout;
