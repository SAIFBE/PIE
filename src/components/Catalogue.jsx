import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import ProductModal from './ProductModal';
import tshirtImage from '../assets/product-photos/tshirt-personnalise.jpg';
import hoodieImage from '../assets/product-photos/hoodie-premium.jpg';
import capImage from '../assets/product-photos/casquette-brodee.jpg';
import mugImage from '../assets/product-photos/mug-branding.jpg';
import toteImage from '../assets/product-photos/tote-bag-design.jpg';
import stickersImage from '../assets/product-photos/stickers-personnalises.jpg';
import flyersImage from '../assets/product-photos/flyers-business.jpg';
import cardsImage from '../assets/product-photos/cartes-visite-premium.jpg';
import launchPackImage from '../assets/product-photos/pack-lancement-marque.jpg';
import merchDesignImage from '../assets/product-photos/design-merchandising.jpg';

const categories = ['Textile', 'Accessoires', 'Business', 'Services'];

const products = [
  {
    id: 1,
    title: 'T-shirt personnalisé',
    category: 'Textile',
    price: 'À partir de 99 DH',
    badge: 'Best Seller',
    tone: 'green',
    image: tshirtImage,
    description: 'Coupe moderne, impression durable et rendu streetwear pour créateurs, clubs et marques locales.',
    tags: ['DTF', 'Unisexe', '24h'],
    metric: '120+ designs',
  },
  {
    id: 2,
    title: 'Hoodie premium',
    category: 'Textile',
    price: 'À partir de 249 DH',
    badge: 'Trending',
    tone: 'black',
    image: hoodieImage,
    description: 'Molleton épais, finitions propres et placement logo pensé pour les drops de marque.',
    tags: ['Oversize', 'Broderie', 'Drop'],
    metric: 'Marge élevée',
  },
  {
    id: 3,
    title: 'Casquette brodée',
    category: 'Textile',
    price: 'À partir de 119 DH',
    badge: 'New',
    tone: 'gold',
    image: capImage,
    description: 'Broderie frontale nette pour uniformes, merch campus et collections capsule.',
    tags: ['Brodée', 'Premium', 'Logo'],
    metric: '6 couleurs',
  },
  {
    id: 4,
    title: 'Mug branding',
    category: 'Accessoires',
    price: 'À partir de 69 DH',
    badge: 'Entreprise',
    tone: 'red',
    image: mugImage,
    description: 'Mug personnalisé pour packs corporate, cadeaux clients et branding de bureau.',
    tags: ['Cadeau', 'Corporate', 'Full color'],
    metric: 'Pack équipe',
  },
  {
    id: 5,
    title: 'Tote bag design',
    category: 'Accessoires',
    price: 'À partir de 89 DH',
    badge: 'Eco',
    tone: 'green',
    image: toteImage,
    description: 'Tote bag robuste pour boutiques, événements, associations et campagnes étudiantes.',
    tags: ['Coton', 'Retail', 'Event'],
    metric: 'MOQ flexible',
  },
  {
    id: 6,
    title: 'Stickers personnalisés',
    category: 'Accessoires',
    price: 'À partir de 49 DH',
    badge: 'Trending',
    tone: 'gold',
    image: stickersImage,
    description: 'Stickers résistants pour packaging, laptop, street marketing et identité visuelle.',
    tags: ['Vinyle', 'Pack', 'Logo'],
    metric: 'Découpe nette',
  },
  {
    id: 7,
    title: 'Flyers business',
    category: 'Business',
    price: 'À partir de 199 DH',
    badge: 'Entreprise',
    tone: 'black',
    image: flyersImage,
    description: 'Flyers professionnels pour lancements, restaurants, salons et campagnes locales.',
    tags: ['A5', 'Recto verso', 'Rapide'],
    metric: '500 unités',
  },
  {
    id: 8,
    title: 'Cartes de visite premium',
    category: 'Business',
    price: 'À partir de 149 DH',
    badge: 'Best Seller',
    tone: 'red',
    image: cardsImage,
    description: 'Cartes épaisses avec finition premium pour entrepreneurs, freelances et équipes sales.',
    tags: ['Mat', 'Gold touch', 'Pro'],
    metric: '350g',
  },
  {
    id: 9,
    title: 'Pack lancement marque',
    category: 'Services',
    price: 'À partir de 499 DH',
    badge: 'New',
    tone: 'green',
    image: launchPackImage,
    description: 'Accompagnement design, mockups, mini catalogue et premiers supports de vente.',
    tags: ['Branding', 'Mockups', 'Launch'],
    metric: 'Prêt à vendre',
  },
  {
    id: 10,
    title: 'Design merchandising',
    category: 'Services',
    price: 'Sur devis',
    badge: 'Studio',
    tone: 'gold',
    image: merchDesignImage,
    description: 'Direction créative pour collections, logos, visuels textile et assets social media.',
    tags: ['Créatif', 'Marque', 'Social'],
    metric: 'Studio POD',
  },
];

