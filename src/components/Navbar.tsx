'use client';
import React, { useState, useEffect } from 'react';


interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  isActive?: boolean;
}

const navItems: NavItem[] = [
{ label: 'Home', href: '#', isActive: true },
{ label: 'SERVICES', href: '#services' },
{ label: 'PRODUCTS', href: '#products' },
{ label: 'TRAININGS', href: '#trainings' },
{ label: 'mPortal', href: '#portal', isButton: true }];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExport = async () => {
    setExporting(true);
    setExportError(null);
    try {
      const response = await fetch('/api/export');
      if (!response.ok) {
        let errMsg = 'Export failed';
        try {
          const data = await response.json();
          if (data?.error) errMsg = data.error;
        } catch {
          // ignore json parse error
        }
        throw new Error(errMsg);
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'project-export.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Export failed';
      setExportError(msg);
      setTimeout(() => setExportError(null), 4000);
    } finally {
      setExporting(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
      scrolled ? 'shadow-lg' : ''}`
      }>

      {/* Top bar */}
      <div className="bg-[#B81005] h-[30px] flex items-center justify-between px-6 md:px-[50px]">
        <nav>
          <ul className="flex">
            <li>
              <a
                href="#profile"
                className="text-[#EEEEEE] text-[11px] uppercase tracking-wide px-[10px] py-[3px] border-l border-[#D61003] border-r border-[#940D05] hover:text-white transition-colors duration-200">
                PROFILE
              </a>
            </li>
          </ul>
        </nav>
        {/* Export Button */}
        <div className="flex items-center gap-2">
          {exportError && (
            <span className="text-[10px] text-yellow-200 max-w-[200px] truncate">{exportError}</span>
          )}
          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-[6px] text-[11px] uppercase tracking-wide text-[#EEEEEE] px-[10px] py-[3px] border border-[#940D05] hover:bg-[#940D05] hover:text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
            {exporting ? (
              <>
                <svg className="animate-spin w-[12px] h-[12px]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Exporting...
              </>
            ) : (
              <>
                <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Export
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1180px] mx-auto px-6 md:px-[50px] flex items-center justify-between min-h-[100px]">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="https://hirushautomation.com/logo.png"
              alt="Hirush Automation Logo"
              className="max-h-[90px] w-auto max-w-[300px] object-contain" />

          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block font-coda">
            <ul className="flex items-center">
              {navItems.map((item) =>
              <li key={item.label} className="mx-[3px]">
                  {item.isButton ?
                <a
                  href={item.href}
                  className="inline-block bg-black text-white text-[13px] px-[12px] py-[12px] rounded-[28px] border border-[#18ab29] hover:bg-[#5cbf2a] transition-colors duration-200 no-underline">

                      {item.label}
                    </a> :

                <a
                  href={item.href}
                  className={`block text-[13px] uppercase px-[7px] pt-[20px] pb-[20px] text-center transition-colors duration-200 no-underline relative ${
                  item.isActive ?
                  'text-white bg-[#B81005]' :
                  'text-[#B81005] hover:text-[#940D05]'}`
                  }>

                      {item.label}
                    </a>
                }
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">

            <span className={`block w-6 h-0.5 bg-[#B81005] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#B81005] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#B81005] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen &&
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) =>
            <li key={item.label}>
                  {item.isButton ?
              <a
                href={item.href}
                className="inline-block bg-black text-white text-[13px] px-4 py-2 rounded-[28px] border border-[#18ab29] hover:bg-[#5cbf2a] transition-colors duration-200 mt-2">

                      {item.label}
                    </a> :

              <a
                href={item.href}
                className={`block text-[13px] uppercase py-2 px-2 transition-colors duration-200 ${
                item.isActive ? 'text-white bg-[#B81005] px-3' : 'text-[#B81005]'}`
                }>

                      {item.label}
                    </a>
              }
                </li>
            )}
            </ul>
          </div>
        }
      </div>
    </header>);

}