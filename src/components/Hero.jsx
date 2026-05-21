import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Zéro Stock • Impression à la demande</div>
          <h1 className="hero-title">
            Personnalisez, imprimez et <span>vendez sans stock</span>
          </h1>
          <p className="hero-desc">
            Plateforme marocaine de Print On Demand permettant aux particuliers, créateurs, étudiants, associations et entreprises de personnaliser des produits imprimés sans stock, sans minimum de commande et avec livraison locale rapide.
          </p>
          <div className="hero-btns">
            <a href="#catalogue" className="btn btn-primary">
              <ShoppingBag size={20} />
              Découvrir les produits
            </a>
            <a href="#pitch" className="btn btn-secondary">
              Voir le Pitch
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
