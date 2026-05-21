import { useState } from 'react';
import { ArrowRight, Eye, Heart } from 'lucide-react';

const ProductCard = ({ product, index, onPreview }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article
      className={`product-card product-card-${product.tone}`}
      style={{ '--delay': `${index * 80}ms` }}
    >
      <div className="product-card-media">
        <img src={product.image} alt={product.title} />
        <span className="product-card-badge">{product.badge}</span>
        <button
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          type="button"
          aria-label="Ajouter aux favoris"
          onClick={() => setIsFavorite((current) => !current)}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="product-card-body">
        <div className="product-card-topline">
          <span>{product.category}</span>
          <strong>{product.price}</strong>
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-card-tags">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="product-card-footer">
        <button className="preview-button" type="button" onClick={() => onPreview(product)}>
          <Eye size={17} />
          Aperçu
        </button>
        <button className="personalize-button" type="button" onClick={() => onPreview(product)}>
          Personnaliser
          <ArrowRight size={17} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
