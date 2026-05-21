import React from 'react';
import { ShieldCheck, AlertTriangle, Lightbulb, AlertOctagon } from 'lucide-react';

const SWOT = () => {
  return (
    <section id="swot">
      <div className="container">
        <h2 className="section-title">Analyse SWOT du projet</h2>
        <p className="section-subtitle">
          Analyse stratégique permettant d’identifier les forces, faiblesses, opportunités et menaces du projet Print On Demand Maroc.
        </p>

        <div className="market-grid">
          {/* FORCES - Vert */}
          <div className="glass-card swot-card" style={{ borderLeft: '4px solid #10b981' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#10b981' }}>
              <ShieldCheck size={28} />
              Forces (Strengths)
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Zéro stock : pas de coûts d’inventaire</li>
              <li>Production locale 100% marocaine</li>
              <li>Livraison rapide (24h à 48h)</li>
              <li>Service client réactif (Darija, Français)</li>
              <li>Produits de haute qualité (Hoodies, T-shirts)</li>
            </ul>
          </div>

          {/* FAIBLESSES - Jaune/Orange */}
          <div className="glass-card swot-card" style={{ borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#f59e0b' }}>
              <AlertTriangle size={28} />
              Faiblesses (Weaknesses)
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Dépendance aux fournisseurs locaux de textile</li>
              <li>Coûts de production plus élevés à l'unité</li>
              <li>Notoriété initiale faible (nouveau projet)</li>
              <li>Logistique complexe en cas de retour produit</li>
            </ul>
          </div>

          {/* OPPORTUNITÉS - Bleu */}
          <div className="glass-card swot-card" style={{ borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#3b82f6' }}>
              <Lightbulb size={28} />
              Opportunités (Opportunities)
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Croissance forte de l'e-commerce au Maroc</li>
              <li>Marché des créateurs de contenu en pleine explosion</li>
              <li>Forte demande de personnalisation (étudiants, clubs)</li>
              <li>Possibilité d'ajouter de nouveaux produits (Mugs, Tote bags)</li>
              <li>Développement d'une application mobile future</li>
            </ul>
          </div>

          {/* MENACES - Rouge */}
          <div className="glass-card swot-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#ef4444' }}>
              <AlertOctagon size={28} />
              Menaces (Threats)
            </h3>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Concurrence des imprimeries traditionnelles (prix de gros)</li>
              <li>Concurrence des plateformes internationales (Redbubble, etc.)</li>
              <li>Variations des coûts de matière première</li>
              <li>Problèmes éventuels avec les sociétés de livraison</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWOT;
