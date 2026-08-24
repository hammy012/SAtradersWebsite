import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  // Format prices as currency (PKR/Rs.)
  const formatPrice = (amount: number) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  return (
    <div
      className="product-card"
      style={{
        backgroundColor: 'var(--bg-white)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(226, 232, 240, 0.6)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        transition: 'var(--transition-smooth)',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .product-card {
          transition: var(--transition-smooth);
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(75, 112, 245, 0.15);
        }
        .product-img-box {
          position: relative;
          width: 100%;
          padding-top: 85%; /* Aspect ratio of card image */
          background-color: var(--bg-offwhite);
          overflow: hidden;
          border-bottom: 1px solid rgba(226, 232, 240, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .product-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: var(--accent-gold);
          color: var(--primary-color);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          z-index: 10;
        }
        .product-category-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: rgba(10, 25, 47, 0.75);
          color: var(--text-white);
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 10;
        }
        .product-card-button {
          margin-top: auto;
          width: 100%;
          background-color: var(--secondary-light);
          color: var(--secondary-color);
          font-weight: 700;
          font-size: 14px;
          padding: 12px;
          border-radius: var(--radius-sm);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: var(--transition-smooth);
        }
        .product-card:hover .product-card-button {
          background-color: var(--primary-color);
          color: var(--text-white);
        }
      `}</style>

      {/* Badges */}
      {product.originalPrice && product.originalPrice > product.price && (
        <span className="product-badge">
          Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </span>
      )}
      <span className="product-category-badge">{product.category}</span>

      {/* Image container */}
      <div className="product-img-box">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
      </div>

      {/* Product Content Details */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <div style={{ color: 'var(--accent-gold)', display: 'flex', gap: '2px', fontSize: '13px' }}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>
                {idx < Math.floor(product.rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-light)', fontWeight: 600 }}>
            ({product.reviewsCount})
          </span>
        </div>

        {/* Title */}
        <h4
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--primary-color)',
            lineHeight: 1.3,
            marginBottom: '8px',
            minHeight: '44px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </h4>

        {/* Short description */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.description}
        </p>

        {/* Price row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--primary-color)',
            }}
          >
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: '14px',
                color: 'var(--text-light)',
                textDecoration: 'line-through',
                fontWeight: 500,
              }}
            >
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onSelect(product)}
          className="product-card-button"
        >
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
