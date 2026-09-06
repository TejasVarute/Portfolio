import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'About', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Reading Indicator */}
      <div
        className="fixed top-0 inset-x-0 h-1 z-[60] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 py-2.5 sm:py-3 px-4 sm:px-6 rounded-full max-w-5xl w-full bg-white/90 backdrop-blur-xl border border-sky-200/60 shadow-md shadow-slate-900/5 transition-all duration-300 ${
            scrolled ? 'shadow-lg shadow-sky-950/5 border-sky-300/80 bg-white/95' : ''
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 text-decoration-none group"
          >
            <img
              src={personalInfo.avatarIcon}
              alt="Tejas Varute"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-sky-600 shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform"
            />
            <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
              Tejas Varute
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              AI / Full-Stack
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`text-sm font-semibold transition-all relative py-1 ${
                      isActive
                        ? 'text-sky-600 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-sky-500 after:to-blue-600 after:rounded-full'
                        : 'text-slate-600 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              className="md:hidden p-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 z-40 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-sky-200/80 shadow-2xl shadow-slate-900/10 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-slate-800 font-bold text-base px-4 py-2.5 rounded-xl hover:bg-sky-50 hover:text-sky-600 transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personalInfo.localResumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-bold text-base px-4 py-2.5 rounded-xl bg-sky-50/60 hover:bg-sky-100 transition-all flex items-center justify-between"
          >
            <span>Download Resume (PDF)</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </>
  );
}
