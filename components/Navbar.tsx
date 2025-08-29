'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      // Prevenir scroll cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    }

    // Cleanup cuando el componente se desmonta
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-white text-gray-900 p-4 fixed w-full z-50 shadow-md top-0">
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
              <button 
                onClick={toggleMobileMenu} 
                className="text-gray-900 focus:outline-none relative z-[60]"
                aria-label="Toggle mobile menu"
              >
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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-[55] flex flex-col justify-center items-center"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex flex-col space-y-8 text-center">
            <Link 
              href="/" 
              className="block text-white hover:text-blue-400 text-2xl font-semibold py-4 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="block text-white hover:text-blue-400 text-2xl font-semibold py-4 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#screenshots" 
              className="block text-white hover:text-blue-400 text-2xl font-semibold py-4 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Screenshots
            </Link>
            <Link 
              href="#download" 
              className="block text-white hover:text-blue-400 text-2xl font-semibold py-4 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download
            </Link>
            <Link 
              href="https://github.com/vant3x/astranova-client-rust" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-white hover:text-blue-400 text-2xl font-semibold py-4 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </>
  );
}