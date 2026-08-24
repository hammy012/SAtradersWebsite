import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductGrid } from './components/ProductGrid';
import { ProductCarousel } from './components/ProductCarousel';
import { LifestyleCategories } from './components/LifestyleCategories';
import { PremiumShowcase } from './components/PremiumShowcase';
import { About } from './components/About';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import type { Product } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Preloader Timer Hook
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Reveal Animation Hook
  useEffect(() => {
    if (isLoading) return;

    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Trigger when element is 100px visible
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    // Run once on load to show elements already visible
    const timer = setTimeout(handleScrollReveal, 100);

    window.addEventListener('scroll', handleScrollReveal);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollReveal);
    };
  }, [isLoading]);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterCategory = (category: string) => {
    setSelectedCategory(category);
    navigateToSection('products');
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Format currency
  const formatPrice = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  // Generate WhatsApp link
  const getWhatsAppLink = (productName: string, price: number) => {
    const phoneNumber = '923001234567'; // Brand contact number
    const message = `Hi SA TRADER'S, I would like to order: *${productName}* (${formatPrice(price)}). Please provide payment and shipping information.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--primary-color)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          zIndex: 9999,
          color: 'var(--text-white)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-white)', letterSpacing: '1px', fontWeight: 800 }}>
            SA TRADER'S
          </h2>
          <span style={{ fontSize: '10px', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
            Quality Products Better Living
          </span>
        </div>
        <div className="preloader-spinner" />
      </div>
    );
  }

  return (
    <>
      {/* Sticky/Floating Navbar */}
      <Navbar onNavigate={navigateToSection} />

      {/* Hero Section */}
      <Hero onNavigate={navigateToSection} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Product Categories / Highlight Section */}
      <LifestyleCategories onSelectCategory={handleFilterCategory} />

      {/* Product Grid Section */}
      <ProductGrid
        onSelectProduct={setSelectedProduct}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Split layout Premium Showcase Section */}
      <PremiumShowcase onNavigate={navigateToSection} />

      {/* Product Spotlight Carousel Section */}
      <ProductCarousel onSelectProduct={setSelectedProduct} />

      {/* About Section */}
      <About />

      {/* Call To Action Section */}
      <CTASection onNavigate={navigateToSection} />

      {/* Footer Section */}
      <Footer onNavigate={navigateToSection} onFilterCategory={handleFilterCategory} />

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10, 25, 47, 0.6)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease forwards',
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-white)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              boxShadow: 'var(--shadow-lg)',
              animation: 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-offwhite)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-color)',
                fontWeight: 'bold',
                fontSize: '18px',
                zIndex: 10,
                transition: 'var(--transition-fast)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                e.currentTarget.style.color = 'var(--text-white)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-offwhite)';
                e.currentTarget.style.color = 'var(--primary-color)';
              }}
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Modal Grid */}
            <div
              className="modal-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                minHeight: '450px',
              }}
            >
              <style>{`
                .modal-grid {
                  display: grid;
                  grid-template-columns: 1.1fr 1fr;
                }
                @media (max-width: 768px) {
                  .modal-grid {
                    grid-template-columns: 1fr;
                  }
                  .modal-img-area {
                    height: 280px;
                  }
                }
              `}</style>

              {/* Left Column: Image Area */}
              <div
                className="modal-img-area"
                style={{
                  backgroundColor: 'var(--bg-offwhite)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  borderRight: '1px solid rgba(226, 232, 240, 0.6)',
                }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(10, 25, 47, 0.08))',
                  }}
                />
              </div>

              {/* Right Column: Info Details */}
              <div
                style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Category & Rating */}
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    {selectedProduct.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'var(--primary-color)',
                      lineHeight: 1.25,
                    }}
                  >
                    {selectedProduct.name}
                  </h3>
                </div>

                {/* Rating score */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ color: 'var(--accent-gold)', display: 'flex', gap: '2px', fontSize: '14px' }}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx}>
                        {idx < Math.floor(selectedProduct.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {selectedProduct.rating} ({selectedProduct.reviewsCount} reviews)
                  </span>
                </div>

                {/* Price block */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-color)' }}>
                    {formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span style={{ fontSize: '16px', color: 'var(--text-light)', textDecoration: 'line-through', fontWeight: 500 }}>
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {selectedProduct.detailedDescription}
                </p>

                {/* Features List */}
                <div>
                  <h5 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    Key Features
                  </h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedProduct.features.map((feature, i) => (
                      <li key={i} style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button Action */}
                <a
                  href={getWhatsAppLink(selectedProduct.name, selectedProduct.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    fontSize: '15px',
                    backgroundColor: '#25D366', // WhatsApp Green
                    boxShadow: '0 6px 15px rgba(37, 211, 102, 0.25)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#128C7E';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#25D366';
                  }}
                >
                  {/* WhatsApp Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 2.036 14.11 1.012 11.48 1.01c-5.442 0-9.866 4.372-9.87 9.802 0 1.73.473 3.41 1.37 4.915l-.994 3.634 3.733-.974zm11.367-7.46c-.066-.11-.244-.177-.512-.311-.269-.134-1.59-.785-1.838-.875-.248-.09-.43-.134-.61.134-.181.269-.696.875-.853 1.055-.157.18-.314.202-.583.069-.27-.134-1.138-.42-2.167-1.342-.801-.715-1.343-1.6-1.5-1.869-.158-.269-.017-.415.118-.548.121-.121.27-.314.404-.47.134-.158.18-.269.27-.449.09-.18.045-.337-.023-.47-.067-.134-.61-1.47-.835-2.013-.22-.53-.442-.458-.61-.466-.157-.007-.337-.008-.517-.008-.18 0-.472.067-.719.337-.247.269-.943.922-.943 2.251 0 1.33.967 2.614 1.101 2.793.135.179 1.902 2.905 4.609 4.074.644.278 1.147.444 1.54.569.647.206 1.237.177 1.702.107.518-.077 1.59-.65 1.815-1.278.225-.629.225-1.167.158-1.278z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
