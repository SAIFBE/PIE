import { useEffect } from 'react';
import { ArrowRight, BadgeCheck, Sparkles, X } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, product]);

  if (!product) return null;

  return (
    <div className="product-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className={`product-modal product-modal-${product.tone}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Fermer" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="product-modal-visual">
          <img src={product.image} alt={product.title} />
          <span>{product.badge}</span>
        </div>

        <div className="product-modal-content">
          <div className="modal-kicker">
            <Sparkles size={16} />
            {product.category}
          </div>
          <h3 id="product-modal-title">{product.title}</h3>
          <p>{product.description}</p>
          <div className="modal-price">{product.price}</div>
          <div className="modal-tags">
            {product.tags.map((tag) => (
              <span key={tag}>
                <BadgeCheck size={14} />
                {tag}
              </span>
            ))}
          </div>
          <div className="modal-actions">
            <a className="catalogue-btn catalogue-btn-whatsapp" href="#personnaliser" onClick={onClose}>
              Créer mon design
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
