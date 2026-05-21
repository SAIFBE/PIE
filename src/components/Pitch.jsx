import React from 'react';
import { Download, MessageCircle, ShoppingBag } from 'lucide-react';

const Pitch = () => {
  return (
    <section id="pitch">
      <div className="container">
        <div className="pitch-section">
          <div className="pitch-content">
            <h2 className="section-title" style={{ color: 'white', marginBottom: '30px' }}>Le Projet en Bref</h2>
            <p className="pitch-text">
              Notre projet consiste à créer une plateforme marocaine de Print On Demand spécialisée dans la personnalisation de produits textiles, accessoires et supports business. Grâce à un système de production à la demande, nous permettons aux particuliers, étudiants, créateurs de contenu et entreprises de commander des produits uniques sans stock et sans minimum de quantité. Notre objectif est de démocratiser le merchandising personnalisé au Maroc avec une solution rapide, moderne et accessible.
            </p>
            <div className="hero-btns" style={{ marginTop: '40px' }}>
              <a href="#catalogue" className="btn btn-primary">
                <ShoppingBag size={20} />
                Découvrir le catalogue
              </a>
              <a href="#" className="btn btn-secondary" style={{ backgroundColor: '#25D366', color: 'white', borderColor: '#25D366' }}>
                <MessageCircle size={20} />
                Commander via WhatsApp
              </a>
              <a href="#" className="btn btn-accent">
                <Download size={20} />
                Business Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
