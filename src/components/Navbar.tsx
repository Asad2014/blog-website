
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black border-b sticky top-0 z-[9999999999] bg-blue-500">
      <div className="sm:px-6 lg:px-10 m-auto">
        <div className="flex items-center lg:justify-between max-lg:h-[70px] h-[50px]">
          {/* Logo Section */}
          <div className="flex pl-10 md:pl-0">
            <Link href="/">
              <h1 className="text-2xl font-bold">Blog</h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mx-64">
            <button className="md:hidden" onClick={toggleMenu}>
              <MdMenu size={25} />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-3 text-black/80">
            <Link
              href="/"
              className="border-b-[3px] transition-all duration-700 text-[18px] tracking-tight font-bold border-transparent hover:border-black active:border-black px-3 py-2"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="border-b-[3px] transition-all duration-700 text-[18px] tracking-tight font-bold border-transparent hover:border-black px-3 py-2"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="border-b-[3px] transition-all duration-700 text-[18px] tracking-tight font-bold border-transparent hover:border-black px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start space-y-3 text-black/80 px-4 py-3">
            <Link
              href="/"
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black"
              onClick={toggleMenu}
            >
              Home
            </Link>
            
            <Link
              href="/About"
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
