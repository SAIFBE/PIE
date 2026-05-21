import React from 'react';
import { Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Printer size={28} />
          POD<span>Maroc</span>
        </div>
        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Print On Demand Maroc. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
