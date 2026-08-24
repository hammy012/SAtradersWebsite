import React from 'react';

interface CTASectionProps {
  onNavigate: (sectionId: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #EBF0FF 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      {/* Decorative Blur Blobs */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '300px',
          height: '300px',
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
          bottom: '-10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="reveal-on-scroll"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            animation: 'fadeInUp 1s ease forwards',
          }}
        >
          <span className="section-tag" style={{ color: 'var(--primary-color)' }}>
            Elevate Your Lifestyle
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 800,
              color: 'var(--primary-color)',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Upgrade Your Everyday Essentials
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '36px',
              maxWidth: '620px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            Discover products designed to bring more convenience, comfort and style to everyday life. Enjoy premium quality backed by our customer satisfaction promise.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <button
              onClick={() => onNavigate('products')}
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '16px',
                boxShadow: '0 10px 25px rgba(10, 25, 47, 0.15)',
              }}
            >
              Explore Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a
              href="mailto:info@satraders.com"
              className="btn-outline"
              style={{
                padding: '16px 36px',
                fontSize: '16px',
                backgroundColor: 'var(--bg-white)',
              }}
            >
              Contact Support
            </a>
          </div>

          {/* Quick Support / Contact indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>+92 300 1234567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>support@satraders.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
