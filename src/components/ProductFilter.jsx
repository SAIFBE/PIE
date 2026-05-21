import { Briefcase, Layers, Palette, Shirt } from 'lucide-react';

const categoryIcons = {
  Textile: Shirt,
  Accessoires: Layers,
  Business: Briefcase,
  Services: Palette,
};

const ProductFilter = ({ categories, activeCategory, onChange, products }) => {
  return (
    <div className="product-filter" role="tablist" aria-label="Catégories de produits">
      {categories.map((category) => {
        const Icon = categoryIcons[category];
        const count = products.filter((product) => product.category === category).length;
        const isActive = activeCategory === category;

        return (
          <button
            className={`filter-pill ${isActive ? 'active' : ''}`}
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
          >
            <Icon size={18} />
            <span>{category}</span>
            <small>{count}</small>
          </button>
        );
      })}
    </div>
  );
};

export default ProductFilter;
