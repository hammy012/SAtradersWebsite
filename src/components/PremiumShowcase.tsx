import React from 'react';

interface PremiumShowcaseProps {
  onNavigate: (sectionId: string) => void;
}

export const PremiumShowcase: React.FC<PremiumShowcaseProps> = ({ onNavigate }) => {
  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-offwhite)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          className="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '60px',
          }}
        >
          <style>{`
            .showcase-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              gap: 60px;
            }
            @media (max-width: 991px) {
              .showcase-grid {
                grid-template-columns: 1fr;
                gap: 40px;
              }
            }
            .showcase-feature-point {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              margin-bottom: 20px;
            }
            .showcase-checkmark {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background-color: var(--accent-gold-light);
              color: var(--accent-gold);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              flex-shrink: 0;
            }
          `}</style>

          {/* Left Column: Premium Visual with gradient */}
          <div
            className="reveal-on-scroll"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeIn 1s ease forwards',
            }}
          >
            {/* Visual Backplate */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(75, 112, 245, 0.05) 0%, rgba(212, 175, 55, 0.03) 100%)',
                zIndex: 1,
              }}
            />

            {/* Product Image */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '450px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                filter: 'drop-shadow(0 20px 30px rgba(10, 25, 47, 0.08))',
              }}
            >
              <img
                src="/assets/p5.png"
                alt="SA TRADER'S Utensil Collection"
                style={{
                  width: '85%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Right Column: Copy & Feature bullets */}
          <div
            className="reveal-on-scroll"
            style={{
              animation: 'fadeInUp 1s ease forwards',
              animationDelay: '0.2s',
            }}
          >
            <span className="section-tag">Designed for You</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4vw, 42px)',
                fontWeight: 700,
                color: 'var(--primary-color)',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              Made for Everyday Moments
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '30px',
              }}
            >
              At SA TRADER'S, we believe home products should combine function with sophisticated aesthetic. Our kitchen and dining essentials are crafted from food-safe materials that endure heat and daily wear while giving your space a refined look.
            </p>

            {/* Feature Points */}
            <div style={{ marginBottom: '36px' }}>
              <div className="showcase-feature-point">
                <div className="showcase-checkmark">✓</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '4px' }}>
                    Premium Quality
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    FDA-approved food-grade materials matched with organic natural wood.
                  </p>
                </div>
              </div>

              <div className="showcase-feature-point">
                <div className="showcase-checkmark">✓</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '4px' }}>
                    Everyday Convenience
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Heat-resistant, easy to clean, and ergonomically balanced grip designs.
                  </p>
                </div>
              </div>

              <div className="showcase-feature-point">
                <div className="showcase-checkmark">✓</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '4px' }}>
                    Stylish & Practical
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Clean minimal style configurations that enhance modern kitchen counters.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('products')}
              className="btn-primary"
              style={{ padding: '14px 30px' }}
            >
              View Full Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
