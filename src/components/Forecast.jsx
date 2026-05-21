import React from 'react';

const forecastData = [
  {
    year: "Année 1",
    ca: "120 000 DH",
    prod: "60 000 DH",
    marketing: "15 000 DH",
    livraison: "10 000 DH",
    divers: "20 000 DH",
    net: "15 000 DH"
  },
  {
    year: "Année 2",
    ca: "280 000 DH",
    prod: "120 000 DH",
    marketing: "30 000 DH",
    livraison: "20 000 DH",
    divers: "35 000 DH",
    net: "75 000 DH"
  },
  {
    year: "Année 3",
    ca: "500 000 DH",
    prod: "200 000 DH",
    marketing: "50 000 DH",
    livraison: "35 000 DH",
    divers: "50 000 DH",
    net: "165 000 DH"
  }
];

const Forecast = () => {
  return (
    <section id="forecast" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Résultat Prévisionnel</h2>
        <p className="section-subtitle">Projections financières sur 3 ans basées sur une croissance mesurée et scalable.</p>
        
        <div className="forecast-grid">
          {forecastData.map((data, i) => (
            <div key={i} className="glass-card forecast-card">
              <div className="forecast-year">{data.year}</div>
              
              <div className="data-row">
                <span>Chiffre d'affaires</span>
                <span style={{ fontWeight: 600 }}>{data.ca}</span>
              </div>
              <div className="data-row">
                <span style={{ color: 'var(--color-text-light)' }}>Coût production</span>
                <span style={{ color: 'var(--color-primary)' }}>-{data.prod}</span>
              </div>
              <div className="data-row">
                <span style={{ color: 'var(--color-text-light)' }}>Marketing</span>
                <span style={{ color: 'var(--color-primary)' }}>-{data.marketing}</span>
              </div>
              <div className="data-row">
                <span style={{ color: 'var(--color-text-light)' }}>Livraison</span>
                <span style={{ color: 'var(--color-primary)' }}>-{data.livraison}</span>
              </div>
              <div className="data-row">
                <span style={{ color: 'var(--color-text-light)' }}>Charges diverses</span>
                <span style={{ color: 'var(--color-primary)' }}>-{data.divers}</span>
              </div>
              <div className="data-row net">
                <span>Résultat Net Estimé</span>
                <span>{data.net}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forecast;
