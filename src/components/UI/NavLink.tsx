"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {

  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={`block py-2.5 px-4 rounded transition duration-200 flex items-center gap-2 mb-2 ${
        isActive
          ? "bg-[var(--primary)] text-black"
          : "text-white hover:bg-gray-600 hover:text-white"
      }`}>
        {children}
 
    </Link>
  );
  // rest of your logic
};

export default NavLink;
