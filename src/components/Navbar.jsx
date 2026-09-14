import React, { useState } from 'react';
import { Leaf, Menu, X, User, LogOut, Sun, Sprout, ShoppingBag, Stethoscope, Compass } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ activeTab, setActiveTab, lang, farmerUser, onLogout, openAuthModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang] || translations.en;

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo & Tagline */}
        <div className="logo-brand" onClick={() => handleNavClick('home')}>
          <div className="logo-icon">
            <Leaf size={26} strokeWidth={2.5} />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">{t.brandName}</span>
            <span className="brand-tagline">{t.tagline}</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              {t.nav.home}
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'plant-doctor' ? 'active' : ''}`}
              onClick={() => handleNavClick('plant-doctor')}
            >
              <Stethoscope size={16} />
              {t.nav.plantDoctor}
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'crop-recommendation' ? 'active' : ''}`}
              onClick={() => handleNavClick('crop-recommendation')}
            >
              <Compass size={16} />
              {t.nav.cropRec}
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'marketplace' ? 'active' : ''}`}
              onClick={() => handleNavClick('marketplace')}
            >
              <ShoppingBag size={16} />
              {t.nav.marketplace}
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'weather' || activeTab === 'soil' ? 'active' : ''}`}
              onClick={() => handleNavClick('weather')}
            >
              <Sun size={16} />
              {t.nav.weather}
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('dashboard')}
            >
              <Sprout size={16} />
              {t.nav.dashboard}
            </button>
          </li>
        </ul>

        {/* Actions (Farmer Badge / Login) */}
        <div className="nav-actions">
          {farmerUser ? (
            <div className="badge badge-pink" style={{ cursor: 'pointer', padding: '6px 14px' }} onClick={() => handleNavClick('dashboard')}>
              <User size={14} /> {farmerUser.name}
            </div>
          ) : (
            <button
              className="btn btn-secondary btn-sm"
              onClick={openAuthModal}
            >
              <User size={16} />
              {t.nav.login}
            </button>
          )}

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
            {t.nav.home}
          </button>
          <button className={`nav-link-btn ${activeTab === 'plant-doctor' ? 'active' : ''}`} onClick={() => handleNavClick('plant-doctor')}>
            <Stethoscope size={18} /> {t.nav.plantDoctor}
          </button>
          <button className={`nav-link-btn ${activeTab === 'crop-recommendation' ? 'active' : ''}`} onClick={() => handleNavClick('crop-recommendation')}>
            <Compass size={18} /> {t.nav.cropRec}
          </button>
          <button className={`nav-link-btn ${activeTab === 'marketplace' ? 'active' : ''}`} onClick={() => handleNavClick('marketplace')}>
            <ShoppingBag size={18} /> {t.nav.marketplace}
          </button>
          <button className={`nav-link-btn ${activeTab === 'weather' ? 'active' : ''}`} onClick={() => handleNavClick('weather')}>
            <Sun size={18} /> {t.nav.weather}
          </button>
          <button className={`nav-link-btn ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('dashboard')}>
            <Sprout size={18} /> {t.nav.dashboard}
          </button>
        </div>
      </div>
    </nav>
  );
}
