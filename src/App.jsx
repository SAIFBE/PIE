import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Personnaliser from './components/Personnaliser';
import BMC from './components/BMC';
import Catalogue from './components/Catalogue';
import MarketStudy from './components/MarketStudy';
import SWOT from './components/SWOT';
import Forecast from './components/Forecast';
import Pitch from './components/Pitch';
import MVP from './components/MVP';
import Footer from './components/Footer';
import MVPPage from './pages/MVPPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Problem />
            <Solution />
            <Personnaliser />
            <BMC />
            <Catalogue />
            <MarketStudy />
            <SWOT />
            <Forecast />
            <MVP />
            <Pitch />
          </>
        } />
        <Route path="/mvp" element={<MVPPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
