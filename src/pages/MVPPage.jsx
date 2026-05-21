import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Heart,
  MessageCircle,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
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

const mvpProducts = [
  {
    id: 1,
    title: 'T-shirt personnalisé',
    price: 'À partir de 99 DH',
    badge: 'Best Seller',
    category: 'Textile',
    image: tshirtImage,
    description: 'Coupe moderne, impression durable et rendu streetwear pour créateurs, clubs et marques locales.',
    colors: ['Blanc', 'Noir', 'Rouge'],
    optionLabel: 'Taille',
    options: ['S', 'M', 'L', 'XL'],
    accent: 'green',
  },
  {
    id: 2,
    title: 'Hoodie premium',
    price: 'À partir de 249 DH',
    badge: 'Trending',
    category: 'Textile',
    image: hoodieImage,
    description: 'Molleton épais, finitions propres et placement logo pensé pour les drops de marque.',
    colors: ['Noir', 'Vert', 'Blanc'],
    optionLabel: 'Taille',
    options: ['S', 'M', 'L', 'XL'],
    accent: 'black',
  },
  {
    id: 3,
    title: 'Casquette brodée',
    price: 'À partir de 119 DH',
    badge: 'New',
    category: 'Textile',
    image: capImage,
    description: 'Broderie frontale nette pour uniformes, merch campus et collections capsule.',
    colors: ['Noir', 'Blanc', 'Vert'],
    optionLabel: 'Modèle',
    options: ['Classique', 'Dad cap', 'Snapback'],
    accent: 'gold',
  },
  {
    id: 4,
    title: 'Mug branding',
    price: 'À partir de 69 DH',
    badge: 'Entreprise',
    category: 'Accessoires',
    image: mugImage,
    description: 'Mug personnalisé pour packs corporate, cadeaux clients et branding de bureau.',
    colors: ['Blanc', 'Noir', 'Pack équipe'],
    optionLabel: 'Quantité',
    options: ['1 pièce', 'Pack 6', 'Pack 12'],
    accent: 'red',
  },
  {
    id: 5,
    title: 'Tote bag design',
    price: 'À partir de 89 DH',
    badge: 'Eco',
    category: 'Accessoires',
    image: toteImage,
    description: 'Tote bag robuste pour boutiques, événements, associations et campagnes étudiantes.',
    colors: ['Naturel', 'Noir', 'Vert'],
    optionLabel: 'Format',
    options: ['Standard', 'Grand format', 'Pack événement'],
    accent: 'green',
  },
  {
    id: 6,
    title: 'Stickers personnalisés',
    price: 'À partir de 49 DH',
    badge: 'Trending',
    category: 'Accessoires',
    image: stickersImage,
    description: 'Stickers résistants pour packaging, laptop, street marketing et identité visuelle.',
    colors: ['Vinyle mat', 'Vinyle brillant', 'Découpe logo'],
    optionLabel: 'Pack',
    options: ['Pack 20', 'Pack 50', 'Pack 100'],
    accent: 'gold',
  },
  {
    id: 7,
    title: 'Flyers business',
    price: 'À partir de 199 DH',
    badge: 'Entreprise',
    category: 'Business',
    image: flyersImage,
    description: 'Flyers professionnels pour lancements, restaurants, salons et campagnes locales.',
    colors: ['A5', 'A6', 'Recto verso'],
    optionLabel: 'Pack',
    options: ['250 unités', '500 unités', '1000 unités'],
    accent: 'black',
  },
  {
    id: 8,
    title: 'Cartes de visite premium',
    price: 'À partir de 149 DH',
    badge: 'Best Seller',
    category: 'Business',
    image: cardsImage,
    description: 'Cartes épaisses avec finition premium pour entrepreneurs, freelances et équipes sales.',
    colors: ['Mat', 'Gold touch', 'Noir premium'],
    optionLabel: 'Finition',
    options: ['Mat 350g', 'Soft touch', 'Gold touch'],
    accent: 'red',
  },
  {
    id: 9,
    title: 'Pack lancement marque',
    price: 'À partir de 499 DH',
    badge: 'New',
    category: 'Services',
    image: launchPackImage,
    description: 'Accompagnement design, mockups, mini catalogue et premiers supports de vente.',
    colors: ['Logo', 'Mockups', 'Mini catalogue'],
    optionLabel: 'Pack',
    options: ['Starter', 'Creator', 'Brand launch'],
    accent: 'green',
  },
  {
    id: 10,
    title: 'Design merchandising',
    price: 'Sur devis',
    badge: 'Studio',
    category: 'Services',
    image: merchDesignImage,
    description: 'Direction créative pour collections, logos, visuels textile et assets social media.',
    colors: ['Collection', 'Logo', 'Social media'],
    optionLabel: 'Service',
    options: ['Design simple', 'Collection capsule', 'Direction créative'],
    accent: 'gold',
  },
];

