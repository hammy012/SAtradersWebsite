import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    if (onFilterCategory) {
      onFilterCategory(category);
    } else {
      onNavigate('products');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-white)',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Upper footer grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
            gap: '50px',
            marginBottom: '60px',
          }}
        >
          <style>{`
            .footer-grid {
              display: grid;
              grid-template-columns: 2fr 1fr 1fr 1.5fr;
              gap: 50px;
              margin-bottom: 60px;
            }
            .footer-heading {
              font-size: 15px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: var(--accent-gold);
              margin-bottom: 24px;
            }
            .footer-link-list {
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
            .footer-link {
              font-size: 14px;
              color: rgba(255, 255, 255, 0.7);
              transition: var(--transition-fast);
              display: inline-block;
            }
            .footer-link:hover {
              color: var(--secondary-color);
              transform: translateX(4px);
            }
            @media (max-width: 991px) {
              .footer-grid {
                grid-template-columns: 1.5fr 1fr 1fr;
                gap: 40px;
              }
            }
            @media (max-width: 768px) {
              .footer-grid {
                grid-template-columns: 1fr;
                gap: 30px;
              }
            }
          `}</style>

          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/assets/sa_logo.png"
                alt="SA TRADER'S Logo"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.6,
                maxWidth: '320px',
              }}
            >
              Premium home and kitchen essentials designed in Pakistan to simplify your lifestyle and elevate daily living standards.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us')} className="footer-link">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-link-list">
              <li>
                <a href="#products" onClick={(e) => handleCategoryClick(e, 'Kitchen Essentials')} className="footer-link">
                  Kitchen Essentials
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleCategoryClick(e, 'Home Essentials')} className="footer-link">
                  Home Essentials
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleCategoryClick(e, 'Office & Travel')} className="footer-link">
                  Office & Travel
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleCategoryClick(e, 'Gift Ideas')} className="footer-link">
                  Gift Ideas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Address details */}
          <div>
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-link-list" style={{ gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>📍</span>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.4 }}>
                  SA TRADER'S HQ, Lahore, Punjab, Pakistan
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-gold)' }}>📞</span>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  +92 300 1234567
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-gold)' }}>✉️</span>
                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  info@satraders.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower footer: Copyright and links */}
        <div
          style={{
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
          className="lower-footer"
        >
          <style>{`
            @media (max-width: 576px) {
              .lower-footer {
                flex-direction: column;
                text-align: center;
              }
            }
          `}</style>
          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            © {currentYear} SA TRADER’S. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-white)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}>
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-white)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
