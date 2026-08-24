import React from 'react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #F0F5FF 0%, #FFFFFF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Blobs */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(75, 112, 245, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        className="animate-float-delayed"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          <style>{`
            .hero-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              alignItems: center;
              gap: 60px;
            }
            @media (max-width: 991px) {
              .hero-grid {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 40px;
              }
              .hero-content {
                order: 2;
              }
              .hero-image-area {
                order: 1;
              }
            }
          `}</style>

          {/* Left Column: Text and CTAs */}
          <div
            className="hero-content"
            style={{
              animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(75, 112, 245, 0.08)',
                padding: '8px 16px',
                borderRadius: '50px',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--secondary-color)',
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--secondary-color)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                SA TRADER'S
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(42px, 5vw, 64px)',
                fontWeight: 800,
                color: 'var(--primary-color)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Quality Products.<br />
              <span style={{ color: 'var(--secondary-color)' }}>Better Living.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              Discover practical, stylish and reliable products designed to make everyday living easier and more convenient.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'inherit',
              }}
              className="hero-buttons-container"
            >
              <style>{`
                @media (max-width: 991px) {
                  .hero-buttons-container {
                    justify-content: center !important;
                  }
                }
              `}</style>
              <button
                onClick={() => onNavigate('products')}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '16px' }}
              >
                Explore Products
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="btn-outline"
                style={{ padding: '16px 32px', fontSize: '16px' }}
              >
                Shop Now
              </button>
            </div>

            {/* Quick trust highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(226, 232, 240, 0.8)',
              }}
              className="hero-trust-indicators"
            >
              <style>{`
                @media (max-width: 991px) {
                  .hero-trust-indicators {
                    justify-content: center !important;
                  }
                }
              `}</style>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>Premium Quality</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div
            className="hero-image-area"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              animation: 'fadeIn 1.2s ease-out forwards',
            }}
          >
            {/* Visual background circle */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(75, 112, 245, 0.08) 0%, rgba(212, 175, 55, 0.04) 100%)',
                zIndex: 1,
              }}
            />

            {/* Main Product Image */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '460px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                filter: 'drop-shadow(0 20px 40px rgba(10, 25, 47, 0.12))',
              }}
            >
              <img
                src="/assets/p1.png"
                alt="SA TRADER'S Featured Product - Multi-Functional Chopper"
                className="animate-float"
                style={{
                  width: '90%',
                  height: 'auto',
                  objectFit: 'contain',
                  animationDuration: '7s',
                }}
              />
            </div>

            {/* Float badge */}
            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                backgroundColor: 'var(--bg-white)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid rgba(226, 232, 240, 0.5)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontWeight: 'bold',
                }}
              >
                ★
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-color)' }}>4.8 / 5 Rating</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>From 140+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
