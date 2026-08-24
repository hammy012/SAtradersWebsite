import React from 'react';
import { type Product, products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onSelectProduct,
  onAddToCart,
  selectedCategory,
  onSelectCategory,
}) => {
  const categoriesList = ['All', 'Kitchen Essentials', 'Home Essentials', 'Office & Travel', 'Gift Ideas'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

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

        {/* Category Tabs Filter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <style>{`
            .filter-tab {
              padding: 10px 20px;
              border-radius: 40px;
              font-size: 14px;
              font-weight: 600;
              border: 1px solid var(--border-color);
              background-color: var(--bg-white);
              color: var(--text-muted);
              transition: var(--transition-fast);
            }
            .filter-tab:hover {
              border-color: var(--secondary-color);
              color: var(--secondary-color);
            }
            .filter-tab-active {
              background-color: var(--primary-color) !important;
              color: var(--text-white) !important;
              border-color: var(--primary-color) !important;
              box-shadow: var(--shadow-sm);
            }
          `}</style>
          {categoriesList.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`filter-tab ${selectedCategory === category ? 'filter-tab-active' : ''}`}
            >
              {category}
            </button>
          ))}
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
              transition: var(--transition-smooth);
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
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                style={{
                  animation: 'fadeInUp 0.8s ease forwards',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ProductCard
                  product={product}
                  onSelect={onSelectProduct}
                  onAddToCart={onAddToCart}
                />
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '40px 0', color: 'var(--text-light)' }}>
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