const catalogueStats = [
  { value: 4, suffix: '', label: 'catégories' },
  { value: 10, suffix: '+', label: 'produits prêts' },
  { value: 24, suffix: 'h', label: 'prototype rapide' },
];

const CountUp = ({ value, suffix, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    let frameId;
    const duration = 900;
    const startedAt = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState('Textile');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    if (!isLoading) return undefined;
    const timer = window.setTimeout(() => setIsLoading(false), 420);
    return () => window.clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    const section = document.getElementById('catalogue');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(category);
  };

  return (
    <section id="catalogue" className={`catalogue-section ${revealed ? 'is-revealed' : ''}`}>
      <div className="catalogue-bg catalogue-bg-one" />
      <div className="catalogue-bg catalogue-bg-two" />

      <div className="container catalogue-container">
        <div className="catalogue-header">
          <div className="catalogue-kicker">
            <Sparkles size={16} />
            Print On Demand Maroc
          </div>
          <h2>Catalogue Produits &amp; Services</h2>
          <p>
            Découvrez une sélection de produits personnalisables conçus pour les créateurs,
            entreprises, étudiants et marques marocaines.
          </p>
        </div>

        <div className="catalogue-stats" aria-label="Indicateurs catalogue">
          {catalogueStats.map((stat, index) => (
            <div className="catalogue-stat" key={stat.label} style={{ '--delay': `${index * 90}ms` }}>
              <strong>
                <CountUp value={stat.value} suffix={stat.suffix} isActive={revealed} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <ProductFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
          products={products}
        />

        <div className="catalogue-showcase" key={activeCategory}>
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div className="product-skeleton" key={index} aria-hidden="true">
                  <div className="skeleton-media" />
                  <div className="skeleton-line skeleton-line-large" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line skeleton-line-short" />
                </div>
              ))
            : filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onPreview={setSelectedProduct}
                />
              ))}
        </div>

        <div className="catalogue-cta">
          <div>
            <span className="catalogue-cta-eyebrow">
              <BadgeCheck size={16} />
              Plateforme prête pour le commerce
            </span>
            <h3>Vous souhaitez lancer votre propre marque ou créer des produits personnalisés ?</h3>
          </div>
          <div className="catalogue-cta-actions">
            <Link to="/mvp" className="catalogue-btn catalogue-btn-dark">
              Voir le MVP
              <ArrowRight size={18} />
            </Link>
            <a
              className="catalogue-btn catalogue-btn-whatsapp"
              href="https://wa.me/212600000000?text=Bonjour%20POD%20Maroc%2C%20je%20souhaite%20commander%20un%20produit%20personnalis%C3%A9."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Commander via WhatsApp
            </a>
            <a className="catalogue-btn catalogue-btn-light" href="#personnaliser">
              Créer mon design
              <Zap size={18} />
            </a>
          </div>
        </div>

        <div className="catalogue-mvp-strip">
          <span>Prototype interactif</span>
          <Link to="/mvp" className="catalogue-mvp-button">
            Explorer le MVP
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default Catalogue;
