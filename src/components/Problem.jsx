import {
  AlertTriangle,
  Boxes,
  Clock,
  Coins,
  PackageX,
  ShoppingCart,
  SlidersHorizontal,
  Store,
  WandSparkles,
} from 'lucide-react';

const problemPoints = [
  {
    icon: Boxes,
    title: 'Minimums élevés',
    text: 'Les fournisseurs demandent souvent de grandes quantités avant de lancer une production.',
  },
  {
    icon: Coins,
    title: 'Coûts de départ',
    text: 'Créer une marque demande un budget initial difficile pour les étudiants et petits créateurs.',
  },
  {
    icon: Store,
    title: 'Stock compliqué',
    text: 'Gérer les tailles, couleurs, quantités et invendus devient vite risqué.',
  },
  {
    icon: PackageX,
    title: 'Produits invendus',
    text: 'Un mauvais choix de design ou de quantité peut bloquer de l’argent dans le stock.',
  },
  {
    icon: Clock,
    title: 'Délais longs',
    text: 'Les cycles de production et de validation ralentissent les lancements.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Personnalisation limitée',
    text: 'Peu d’outils simples permettent de visualiser et commander un produit personnalisé en ligne.',
  },
  {
    icon: WandSparkles,
    title: 'Branding peu accessible',
    text: 'Les services professionnels de design restent difficiles d’accès pour les petits budgets.',
  },
  {
    icon: ShoppingCart,
    title: 'Commande compliquée',
    text: 'Le parcours entre idée, maquette, paiement et livraison manque souvent de clarté.',
  },
];

const Problem = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="problem-bg problem-bg-one" />
      <div className="problem-bg problem-bg-two" />

      <div className="container problem-container">
        <div className="problem-header">
          <span className="problem-kicker">
            <AlertTriangle size={17} />
            Pain points du marché
          </span>
          <h2>Le problème</h2>
          <p>
            Pourquoi les créateurs, étudiants et petites entreprises rencontrent des difficultés
            dans la personnalisation et la vente de produits au Maroc.
          </p>
        </div>

        <div className="problem-grid">
          {problemPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <article className="problem-card" key={point.title} style={{ '--delay': `${index * 65}ms` }}>
                <div className="problem-card-icon">
                  <Icon size={24} />
                </div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            );
          })}
        </div>

        <div className="problem-highlight">
          <AlertTriangle size={22} />
          <strong>
            De nombreuses idées ne voient jamais le jour à cause des coûts et de la complexité du lancement.
          </strong>
        </div>
      </div>
    </section>
  );
};

export default Problem;
