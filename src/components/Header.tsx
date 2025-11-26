'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header with Logo and Hamburger */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center px-8 py-6">
          {/* Logo - Clickable Link to Home */}
          <Link href="/">
            <div className="w-32 transition-all duration-300 ease-in-out cursor-pointer hover:opacity-50 hover:scale-105"
              style={{ opacity: isMenuOpen ? 0.5 : 1 }}>
              <Image
                src="/icon.svg"
                alt="worra"
                width={120}
                height={60}
                priority
              />
            </div>
          </Link>

          {/* Menu Container */}
          <div className="ml-8 relative inline-flex items-center">
            {/* Hamburger to Chevron Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {/* Top line - rotates clockwise to form top of chevron */}
              <span
                className={`absolute w-6 h-1 bg-white transition-transform duration-300 origin-center ${
                  isMenuOpen 
                    ? 'rotate-45 translate-y-0.5' 
                    : ''
                }`}
                style={{ top: '6px' }}
              />
              {/* Middle line - disappears */}
              <span
                className={`w-6 h-1 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Bottom line - rotates counter-clockwise to form bottom of chevron */}
              <span
                className={`absolute w-6 h-1 bg-white transition-transform duration-300 origin-center ${
                  isMenuOpen 
                    ? '-rotate-45' 
                    : ''
                }`}
                style={{ bottom: '6px' }}
              />
            </button>

            {/* Menu Items - expand to the right of button */}
            <nav
              className={`flex gap-8 transition-all duration-300 ease-in-out overflow-hidden ml-6 ${
                isMenuOpen ? 'opacity-100 max-w-96' : 'opacity-0 max-w-0 pointer-events-none'
              }`}
            >
              <Link
                href="/work"
                className="text-lg text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                work
              </Link>
              <Link
                href="/about"
                className="text-lg text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
              <Link
                href="/contact"
                className="text-lg text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
