import React from 'react';
import { Leaf, ShieldCheck, Heart, Users, PhoneCall, Award } from 'lucide-react';
import { translations } from '../data/translations';

export default function About({ lang }) {
  const t = translations[lang] || translations.en;

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
        <div className="badge badge-pink" style={{ marginBottom: '12px' }}>
          <Leaf size={16} /> Empowering Indian Agriculture
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '12px' }}>
          About AgroCare
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
          "Smart Farming. Healthy Crops. Better Harvests."
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto 60px auto' }}>
        
        <div className="card">
          <ShieldCheck size={36} className="text-primary-green" style={{ marginBottom: '14px' }} />
          <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>Our Mission</h3>
          <p style={{ fontSize: '14px' }}>
            To bridge technology gaps for small and medium farmers across India by providing simple, accessible AI tools for disease diagnosis, crop feasibility recommendations, and direct fair-price market access.
          </p>
        </div>

        <div className="card card-pink-accent">
          <Heart size={36} className="text-pink-accent-dark" style={{ marginBottom: '14px' }} />
          <h3 style={{ fontSize: '20px', color: 'var(--pink-accent-dark)', marginBottom: '8px' }}>Farmer First Design</h3>
          <p style={{ fontSize: '14px', color: '#701a75' }}>
            Built with large touch controls, voice-friendly labels, multi-language support (English, Telugu, Hindi), minimal complex jargon, and works smoothly even on low-cost smartphones.
          </p>
        </div>

        <div className="card">
          <Award size={36} className="text-primary-green" style={{ marginBottom: '14px' }} />
          <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>Scientific Feasibility</h3>
          <p style={{ fontSize: '14px' }}>
            All crop and disease recommendations combine agronomic parameters with local weather data, soil test indicators, and regulatory safety guidelines.
          </p>
        </div>

      </div>

      {/* Toll-free Farmer Helpline banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-green-subtle), var(--pink-accent-bg))',
        border: '1px dashed var(--primary-green)',
        borderRadius: 'var(--radius-xl)',
        padding: '36px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <PhoneCall size={40} className="text-primary-green" style={{ marginBottom: '12px' }} />
        <h2 style={{ fontSize: '26px', color: 'var(--primary-green-dark)', marginBottom: '6px' }}>
          Free Farmer Helpline Support
        </h2>
        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--pink-accent-dark)', margin: '8px 0' }}>
          📞 1800-AGROCARE (1800-247-6227)
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
          Available 7 AM – 8 PM daily. Speak directly to certified Krishi Vigyan Kendra (KVK) agricultural experts.
        </p>
      </div>

    </div>
  );
}
