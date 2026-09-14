import React from 'react';
import { Leaf, PhoneCall, Mail, Heart } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ setActiveTab, lang }) {
  const t = translations[lang] || translations.en;

  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--gray-200)',
      padding: '60px 0 30px 0',
      marginTop: '60px'
    }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          {/* Brand Info */}
          <div>
            <div className="logo-brand" onClick={() => setActiveTab('home')} style={{ marginBottom: '14px' }}>
              <div className="logo-icon">
                <Leaf size={24} />
              </div>
              <div className="brand-text-wrap">
                <span className="brand-title">{t.brandName}</span>
                <span className="brand-tagline">{t.tagline}</span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              A modern, simple, responsive agriculture platform empowering farmers with plant disease detection, crop recommendations, and market connectivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', color: 'var(--primary-green-dark)', marginBottom: '16px' }}>Quick Features</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => setActiveTab('plant-doctor')}>Plant Doctor Scanner</button></li>
              <li><button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => setActiveTab('crop-recommendation')}>Smart Crop Recommendation</button></li>
              <li><button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => setActiveTab('marketplace')}>Agro Marketplace</button></li>
              <li><button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }} onClick={() => setActiveTab('weather')}>Live Weather & Soil</button></li>
            </ul>
          </div>

          {/* Helpline & Support */}
          <div>
            <h4 style={{ fontSize: '16px', color: 'var(--primary-green-dark)', marginBottom: '16px' }}>Farmer Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PhoneCall size={18} className="text-pink-accent-dark" />
                <strong>Toll-Free: 1800-AGROCARE</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={18} className="text-primary-green" />
                <span>support@agrocare.org</span>
              </div>
              <span className="badge badge-pink" style={{ width: 'fit-content', marginTop: '6px' }}>
                Available in English, Telugu, Hindi
              </span>
            </div>
          </div>

        </div>

        {/* Legal Regulatory Disclaimer Line */}
        <div style={{
          background: 'var(--pink-accent-bg)',
          border: '1px solid var(--pink-accent-border)',
          padding: '14px 20px',
          borderRadius: 'var(--radius-md)',
          fontSize: '12px',
          color: 'var(--pink-accent-dark)',
          lineHeight: 1.5,
          marginBottom: '24px'
        }}>
          <strong>Agricultural Safety Notice:</strong> All plant disease treatment, fungicide recommendations, and crop feasibility outputs provided by AgroCare are purely informational. Farmers must consult their local agricultural officer or KVK extension center to verify chemical dosages, environmental regulations, and specific crop suitability prior to field application.
        </div>

        {/* Copyright Bar */}
        <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <div>© 2026 AgroCare Inc. All Rights Reserved. Built for Farmers.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Smart Farming for Healthy Harvests <Heart size={14} className="text-pink-accent-dark" />
          </div>
        </div>

        {/* CREATED BY ANUSHA, DHANA, HYMA, SIRISHA, SANGEETHA & GANESH (WITHOUT ICONS) */}
        <div style={{
          marginTop: '20px',
          textAlign: 'center',
          padding: '14px 20px',
          background: 'linear-gradient(135deg, var(--primary-green-subtle), var(--pink-accent-bg))',
          border: '1px dashed var(--pink-accent-badge)',
          borderRadius: 'var(--radius-lg)',
          fontSize: '15px',
          fontWeight: 800,
          color: 'var(--primary-green-dark)'
        }}>
          Created by Anusha, Dhana, Hyma, Sirisha, Sangeetha & Ganesh
        </div>

      </div>
    </footer>
  );
}
