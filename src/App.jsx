import React, { useState, useEffect } from 'react';
import './styles/main.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlantDoctor from './components/PlantDoctor';
import CropRecommendation from './components/CropRecommendation';
import Marketplace from './components/Marketplace';
import FarmerDashboard from './components/FarmerDashboard';
import WeatherDashboard from './components/WeatherDashboard';
import SoilDashboard from './components/SoilDashboard';
import About from './components/About';
import Footer from './components/Footer';
import FarmerLogin from './components/FarmerLogin';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Farmer Login state - mandatory starting login screen
  const [farmerUser, setFarmerUser] = useState(() => {
    const saved = localStorage.getItem('agrocare_farmer');
    return saved ? JSON.parse(saved) : null;
  });

  // Apply theme dataset attribute to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLoginSuccess = (userObj) => {
    setFarmerUser(userObj);
    localStorage.setItem('agrocare_farmer', JSON.stringify(userObj));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setFarmerUser(null);
    localStorage.removeItem('agrocare_farmer');
  };

  // Mandatory starting screen if not logged in
  if (!farmerUser) {
    return (
      <FarmerLogin
        lang={lang}
        onLoginSuccess={handleLoginSuccess}
        isInitialScreen={true}
      />
    );
  }

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        farmerUser={farmerUser}
        onLogout={handleLogout}
        openAuthModal={() => setShowAuthModal(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <HeroSection setActiveTab={setActiveTab} lang={lang} />
        )}

        {activeTab === 'plant-doctor' && (
          <PlantDoctor lang={lang} />
        )}

        {activeTab === 'crop-recommendation' && (
          <CropRecommendation lang={lang} />
        )}

        {activeTab === 'marketplace' && (
          <Marketplace lang={lang} />
        )}

        {activeTab === 'dashboard' && (
          <FarmerDashboard
            setActiveTab={setActiveTab}
            lang={lang}
            setLang={setLang}
            theme={theme}
            setTheme={setTheme}
            farmerUser={farmerUser}
            onLogout={handleLogout}
          />
        )}

        {activeTab === 'weather' && (
          <WeatherDashboard />
        )}

        {activeTab === 'soil' && (
          <SoilDashboard />
        )}

        {activeTab === 'about' && (
          <About lang={lang} />
        )}
      </main>

      {/* Login Modal for re-authentication if triggered */}
      {showAuthModal && (
        <FarmerLogin
          lang={lang}
          onLoginSuccess={handleLoginSuccess}
          isInitialScreen={false}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} lang={lang} />
    </div>
  );
}
