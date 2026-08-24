export interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  originalPrice?: number;
  category: 'Kitchen Essentials' | 'Home Essentials' | 'Office & Travel' | 'Gift Ideas';
  image: string;
  rating: number;
  reviewsCount: number;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Multi-Functional Vegetable & Meat Chopper',
    description: 'High-quality stainless steel blades with a powerful, easy-to-use manual pulley system.',
    detailedDescription: 'Elevate your food preparation with SA TRADER\'S Premium Manual Chopper. Equipped with razor-sharp surgical stainless steel blades, this chopper easily processes vegetables, meats, herbs, and nuts in seconds. The robust pull-string mechanism is engineered for long-lasting durability, requiring zero electricity.',
    price: 3499,
    originalPrice: 4200,
    category: 'Kitchen Essentials',
    image: '/assets/p1.png',
    rating: 4.8,
    reviewsCount: 142,
    features: ['Surgical-grade stainless steel blades', 'Heavy-duty nylon drawstring mechanism', 'Non-slip rubber base', 'Easy to clean & dishwasher safe']
  },
  {
    id: 'p2',
    name: 'Smart Sensing Automatic Soap Dispenser',
    description: 'Touchless infrared sensor technology providing a hygienic, elegant liquid soap experience.',
    detailedDescription: 'Enhance hygiene and luxury in your kitchen or bathroom. Featuring a highly sensitive infrared motion sensor, this dispenser delivers liquid soap or hand sanitizer instantly without contact. Constructed with water-resistant materials and a modern minimalist profile to complement premium counter spaces.',
    price: 2199,
    originalPrice: 2999,
    category: 'Home Essentials',
    image: '/assets/p2.png',
    rating: 4.6,
    reviewsCount: 98,
    features: ['Infrared motion sensor response (0.2s)', 'Leak-proof and waterproof design (IPX4)', 'Adjustable soap volume dispensing levels', 'Long-lasting battery efficiency']
  },
  {
    id: 'p3',
    name: 'Stainless Steel Vacuum Insulated Coffee Mug',
    description: 'Double-walled vacuum insulation keeping beverages hot for 6 hours or cold for 12 hours.',
    detailedDescription: 'Keep your drinks at the perfect temperature on your commute or at your desk. This premium coffee mug features premium food-grade 18/8 stainless steel construction and advanced thermal insulation. The spill-proof lid ensures mess-free travel, fitting standard vehicle cup holders.',
    price: 1899,
    originalPrice: 2499,
    category: 'Office & Travel',
    image: '/assets/p3.png',
    rating: 4.9,
    reviewsCount: 210,
    features: ['Double-wall vacuum insulation', 'Spill-proof slide locking lid', 'Sweat-free outer grip coating', 'BPA-free food grade 18/8 stainless steel']
  },
  {
    id: 'p4',
    name: 'Heavy Duty Rotary Hand Whisker & Beater',
    description: 'Precision-engineered gears for smooth operation and durable stainless steel construction.',
    detailedDescription: 'A classic kitchen tool reimagined with modern materials. This hand rotary whisker allows you to whip cream, beat eggs, and blend batters smoothly with minimal hand fatigue. The precision gears rotate cleanly, while the ergonomic handle provides a solid grip for perfect culinary results.',
    price: 1499,
    originalPrice: 1999,
    category: 'Kitchen Essentials',
    image: '/assets/p4.png',
    rating: 4.7,
    reviewsCount: 65,
    features: ['High-torque smooth rotary gears', 'Dual stainless steel beaters', 'Soft-grip ergonomic crank handle', 'Dishwasher safe attachment parts']
  },
  {
    id: 'p5',
    name: 'Silicone Kitchen Cooking Utensils Set',
    description: '12-piece non-scratch, heat-resistant cooking tools with premium natural wooden handles.',
    detailedDescription: 'Protect your non-stick cookware and beautify your kitchen counter. This complete set includes 12 culinary tools (spatulas, ladles, tongs, whisks, and holder) crafted from FDA-approved food-grade silicone and natural beechwood handles, resistant to heat up to 446°F (230°C).',
    price: 4899,
    originalPrice: 5999,
    category: 'Gift Ideas',
    image: '/assets/p5.png',
    rating: 4.8,
    reviewsCount: 119,
    features: ['12 essential cooking and baking utensils', 'Heat-resistant up to 446°F / 230°C', 'Natural heat-insulating wooden handles', 'Includes matching designer utensil canister']
  },
  {
    id: 'p6',
    name: 'Portable Electric USB Juicer Blender',
    description: 'Compact, cordless, and powerful personal blender for fresh smoothies and shakes on the go.',
    detailedDescription: 'Blend fresh juices, protein shakes, or baby food wherever you are. Equipped with a powerful 6-blade assembly and a rechargeable battery, this personal blender runs up to 15 times on a single USB charge. Made of eco-friendly, food-grade PCTG material with safety auto-shutoff features.',
    price: 2799,
    originalPrice: 3500,
    category: 'Office & Travel',
    image: '/assets/p6.png',
    rating: 4.5,
    reviewsCount: 87,
    features: ['Powerful 6 stainless steel blending blades', 'USB rechargeable built-in battery', 'PCTG food-grade non-toxic material', 'Safety magnetic lock protection system']
  }
];
