import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
  Palette,
  ShoppingBag,
  Sparkles,
  Truck,
  Warehouse,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutionFeatures = [
  {
    icon: PackageCheck,
    title: 'Production à la demande',
    text: 'Chaque produit est lancé après commande, sans immobiliser de budget dans le stock.',
  },
  {
    icon: Warehouse,
    title: 'Zéro inventaire',
    text: 'Les créateurs testent leurs idées sans gérer tailles, couleurs ou invendus.',
  },
  {
    icon: CheckCircle2,
    title: 'Commande à l’unité',
    text: 'Un seul produit suffit pour valider un design, un club, une marque ou une campagne.',
  },
  {
    icon: Truck,
    title: 'Livraison marocaine rapide',
    text: 'Un parcours pensé pour les villes marocaines et les habitudes d’achat locales.',
  },
  {
    icon: Brush,
    title: 'Personnalisation en ligne',
    text: 'Un parcours simple pour choisir un produit, ajouter un design et préparer la commande.',
  },
  {
    icon: MessageCircle,
    title: 'Support WhatsApp',
    text: 'Accompagnement humain pour rassurer les clients et accélérer la conversion.',
  },
  {
    icon: Palette,
    title: 'Branding & design',
    text: 'Aide créative pour logos, mockups, collections et supports professionnels.',
  },
  {
    icon: ShoppingBag,
    title: 'Catalogue moderne',
    text: 'Textile, accessoires, business printing et services dans une expérience premium.',
  },
  {
    icon: Zap,
    title: 'Commande facile',
    text: 'Moins d’étapes, plus de clarté, et un MVP prêt à générer des commandes test.',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="solution-bg solution-bg-one" />
      <div className="solution-bg solution-bg-two" />

      <div className="container solution-container">
        <div className="solution-header">
          <span className="solution-kicker">
            <Sparkles size={17} />
            Réponse POD Maroc
          </span>
          <h2>La solution</h2>
          <p>
            Une plateforme marocaine de Print On Demand simple, rapide et accessible.
          </p>
        </div>

        <div className="solution-hero-card">
          <div>
            <span className="solution-hero-label">
              <BadgeCheck size={16} />
              Sans stock, sans minimum, sans friction
            </span>
            <h3>
              Créer et vendre des produits personnalisés sans investissement lourd.
            </h3>
            <p>
              Notre plateforme permet aux créateurs, étudiants, associations et entreprises de
              transformer leurs idées en produits réels grâce à une production à la demande,
              un catalogue moderne et un accompagnement design.
            </p>
          </div>
          <div className="solution-mini-flow" aria-label="Processus simplifié">
            <span>Idée</span>
            <ArrowRight size={17} />
            <span>Design</span>
            <ArrowRight size={17} />
            <span>Produit</span>
            <ArrowRight size={17} />
            <span>Commande</span>
          </div>
        </div>

        <div className="solution-grid">
          {solutionFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article className="solution-card" key={feature.title} style={{ '--delay': `${index * 55}ms` }}>
                <div className="solution-card-icon">
                  <Icon size={23} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>

        <div className="solution-highlight">
          <strong>
            Nous transformons les idées en produits réels, sans risque de stock ni investissement lourd.
          </strong>
          <div className="solution-actions">
            <a href="#catalogue" className="solution-btn solution-btn-primary">
              Découvrir les produits
              <ShoppingBag size={18} />
            </a>
            <a href="#personnaliser" className="solution-btn solution-btn-light">
              Créer mon design
              <Palette size={18} />
            </a>
            <Link to="/mvp" className="solution-btn solution-btn-dark">
              Voir le MVP
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
