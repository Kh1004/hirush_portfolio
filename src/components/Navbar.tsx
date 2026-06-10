'use client';
import React, { useState, useEffect } from 'react';


interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
{ label: 'Home', href: '#', isActive: true },
{ label: 'SERVICES', href: '#services' },
{ label: 'PRODUCTS', href: '#products' },
{ label: 'TRAININGS', href: '#trainings' },
{ label: 'CONTACT', href: '#contact' }];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
      scrolled ? 'shadow-lg' : ''}`
      }>

      {/* Top bar */}
      <div className="bg-[#B81005] h-[30px]" />

      {/* Main header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[50px] flex items-center justify-between min-h-[100px]">
          {/* Logo (left) */}
          <div className="flex-1 flex justify-start">
            <a href="#">
              <img
                src="/assets/images/logo.png"
                alt="Hirush Automation Logo"
                className="max-h-[90px] w-auto max-w-[300px] object-contain" />
            </a>
          </div>

          {/* Desktop Nav (center) */}
          <nav className="hidden md:block font-coda flex-none">
            <ul className="flex items-center list-none m-0 p-0">
              {navItems.map((item) =>
              <li key={item.label} className="m-0 p-0 list-none">
                <a
                  href={item.href}
                  className={`block text-[13px] uppercase px-3 py-4 text-center transition-colors duration-200 no-relative whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#B81005] ${
                  item.isActive ?
                  'text-white bg-[#B81005]' :
                  'text-[#B81005] hover:text-[#940D05]'}`
                  }>
                  {item.label}
                </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile hamburger (right) */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              className="flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu">

              <span className={`block w-6 h-0.5 bg-[#B81005] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#B81005] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#B81005] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen &&
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navItems.map((item) =>
            <li key={item.label} className="list-none m-0 p-0">
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[13px] uppercase py-2 px-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B81005] ${
                item.isActive ? 'text-white bg-[#B81005] px-3' : 'text-[#B81005]'}`
                }>
                {item.label}
              </a>
                </li>
            )}
            </ul>
          </div>
        }
      </div>
    </header>);

}