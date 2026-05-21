import React from 'react';
import { Sparkles, Layers, Zap, Image as ImageIcon, Palette, PenTool, ArrowRight, Star } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={28} color="var(--color-primary)" />,
    title: "Design Intuitif",
    desc: "Un studio de création pensé pour la simplicité. Glissez, déposez et prévisualisez vos idées en temps réel, sans aucune compétence technique.",
    borderColor: "var(--color-primary)"
  },
  {
    icon: <Palette size={28} color="var(--color-secondary)" />,
    title: "Branding Puissant",
    desc: "Démarquez-vous avec des impressions haute définition qui respectent fidèlement les couleurs et l'identité de votre marque.",
    borderColor: "var(--color-secondary)"
  },
  {
    icon: <Zap size={28} color="var(--color-accent)" />,
    title: "Vitesse Flash",
    desc: "De la conception à l'expédition en un éclair. Notre processus optimisé garantit une production rapide pour vos lancements urgents.",
    borderColor: "var(--color-accent)"
  },
  {
    icon: <ImageIcon size={28} color="#3b82f6" />,
    title: "Mockups 3D Ultra-Réalistes",
    desc: "Ne devinez plus. Visualisez le rendu final de vos produits avec nos générateurs de mockups hyper-réalistes avant de commander.",
    borderColor: "#3b82f6"
  },
  {
    icon: <Layers size={28} color="#8b5cf6" />,
    title: "Qualité Premium",
    desc: "Nous sélectionnons rigoureusement des textiles organiques et des encres éco-responsables pour un résultat durable et confortable.",
    borderColor: "#8b5cf6"
  },
  {
    icon: <PenTool size={28} color="#f59e0b" />,
    title: "Créativité Sans Limite",
    desc: "T-shirts, hoodies, accessoires ou packaging... Imprimez sur une multitude de supports sans aucun minimum de quantité.",
    borderColor: "#f59e0b"
  }
];

const Personnaliser = () => {
  return (
    <section id="personnaliser" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fdfdfd' }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(193,39,45,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,98,51,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(212, 175, 55, 0.1)', color: '#a68415', borderRadius: '50px', fontWeight: '600', fontSize: '0.9rem', marginBottom: '20px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <Star size={16} /> L'Expérience Créateur
          </div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            Votre Vision. <span style={{ background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Notre Toile.</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', marginBottom: '0' }}>
            Que vous soyez étudiant, créateur de contenu, startup ou influenceur, nous transformons vos idées en produits physiques exceptionnels. Une personnalisation pensée pour l'économie créative marocaine.
          </p>
        </div>

        {/* Features Grid */}
        <div className="forecast-grid" style={{ marginBottom: '60px' }}>
          {features.map((feature, index) => (
            <div key={index} className="glass-card swot-card" style={{ borderTop: `4px solid ${feature.borderColor}`, textAlign: 'left', padding: '30px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: `${feature.borderColor}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--color-black)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7', fontSize: '1rem' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)', border: '1px solid rgba(0,0,0,0.05)', padding: '50px 30px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '15px', fontFamily: "'Outfit', sans-serif" }}>Prêt à lancer votre collection ?</h3>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '30px', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Rejoignez l'avant-garde des créateurs marocains et commencez à vendre des produits à votre image sans gérer de stock.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#catalogue" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Démarrer la création <ArrowRight size={20} />
            </a>
            <a href="/mvp" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Voir une démo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Personnaliser;
