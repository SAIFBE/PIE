import React from 'react';
import { TrendingUp, Users, Smartphone, Globe, Target, Flame, ShieldCheck } from 'lucide-react';

const stats = [
  { value: "+30%", label: "Croissance e-commerce au Maroc" },
  { value: "65%", label: "Des acheteurs ont -35 ans" },
  { value: "X3", label: "Demande pour produits personnalisés" },
  { value: "8M+", label: "Utilisateurs actifs réseaux sociaux" }
];

const MarketStudy = () => {
  return (
    <section id="market">
      <div className="container">
        <h2 className="section-title">Étude de Marché</h2>
        <p className="section-subtitle">Un marché marocain en pleine expansion, avec une forte demande pour l'originalité et la personnalisation.</p>
        
        <div className="market-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div style={{ color: "var(--color-text-light)", fontSize: "0.9rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="market-grid">
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Target color="var(--color-primary)" />
              Cible Principale
            </h3>
            <p style={{ marginBottom: '15px' }}><strong>18–35 ans :</strong> étudiants, jeunes entrepreneurs, créateurs TikTok/Instagram, startups, clubs et associations.</p>
            <h4 style={{ margin: '20px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={18} color="var(--color-accent)" />
              Tendances
            </h4>
            <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <li>Personal branding</li>
              <li>Streetwear & Merchandising</li>
              <li>Événements étudiants</li>
              <li>Digitalisation des entreprises</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <ShieldCheck color="var(--color-secondary)" />
              Avantage Concurrentiel
            </h3>
            <p style={{ marginBottom: '15px', color: 'var(--color-text-light)' }}>
              Face aux imprimeries classiques (lentes, B2B), aux petites pages Instagram (pas scalables) et aux services étrangers (livraison très longue) :
            </p>
            <ul style={{ listStylePosition: 'inside', fontWeight: 500, lineHeight: '1.8' }}>
              <li>Livraison locale rapide (24-48h)</li>
              <li>Support client en Darija / Français</li>
              <li>Prix accessibles & Zéro minimum de commande</li>
              <li>Commande simplifiée via WhatsApp</li>
              <li>Production 100% locale</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStudy;
