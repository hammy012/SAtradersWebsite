import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Quality Products',
      description: 'Carefully selected products made with durable materials for reliable everyday use.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 11l2 2 4-4" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Better Living',
      description: 'Practical essentials intelligently designed to simplify daily routines and enhance home comfort.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <path d="M9 22V12h6v10" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Premium Selection',
      description: 'A curated catalog of modern and useful items across home, kitchen, office, and travel.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="7"/>
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Customer First',
      description: 'A seamless, trustworthy shopping experience centered around product satisfaction and support.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          <circle cx="12" cy="11" r="1" fill="var(--accent-gold)"/>
          <circle cx="9" cy="11" r="1" fill="var(--text-muted)"/>
          <circle cx="15" cy="11" r="1" fill="var(--text-muted)"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-offwhite)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Our Values</span>
          <h2 className="section-title">Why Choose SA TRADER’S?</h2>
          <p className="section-subtitle">
            We are dedicated to bringing quality, innovation, and value into your home with products designed for better living.
          </p>
        </div>

        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
          }}
        >
          <style>{`
            .why-card {
              background-color: var(--bg-white);
              padding: 40px 30px;
              border-radius: var(--radius-md);
              border: 1px solid rgba(226, 232, 240, 0.6);
              box-shadow: var(--shadow-sm);
              transition: var(--transition-smooth);
              display: flex;
              flex-direction: column;
              gap: 20px;
              position: relative;
              overflow: hidden;
            }
            .why-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 0;
              background-color: var(--secondary-color);
              transition: var(--transition-smooth);
            }
            .why-card:hover {
              transform: translateY(-8px);
              box-shadow: var(--shadow-lg);
              border-color: rgba(75, 112, 245, 0.15);
            }
            .why-card:hover::before {
              height: 100%;
            }
            .why-icon-box {
              width: 60px;
              height: 60px;
              border-radius: var(--radius-sm);
              background-color: var(--secondary-light);
              color: var(--secondary-color);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: var(--transition-smooth);
            }
            .why-card:hover .why-icon-box {
              background-color: var(--primary-color);
              color: var(--text-white);
              transform: scale(1.05);
            }
          `}</style>

          {features.map((feature, index) => (
            <div
              key={index}
              className="why-card reveal-on-scroll"
              style={{
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="why-icon-box">
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--primary-color)',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
