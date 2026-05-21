import React from 'react';
import { Target, Users, Megaphone, HeartHandshake, Coins, Wrench, Activity, Handshake, Receipt } from 'lucide-react';

const bmcData = [
  {
    id: 'prop-valeur',
    title: 'Proposition de valeur',
    icon: <Target />,
    content: 'Plateforme marocaine de Print On Demand permettant de personnaliser et commander des produits imprimés sans stock ni minimum de commande. Livraison rapide au Maroc, personnalisation simple en ligne, produits modernes, production à la demande, zéro gaspillage.',
    className: 'prop-valeur'
  },
  {
    id: 'segments',
    title: 'Segments clients',
    icon: <Users />,
    content: 'Étudiants, clubs universitaires, influenceurs, créateurs de contenu, petites entreprises, associations, événements, clients particuliers, marques locales.',
    className: ''
  },
  {
    id: 'canaux',
    title: 'Canaux',
    icon: <Megaphone />,
    content: 'Site web e-commerce, Instagram, TikTok, Facebook, WhatsApp Business, marketplace locale.',
    className: ''
  },
  {
    id: 'relation',
    title: 'Relation client',
    icon: <HeartHandshake />,
    content: 'Support WhatsApp rapide, suivi personnalisé des commandes, programme fidélité, promotions saisonnières.',
    className: ''
  },
  {
    id: 'revenus',
    title: 'Sources de revenus',
    icon: <Coins />,
    content: 'Vente de produits personnalisés, commandes B2B, packs événements, services de design graphique.',
    className: ''
  },
  {
    id: 'ressources',
    title: 'Ressources clés',
    icon: <Wrench />,
    content: 'Machines d’impression, fournisseurs textile, site web, équipe design et production, partenaires livraison.',
    className: ''
  },
  {
    id: 'activites',
    title: 'Activités clés',
    icon: <Activity />,
    content: 'Impression, personnalisation, gestion des commandes, marketing digital, livraison.',
    className: ''
  },
  {
    id: 'partenaires',
    title: 'Partenaires clés',
    icon: <Handshake />,
    content: 'Fournisseurs textile marocains, sociétés de livraison, designers freelances, influenceurs.',
    className: ''
  },
  {
    id: 'couts',
    title: 'Structure des coûts',
    icon: <Receipt />,
    content: 'Achat produits vierges, impression, marketing, livraison, hébergement site web, salaires.',
    className: ''
  }
];

const BMC = () => {
  return (
    <section id="bmc">
      <div className="container">
        <h2 className="section-title">Business Model Canvas</h2>
        <p className="section-subtitle">Notre modèle économique structuré pour une croissance durable sur le marché marocain.</p>
        
        <div className="bmc-grid">
          {bmcData.map((item) => (
            <div key={item.id} className={`glass-card bmc-card ${item.className}`}>
              <div className="card-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BMC;
