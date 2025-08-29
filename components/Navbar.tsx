'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-900 p-4 fixed w-full z-10 shadow-md top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src="/assets/logo-bg.png" alt="Astranova Logo" width={80} height={80} className="mr-2" />
          Astranova Client
        </Link>
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-blue-600 transition duration-300">Features</Link>
            <Link href="#screenshots" className="hover:text-blue-600 transition duration-300">Doc</Link>
            <Link href="https://github.com/vant3x/astranova-client-rust" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">GitHub</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 pt-16 px-2 space-y-2 z-[9999] h-screen w-screen">
            <Link href="/" className="block text-white hover:text-gray-300 py-2">Home</Link>
            <Link href="#features" className="block text-white hover:text-gray-300 py-2">Features</Link>
            <Link href="#screenshots" className="block text-white hover:text-gray-300 py-2">Screenshots</Link>
            <Link href="#download" className="block text-white hover:text-gray-300 py-2">Download</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