const mvpSteps = [
  { icon: Upload, title: 'Upload design', text: 'Le client envoie son logo, visuel ou idée via le formulaire MVP.' },
  { icon: Palette, title: 'Validation maquette', text: 'L’équipe prépare un aperçu simple et confirme le rendu final.' },
  { icon: PackageCheck, title: 'Production locale', text: 'Impression à la demande, sans stock lourd et avec contrôle qualité.' },
  { icon: MessageCircle, title: 'Commande WhatsApp', text: 'Confirmation rapide, paiement à la livraison et suivi humain.' },
];

const mvpMetrics = [
  { value: '48h', label: 'délai cible' },
  { value: '0', label: 'stock obligatoire' },
  { value: '10', label: 'produits catalogue' },
  { value: 'COD', label: 'paiement livraison' },
];

const faqs = [
  {
    question: 'Pourquoi ce MVP est crédible ?',
    answer: 'Il teste directement la demande réelle: catalogue complet, commande WhatsApp, production locale et paiement à la livraison.',
  },
  {
    question: 'Quel est l’objectif business ?',
    answer: 'Valider les produits gagnants, mesurer la conversion et construire une base clients avant la marketplace complète.',
  },
  {
    question: 'Comment le projet devient scalable ?',
    answer: 'Après validation, le MVP évolue vers paiement en ligne, dashboard vendeur, générateur design et automatisation des commandes.',
  },
];

const categories = ['Tous', 'Textile', 'Accessoires', 'Business', 'Services'];

