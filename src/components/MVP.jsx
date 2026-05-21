import React from 'react';
import { Rocket, ShoppingCart, Target, Truck, BarChart2, CheckCircle, Smartphone } from 'lucide-react';

const MVP = () => {
  return (
    <section id="mvp">
      <div className="container">
        <h2 className="section-title">Conception du MVP</h2>
        <p className="section-subtitle">
          Créer une première version simple, rapide et rentable pour tester le marché.
        </p>

        <div className="glass-card" style={{ marginBottom: '40px', background: 'linear-gradient(145deg, var(--color-white), #fff9fa)', border: '1px solid rgba(193, 39, 45, 0.1)' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-primary)' }}>
            <Target size={24} />
            Pourquoi le MVP est important ?
          </h3>
          <p style={{ marginBottom: '15px' }}>
            Le MVP permet de valider le projet avec un faible investissement avant de développer une plateforme complète avec :
          </p>
          <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
            <li>Personnalisation avancée</li>
            <li>Paiement en ligne</li>
            <li>Tableau de bord vendeur</li>
            <li>Générateur de design</li>
            <li>Gestion automatisée des commandes</li>
            <li>Marketplace créateurs</li>
          </ul>
        </div>

        <div className="market-grid" style={{ marginBottom: '50px' }}>
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Rocket color="var(--color-secondary)" />
              Objectif du MVP
            </h3>
            <p style={{ marginBottom: '15px', color: 'var(--color-text-light)' }}>
              Le MVP permet de lancer rapidement le projet avec un minimum de fonctionnalités afin de :
            </p>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li>Tester l’intérêt du marché</li>
              <li>Réduire les risques financiers</li>
              <li>Obtenir des premiers clients</li>
              <li>Valider les produits les plus demandés</li>
              <li>Améliorer le service grâce aux retours clients</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <CheckCircle color="var(--color-accent)" />
              Étape 1 — Produits de départ
            </h3>
            <p style={{ marginBottom: '15px', color: 'var(--color-text-light)' }}>
              Limiter le lancement à quelques produits populaires :
            </p>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li>T-shirts personnalisés</li>
              <li>Hoodies</li>
              <li>Mugs</li>
              <li>Tote bags</li>
              <li>Stickers</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Smartphone color="var(--color-primary)" />
              Étape 2 — Landing page
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li>Présentation du projet</li>
              <li>Catalogue simple & Prix indicatifs</li>
              <li>Galerie produits</li>
              <li>Bouton WhatsApp & Formulaire de commande</li>
              <li>Témoignages & FAQ</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <ShoppingCart color="var(--color-secondary)" />
              Étape 3 — Gestion des commandes
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li>Réception des commandes via WhatsApp</li>
              <li>Google Forms ou formulaire React</li>
              <li>Paiement à la livraison</li>
              <li>Gestion manuelle des commandes</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Truck color="var(--color-accent)" />
              Étape 4 & 5 — Production et Livraison
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li><strong>Production :</strong> Impression locale, petite quantité, après commande, sans stock important.</li>
              <li><strong>Livraison :</strong> Livraison locale et nationale, tests des délais réels, suivi satisfaction client.</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <BarChart2 color="var(--color-primary)" />
              Étape 6 & 7 — Marketing & KPIs
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text)', lineHeight: '1.8' }}>
              <li><strong>Marketing :</strong> Instagram, TikTok, Facebook, WhatsApp, influenceurs étudiants, clubs.</li>
              <li><strong>KPIs :</strong> Visiteurs, commandes, conversion, best-sellers, coût acquisition, satisfaction, délais.</li>
            </ul>
          </div>
        </div>

        <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Architecture MVP : Timeline</h3>
        <div className="timeline-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px', 
          marginBottom: '50px' 
        }}>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-primary)' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Semaine 1</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)', padding: 0 }}>
              <li>Création branding</li>
              <li>Logo</li>
              <li>Identité visuelle</li>
            </ul>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-secondary)' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '15px' }}>Semaine 2</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)', padding: 0 }}>
              <li>Landing page React</li>
              <li>Catalogue produits</li>
            </ul>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-accent)' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-accent)', marginBottom: '15px' }}>Semaine 3</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)', padding: 0 }}>
              <li>Lancement Instagram/TikTok</li>
              <li>Premières publicités</li>
            </ul>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-black)' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-black)', marginBottom: '15px' }}>Semaine 4</h4>
            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)', padding: 0 }}>
              <li>Réception des premières commandes</li>
              <li>Tests livraison</li>
              <li>Analyse feedback</li>
            </ul>
          </div>
        </div>

        <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '30px' }}>Évolution future après MVP</h3>
        <div className="market-grid">
          <div className="glass-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-secondary)' }}>Version V2</h4>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Paiement en ligne</li>
              <li>Générateur de design & Upload d’images</li>
              <li>Tableau de bord client</li>
              <li>Système de suivi commandes</li>
              <li>Programme fidélité</li>
            </ul>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Version V3</h4>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Marketplace pour créateurs marocains</li>
              <li>IA pour générer des designs</li>
              <li>Impression automatisée</li>
              <li>Application mobile</li>
              <li>Expédition internationale</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MVP;
