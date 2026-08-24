import React from 'react';
import { Product, products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  return (
    <section
      id="products"
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-white)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <span className="section-tag">Curated Collection</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Smart essentials for your everyday lifestyle. Explore our premium selection of home, kitchen, and travel tools.
          </p>
        </div>

        {/* Responsive Grid / Mobile Slider */}
        <div className="products-container">
          <style>{`
            .products-container {
              width: 100%;
            }
            .grid-slider-wrapper {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
            }
            
            @media (max-width: 991px) {
              .grid-slider-wrapper {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
              }
            }
            
            @media (max-width: 640px) {
              .grid-slider-wrapper {
                display: flex !important;
                flex-direction: row;
                overflow-x: auto;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                gap: 20px;
                padding-bottom: 24px;
                padding-left: 4px;
                padding-right: 4px;
                margin-left: -4px;
                margin-right: -4px;
              }
              .grid-slider-wrapper::-webkit-scrollbar {
                height: 6px;
              }
              .grid-slider-wrapper::-webkit-scrollbar-thumb {
                background-color: var(--secondary-light);
                border-radius: 10px;
              }
              .grid-slider-wrapper > div {
                flex: 0 0 280px;
                scroll-snap-align: center;
              }
            }
          `}</style>
          
          <div className="grid-slider-wrapper">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="reveal-on-scroll"
                style={{
                  animation: 'fadeInUp 0.8s ease forwards',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ProductCard
                  product={product}
                  onSelect={onSelectProduct}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
