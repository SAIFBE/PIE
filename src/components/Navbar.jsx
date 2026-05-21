import React, { useState, useEffect } from 'react';
import { Menu, Printer } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Printer size={28} />
          POD<span>Maroc</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#problem">Problème</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#personnaliser">Personnaliser</a></li>
          <li><a href="#bmc">Modèle Éco</a></li>
          <li><a href="#catalogue">Catalogue</a></li>
          <li><a href="#market">Marché</a></li>
          <li><a href="#swot">SWOT</a></li>
          <li><a href="#forecast">Prévisions</a></li>
          <li><a href="#mvp">MVP</a></li>
          <li><a href="#pitch">Pitch</a></li>
        </ul>
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
