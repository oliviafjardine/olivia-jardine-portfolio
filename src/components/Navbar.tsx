import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/skills', label: 'SKILLS' },
  { to: '/portfolio', label: 'PORTFOLIO' },
  { to: '/contact', label: "CONTACT", isCTA: true },
];

const FADE_DURATION = 400;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsFadingOut(false);
  };

  const closeMobileMenu = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsFadingOut(false);
    }, FADE_DURATION);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen && !isFadingOut) {
      closeMobileMenu();
    } else if (!isMobileMenuOpen) {
      openMobileMenu();
    }
  };

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ to, label, isCTA }) => (
      <Link
        key={to}
        to={to}
        onClick={isMobile ? toggleMobileMenu : undefined}
        className={`${
          isCTA
            ? 'btn'
            : 'underlink px-4 py-2 rounded-full transition-colors'
        } ${
          isMobile ? 'text-xl px-6 py-2' : 'px-4 py-2'
        } rounded-full transition-colors`}
      >
        {label}
      </Link>
    ));

  return (
      <nav className="bg-background/5 backdrop-blur-sm py-3 px-6 sticky top-0 z-10 shadow-md">      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span>OLIVIA JARDINE</span>
        </Link>

        <div className="hidden md:flex space-x-1">{renderLinks()}</div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground hover:text-foreground/70 focus:outline-none p-2 rounded-full hover:bg-muted"
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
          <Menu className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : isFadingOut ? '-rotate-90' : ''}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {(isMobileMenuOpen || isFadingOut) && (
        <div className={`md:hidden fixed inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
          {/* Close button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-3 right-14 text-foreground hover:text-foreground/70 p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col items-center space-y-8">
            {renderLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