const MVPPage = () => {
  const [selectedProductId, setSelectedProductId] = useState(1);
  const [selectedOption, setSelectedOption] = useState('S');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedProduct = useMemo(
    () => mvpProducts.find((product) => product.id === selectedProductId) || mvpProducts[0],
    [selectedProductId],
  );

  const filteredProducts = useMemo(
    () => activeCategory === 'Tous'
      ? mvpProducts
      : mvpProducts.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  const selectProduct = (product) => {
    setSelectedProductId(product.id);
    setSelectedOption(product.options[0]);
    setLiked(false);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const firstProduct = category === 'Tous'
      ? mvpProducts[0]
      : mvpProducts.find((product) => product.category === category);
    if (firstProduct) selectProduct(firstProduct);
  };

  return (
    <main className="mvp-experience fade-in">
      <nav className="mvp-page-nav">
        <div className="container mvp-page-nav-inner">
          <Link to="/" className="mvp-back-link">
            <ArrowLeft size={18} />
            Retour au pitch
          </Link>
          <div className="mvp-brand-pill">
            <Sparkles size={16} />
            MVP POD Maroc
          </div>
          <a
            href="https://wa.me/212600000000?text=Bonjour%20POD%20Maroc%2C%20je%20veux%20tester%20le%20MVP."
            target="_blank"
            rel="noreferrer"
            className="mvp-nav-order"
          >
            <MessageCircle size={18} />
            Commander
          </a>
        </div>
      </nav>

      <section className="mvp-hero-premium">
        <div className="mvp-hero-glow mvp-hero-glow-one" />
        <div className="mvp-hero-glow mvp-hero-glow-two" />

        <div className="container mvp-hero-grid">
          <div className="mvp-hero-copy">
            <span className="mvp-kicker">
              <BadgeCheck size={17} />
              Prototype commercial prêt à tester
            </span>
            <h1>Explorez le MVP qui transforme une idée en commande réelle.</h1>
            <p>
              Une mini-boutique Print On Demand 100% marocaine avec le catalogue complet:
              textile, accessoires, business printing et services créatifs.
            </p>
            <div className="mvp-hero-actions">
              <a href="#demo" className="mvp-primary-action">
                Tester l’expérience
                <ArrowRight size={19} />
              </a>
              <a
                href="https://wa.me/212600000000?text=Bonjour%20POD%20Maroc%2C%20je%20souhaite%20personnaliser%20un%20produit."
                target="_blank"
                rel="noreferrer"
                className="mvp-secondary-action"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </div>
            <div className="mvp-trust-row">
              <span><ShieldCheck size={16} /> Paiement à la livraison</span>
              <span><Clock3 size={16} /> Prototype 48h</span>
              <span><Zap size={16} /> 10 produits testables</span>
            </div>
          </div>

          <div className={`mvp-live-card mvp-live-card-${selectedProduct.accent}`}>
            <div className="mvp-live-card-top">
              <span>{selectedProduct.badge}</span>
              <button
                type="button"
                className={`mvp-like ${liked ? 'active' : ''}`}
                aria-label="Ajouter aux favoris"
                onClick={() => setLiked((current) => !current)}
              >
                <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="mvp-product-visual">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="mvp-live-card-bottom">
              <div>
                <small>{selectedProduct.category}</small>
                <h2>{selectedProduct.title}</h2>
              </div>
              <strong>{selectedProduct.price}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="mvp-demo-section">
        <div className="container mvp-demo-grid">
          <div className="mvp-demo-panel">
            <span className="mvp-section-label">Catalogue MVP complet</span>
            <h2>Un parcours d’achat clair pour chaque produit du catalogue.</h2>
            <p>
              Le MVP montre comment POD Maroc peut tester plusieurs lignes commerciales dès le
              départ: produits personnalisables, impressions business et services créatifs.
            </p>

            <div className="mvp-category-tabs" role="tablist" aria-label="Catégories MVP">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mvp-product-picker">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className={`mvp-picker-card ${product.id === selectedProductId ? 'active' : ''}`}
                  onClick={() => selectProduct(product)}
                >
                  <img src={product.image} alt="" />
                  <span>{product.badge}</span>
                  <strong>{product.title}</strong>
                  <small>{product.price}</small>
                </button>
              ))}
            </div>
          </div>

          <aside className="mvp-order-panel">
            <div className="mvp-order-header">
              <div>
                <span>Commande simulée</span>
                <h3>{selectedProduct.title}</h3>
              </div>
              <strong>{selectedProduct.price}</strong>
            </div>
            <p>{selectedProduct.description}</p>

            <div className="mvp-option-group">
              <label>{selectedProduct.optionLabel}</label>
              <div className="mvp-size-options">
                {selectedProduct.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={selectedOption === option ? 'active' : ''}
                    onClick={() => setSelectedOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mvp-option-group">
              <label>Options disponibles</label>
              <div className="mvp-color-options">
                {selectedProduct.colors.map((color) => (
                  <span key={color}>{color}</span>
                ))}
              </div>
            </div>

            <div className="mvp-upload-box">
              <Upload size={22} />
              <div>
                <strong>Ajouter un design</strong>
                <span>Logo, slogan, visuel, fichier print ou simple idée</span>
              </div>
            </div>

            <a
              className="mvp-checkout-button"
              href={`https://wa.me/212600000000?text=Bonjour%20POD%20Maroc%2C%20je%20veux%20commander%20${encodeURIComponent(selectedProduct.title)}%20-%20${encodeURIComponent(selectedProduct.optionLabel)}%3A%20${encodeURIComponent(selectedOption)}.`}
              target="_blank"
              rel="noreferrer"
            >
              Commander via WhatsApp
              <ArrowRight size={19} />
            </a>
          </aside>
        </div>
      </section>

      <section className="mvp-proof-section">
        <div className="container">
          <div className="mvp-metrics-grid">
            {mvpMetrics.map((metric) => (
              <div className="mvp-metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="mvp-process-grid">
            {mvpSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="mvp-process-card" key={step.title}>
                  <div className="mvp-process-number">0{index + 1}</div>
                  <div className="mvp-process-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mvp-testimonial-section">
        <div className="container mvp-testimonial-grid">
          <div>
            <span className="mvp-section-label">Signal marché</span>
            <h2>Le MVP rend le potentiel commercial immédiatement visible.</h2>
            <p>
              Le jury ne voit pas seulement une idée: il voit une boutique testable, un parcours
              client, une logique de marge et une stratégie d’évolution vers une marketplace.
            </p>
          </div>
          <div className="mvp-quote-card">
            <div className="mvp-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
            <p>
              “Un MVP simple, mais très vendeur: on comprend le catalogue, le canal de commande et
              la manière de tester le marché marocain sans gros investissement.”
            </p>
            <strong>Feedback jury cible</strong>
          </div>
        </div>
      </section>

      <section className="mvp-faq-section">
        <div className="container">
          <div className="mvp-section-heading">
            <span className="mvp-section-label">Validation</span>
            <h2>Ce que le MVP prouve</h2>
          </div>
          <div className="mvp-faq-grid">
            {faqs.map((item) => (
              <article className="mvp-faq-card" key={item.question}>
                <CheckCircle2 size={22} />
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-final-cta">
        <div className="container mvp-final-cta-inner">
          <span className="mvp-kicker">
            <Sparkles size={17} />
            MVP prêt pour démonstration
          </span>
          <h2>Passer d’un pitch à une commande test.</h2>
          <p>
            Le MVP devient la preuve concrète du projet: attractif, commercial, mesurable et prêt
            à évoluer vers une plateforme complète.
          </p>
          <div className="mvp-hero-actions">
            <Link to="/#catalogue" className="mvp-secondary-action">
              Voir le catalogue
            </Link>
            <a
              href="https://wa.me/212600000000?text=Bonjour%20POD%20Maroc%2C%20je%20veux%20lancer%20ma%20premi%C3%A8re%20commande%20test."
              target="_blank"
              rel="noreferrer"
              className="mvp-primary-action"
            >
              Lancer une commande test
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MVPPage;
