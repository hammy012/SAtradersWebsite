import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
            : 'py-6 bg-transparent'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          paddingTop: isScrolled ? '12px' : '24px',
          paddingBottom: isScrolled ? '12px' : '24px',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(10, 25, 47, 0.08)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div 
          className="container flex items-center justify-between"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'between',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <img
              src="/assets/sa_logo.png"
              alt="SA TRADER'S Logo"
              style={{
                height: isScrolled ? '40px' : '50px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: isScrolled ? '18px' : '22px',
                  fontWeight: 800,
                  color: 'var(--primary-color)',
                  letterSpacing: '1px',
                  lineHeight: 1.1,
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                SA TRADER'S
              </span>
              <span
                style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Quality Products Better Living
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link */}
          <div
            style={{
              display: 'none',
            }}
            className="md:flex"
          >
            <style>{`
              @media (min-width: 768px) {
                .md\\:flex {
                  display: flex !important;
                  align-items: center;
                  gap: 32px;
                }
              }
              .nav-item {
                font-size: 15px;
                font-weight: 600;
                color: var(--text-dark);
                position: relative;
                padding: 8px 0;
                transition: var(--transition-fast);
              }
              .nav-item::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: var(--secondary-color);
                transition: var(--transition-smooth);
              }
              .nav-item:hover {
                color: var(--secondary-color);
              }
              .nav-item:hover::after {
                width: 100%;
              }
              .nav-item-active {
                color: var(--secondary-color) !important;
              }
              .nav-item-active::after {
                width: 100% !important;
              }
            `}</style>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className="nav-item"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block" style={{ display: 'none' }}>
            <style>{`
              @media (min-width: 768px) {
                .md\\:block {
                  display: block !important;
                }
              }
            `}</style>
            <button
              onClick={() => handleLinkClick('products')}
              className="btn-primary"
              style={{
                padding: isScrolled ? '10px 22px' : '14px 28px',
                fontSize: '14px',
              }}
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: isScrolled ? 'var(--secondary-light)' : 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              transition: 'var(--transition-fast)',
            }}
          >
            <style>{`
              @media (min-width: 768px) {
                .md\\:hidden {
                  display: none !important;
                }
              }
              .burger-bar {
                width: 18px;
                height: 2px;
                background-color: var(--primary-color);
                transition: var(--transition-smooth);
              }
              .burger-open-1 {
                transform: translateY(8px) rotate(45deg);
              }
              .burger-open-2 {
                opacity: 0;
              }
              .burger-open-3 {
                transform: translateY(-8px) rotate(-45deg);
              }
            `}</style>
            <div className={`burger-bar ${isMobileMenuOpen ? 'burger-open-1' : ''}`} style={{ transformOrigin: 'center' }} />
            <div className={`burger-bar ${isMobileMenuOpen ? 'burger-open-2' : ''}`} />
            <div className={`burger-bar ${isMobileMenuOpen ? 'burger-open-3' : ''}`} style={{ transformOrigin: 'center' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(10, 25, 47, 0.95)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.id);
            }}
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-white)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              transition: 'var(--transition-fast)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--secondary-color)')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => handleLinkClick('products')}
          className="btn-gold"
          style={{
            marginTop: '20px',
            padding: '16px 36px',
            fontSize: '16px',
          }}
        >
          Shop Now
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </>
  );
};
