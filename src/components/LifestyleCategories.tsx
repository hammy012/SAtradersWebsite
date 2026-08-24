import React from 'react';

interface LifestyleCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export const LifestyleCategories: React.FC<LifestyleCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      name: 'Kitchen Essentials',
      tagline: 'Elevate Culinary Moments',
      description: 'Smart appliances and robust preparation tools that bring efficiency and joy to cooking.',
      bgGradient: 'linear-gradient(135deg, #F0F4FA 0%, #FFFFFF 100%)',
      itemCount: '15+ Products',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V3m0 18v-3" stroke="var(--accent-gold)" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: 'Home Essentials',
      tagline: 'Modernize Comfort Spaces',
      description: 'Hygienic dispensers and functional organizers that complement premium counter spaces.',
      bgGradient: 'linear-gradient(135deg, #FFF9FA 0%, #FFFFFF 100%)',
      itemCount: '12+ Products',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <circle cx="12" cy="13" r="3" stroke="var(--accent-gold)" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: 'Office & Travel',
      tagline: 'Simplify Journeys & Work',
      description: 'Vacuum insulated thermoses and portable blenders engineered to keep pace with dynamic lifestyles.',
      bgGradient: 'linear-gradient(135deg, #F5F9F6 0%, #FFFFFF 100%)',
      itemCount: '8+ Products',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="var(--accent-gold)" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: 'Gift Ideas',
      tagline: 'Share Thoughtful Better Living',
      description: 'Curated premium sets designed to be perfect gifts for housewarmings, weddings, or milestones.',
      bgGradient: 'linear-gradient(135deg, #FAF7FF 0%, #FFFFFF 100%)',
      itemCount: '10+ Products',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7c-1.5-3-4.5-3-4.5 0S12 7 12 7zm0 0c1.5-3 4.5-3 4.5 0S12 7 12 7z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7v5" stroke="var(--accent-gold)" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag">Product Classifications</span>
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">
            Find the perfect tools and additions tailored to your home, kitchen, professional work, and travel needs.
          </p>
        </div>

        {/* Categories Grid Layout */}
        <div
          className="categories-grid"
        >
          <style>{`
            .categories-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
            }
            .category-showcase-card {
              position: relative;
              border-radius: var(--radius-md);
              border: 1px solid rgba(226, 232, 240, 0.7);
              padding: 40px;
              display: flex;
              gap: 24px;
              align-items: flex-start;
              transition: var(--transition-smooth);
              box-shadow: var(--shadow-sm);
              overflow: hidden;
            }
            .category-showcase-card:hover {
              transform: translateY(-5px);
              box-shadow: var(--shadow-md);
              border-color: rgba(75, 112, 245, 0.15);
            }
            .category-badge-pill {
              font-size: 11px;
              font-weight: 700;
              background-color: var(--secondary-light);
              color: var(--secondary-color);
              padding: 4px 12px;
              border-radius: 20px;
              margin-bottom: 12px;
              display: inline-block;
            }
            .category-arrow-link {
              margin-top: 16px;
              display: inline-flex;
              align-items: center;
              gap: 6px;
              font-size: 14px;
              font-weight: 700;
              color: var(--secondary-color);
              transition: var(--transition-fast);
            }
            .category-showcase-card:hover .category-arrow-link {
              color: var(--primary-color);
              gap: 10px;
            }
            .category-icon-wrapper {
              background-color: var(--bg-white);
              border-radius: var(--radius-sm);
              padding: 16px;
              box-shadow: var(--shadow-sm);
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary-color);
              flex-shrink: 0;
            }
            @media (max-width: 768px) {
              .categories-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
              .category-showcase-card {
                padding: 30px;
                flex-direction: column;
                gap: 16px;
              }
            }
          `}</style>

          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-showcase-card reveal-on-scroll"
              style={{
                background: cat.bgGradient,
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="category-icon-wrapper">
                {cat.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <span className="category-badge-pill">{cat.itemCount}</span>
                <span style={{ fontSize: '12px', display: 'block', color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  {cat.tagline}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--primary-color)',
                    marginBottom: '10px',
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.description}
                </p>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCategory(cat.name);
                  }}
                  className="category-arrow-link"
                >
                  Explore Collection
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
