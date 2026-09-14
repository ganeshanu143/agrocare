import React from 'react';
import { Stethoscope, Compass, ShoppingBag, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ setActiveTab, lang }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="hero-page animate-fade-in">
      {/* Hero Banner Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 100%)',
        padding: '60px 0 80px 0',
        borderBottom: '1px solid var(--gray-200)'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          {/* Hero Left Text & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="badge badge-pink" style={{ width: 'fit-content', padding: '6px 14px' }}>
              <ShieldCheck size={16} /> 100% Free Smart Farmer Assistant
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 800, color: 'var(--primary-green-dark)', lineHeight: 1.15 }}>
              {t.hero.title}
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {t.hero.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '10px' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setActiveTab('plant-doctor')}
              >
                <Stethoscope size={22} />
                {t.hero.checkPlant}
              </button>

              <button
                className="btn btn-secondary btn-lg"
                onClick={() => setActiveTab('crop-recommendation')}
              >
                <Compass size={22} />
                {t.hero.findCrop}
              </button>

              <button
                className="btn btn-pink btn-lg"
                onClick={() => setActiveTab('marketplace')}
              >
                <ShoppingBag size={22} />
                {t.hero.visitMarket}
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '20px', pt: '20px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>50,000+</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Farmers Guided</div>
              </div>
              <div style={{ borderLeft: '1px solid var(--gray-300)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--pink-accent-dark)' }}>94% Accurate</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Disease Scanner</div>
              </div>
              <div style={{ borderLeft: '1px solid var(--gray-300)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green)' }}>Direct Market</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Zero Middleman</div>
              </div>
            </div>
          </div>

          {/* Hero Right Banner Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(135deg, var(--primary-green-light), var(--pink-accent-soft))',
              borderRadius: 'var(--radius-xl)',
              filter: 'blur(20px)',
              zIndex: 0,
              opacity: 0.7
            }} />
            <img
              src="/hero_banner.jpg"
              alt="Lush green healthy smart farm"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'var(--shadow-lg)',
                objectFit: 'cover',
                maxHeight: '420px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main 3 Feature Cards Section */}
      <section style={{ padding: '70px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
            <span className="badge badge-green" style={{ marginBottom: '12px' }}>Smart Farming Modules</span>
            <h2 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '12px' }}>
              Everything You Need to Succeed on Your Land
            </h2>
            <p style={{ fontSize: '16px' }}>
              Designed specifically for farmers with simple language, large buttons, and step-by-step guidance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* Card 1: Plant Doctor */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid var(--primary-green)' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--primary-green-light)',
                color: 'var(--primary-green-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Stethoscope size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{t.features.card1Title}</h3>
              <p style={{ flex: 1, marginBottom: '24px', fontSize: '15px' }}>{t.features.card1Desc}</p>
              <button
                className="btn btn-primary"
                onClick={() => setActiveTab('plant-doctor')}
                style={{ width: '100%' }}
              >
                {t.features.card1Btn} <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 2: Smart Crop Recommendation */}
            <div className="card card-pink-accent" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid var(--pink-accent-badge)' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'var(--pink-accent-soft)',
                color: 'var(--pink-accent-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px', color: 'var(--pink-accent-dark)' }}>{t.features.card2Title}</h3>
              <p style={{ flex: 1, marginBottom: '24px', fontSize: '15px', color: '#701a75' }}>{t.features.card2Desc}</p>
              <button
                className="btn btn-pink"
                onClick={() => setActiveTab('crop-recommendation')}
                style={{ width: '100%', fontWeight: 800 }}
              >
                {t.features.card2Btn} <ArrowRight size={18} />
              </button>
            </div>

            {/* Card 3: Agro Marketplace */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderTop: '4px solid #10b981' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#ecfdf5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <ShoppingBag size={28} />
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{t.features.card3Title}</h3>
              <p style={{ flex: 1, marginBottom: '24px', fontSize: '15px' }}>{t.features.card3Desc}</p>
              <button
                className="btn btn-secondary"
                onClick={() => setActiveTab('marketplace')}
                style={{ width: '100%' }}
              >
                {t.features.card3Btn} <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
