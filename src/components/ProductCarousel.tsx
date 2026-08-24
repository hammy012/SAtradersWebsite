import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Product, products } from '../data/products';

interface ProductCarouselProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ onSelectProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Update visible slides count on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = products.length;
  const maxIndex = totalSlides - visibleSlides;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0; // Loop back
      }
      return prevIndex + 1;
    });
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return maxIndex; // Loop to end
      }
      return prevIndex - 1;
    });
  }, [maxIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isHovered, handleNext]);

  // Touch Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
    touchEnd.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-offwhite)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag">Spotlight Showcase</span>
          <h2 className="section-title">Premium Product Showcase</h2>
          <p className="section-subtitle">
            Take a closer look at our client favorites. Smooth, practical, and built to elevate your daily routine.
          </p>
        </div>

        {/* Carousel Window */}
        <div
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '20px 0',
          }}
        >
          {/* Slides Track */}
          <div
            className="carousel-track"
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              width: `${(totalSlides / visibleSlides) * 100}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  width: `${100 / totalSlides}%`,
                  padding: '0 15px',
                  boxSizing: 'border-box',
                }}
              >
                {/* Simplified Premium Card for Carousel */}
                <div
                  className="carousel-slide-card"
                  style={{
                    backgroundColor: 'var(--bg-white)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    boxShadow: 'var(--shadow-sm)',
                    padding: '24px',
                    textAlign: 'center',
                    transition: 'var(--transition-smooth)',
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelectProduct(product)}
                >
                  <style>{`
                    .carousel-slide-card {
                      transition: var(--transition-smooth);
                    }
                    .carousel-slide-card:hover {
                      transform: scale(1.02) translateY(-4px);
                      box-shadow: var(--shadow-md);
                      border-color: rgba(75, 112, 245, 0.15);
                    }
                    .carousel-slide-img-box {
                      width: 100%;
                      height: 200px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background-color: var(--bg-offwhite);
                      border-radius: var(--radius-sm);
                      margin-bottom: 20px;
                      overflow: hidden;
                    }
                    .carousel-slide-img {
                      max-height: 160px;
                      max-width: 90%;
                      object-fit: contain;
                      transition: transform 0.6s ease;
                    }
                    .carousel-slide-card:hover .carousel-slide-img {
                      transform: scale(1.05);
                    }
                  `}</style>
                  <div className="carousel-slide-img-box">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="carousel-slide-img"
                    />
                  </div>
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
                    {product.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--primary-color)',
                      marginBottom: '8px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {product.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <button
                    className="btn-secondary"
                    style={{
                      padding: '10px 20px',
                      fontSize: '13px',
                      width: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    Explore Product
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-white)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
              transition: 'var(--transition-fast)',
              zIndex: 10,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color)';
              e.currentTarget.style.color = 'var(--text-white)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-white)';
              e.currentTarget.style.color = 'var(--primary-color)';
            }}
            aria-label="Previous Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-white)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-color)',
              transition: 'var(--transition-fast)',
              zIndex: 10,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-color)';
              e.currentTarget.style.color = 'var(--text-white)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-white)';
              e.currentTarget.style.color = 'var(--primary-color)';
            }}
            aria-label="Next Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: idx === currentIndex ? 'var(--secondary-color)' : 'rgba(75, 112, 245, 0.2)',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
