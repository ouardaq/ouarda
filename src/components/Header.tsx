'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define links in one place for easier maintenance
  const navLinks = [
    { name: '~/home', href: '/' },
    { name: '~/projects', href: '/projects' },
    { name: '~/experience', href: '/experience' },
    { name: '~/education', href: '/blog' },
    { name: '~/contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 py-6 border-b border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Terminal Prompt */}
        <div>
          <Link 
            href="/" 
            className="text-xl tracking-tight font-bold hover:text-[var(--accent)] transition-colors"
          >
            ouarda@portfolio:~$
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none text-[var(--text)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">≡</span>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-[var(--border)] bg-[var(--bg)]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block hover:text-[var(--accent)] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}