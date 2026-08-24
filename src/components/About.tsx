import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          className="about-grid"
        >
          <style>{`
            .about-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              gap: 60px;
            }
            @media (max-width: 991px) {
              .about-grid {
                grid-template-columns: 1fr;
                gap: 40px;
              }
              .about-image-area {
                order: 2;
              }
              .about-text-area {
                order: 1;
              }
            }
            .about-stat-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              background-color: var(--bg-offwhite);
              border-radius: var(--radius-sm);
              border: 1px solid rgba(226, 232, 240, 0.8);
              text-align: center;
            }
          `}</style>

          {/* Left Column: Copy */}
          <div
            className="about-text-area reveal-on-scroll"
            style={{
              animation: 'fadeInUp 1s ease forwards',
            }}
          >
            <span className="section-tag">Who We Are</span>
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
              About SA TRADER’S
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              SA TRADER’S is a premier home and lifestyle brand founded in Pakistan, built on a simple promise: **Quality Products, Better Living**. We believe that the items you use every day should be reliable, beautifully designed, and simple to use.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              Our carefully curated selection bridges the gap between premium durability and affordable luxury. From smart automatic household dispensers to double-walled travel thermoses, we help you upgrade your everyday essentials.
            </p>

            {/* Quick stats grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              <div className="about-stat-box">
                <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--secondary-color)', fontFamily: 'var(--font-heading)' }}>
                  100%
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginTop: '4px' }}>
                  Quality Checked
                </span>
              </div>
              <div className="about-stat-box">
                <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
                  5,000+
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginTop: '4px' }}>
                  Happy Homes
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual with p3.png */}
          <div
            className="about-image-area reveal-on-scroll"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeIn 1s ease forwards',
              animationDelay: '0.2s',
            }}
          >
            {/* Visual Backplate */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(75, 112, 245, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
                zIndex: 1,
              }}
            />

            {/* Product Image */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '400px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                filter: 'drop-shadow(0 20px 40px rgba(10, 25, 47, 0.1))',
              }}
            >
              <img
                src="/assets/p3.png"
                alt="SA TRADER'S Insulated Tumbler"
                className="animate-float"
                style={{
                  width: '75%',
                  height: 'auto',
                  objectFit: 'contain',
                  animationDuration: '8s',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
