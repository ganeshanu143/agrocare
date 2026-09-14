import React from 'react';
import { FlaskConical, CheckCircle2, AlertTriangle, ArrowUpRight, ShieldCheck, Leaf } from 'lucide-react';
import { sampleSoilData } from '../data/mockData';

export default function SoilDashboard() {
  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
        <div className="badge badge-green" style={{ marginBottom: '12px' }}>
          <FlaskConical size={16} /> Soil Health & Fertility Analysis
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
          Soil Health Dashboard
        </h1>
        <p style={{ fontSize: '16px' }}>Simple visual status of your farm soil fertility without complex technical jargon.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        
        {/* pH Card */}
        <div className="card" style={{ borderTop: '4px solid var(--primary-green)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Soil Reaction</div>
              <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)' }}>pH Level</h3>
            </div>
            <span className="badge badge-green">{sampleSoilData.pH.status}</span>
          </div>

          <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
            {sampleSoilData.pH.value}
          </div>

          <p style={{ fontSize: '14px', marginBottom: '16px' }}>{sampleSoilData.pH.advice}</p>

          <div style={{ background: 'var(--primary-green-subtle)', padding: '12px', borderRadius: 'var(--radius-md)', fontSize: '13px', color: 'var(--primary-green-dark)' }}>
            💡 <strong>Farmer Tip:</strong> pH 6.5 to 7.0 allows maximum uptake of fertilizers.
          </div>
        </div>

        {/* Nitrogen Card */}
        <div className="card" style={{ borderTop: '4px solid var(--primary-green)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Leaf Growth Nutrient</div>
              <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)' }}>Nitrogen (N)</h3>
            </div>
            <span className="badge badge-green">{sampleSoilData.nitrogen.status}</span>
          </div>

          <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
            {sampleSoilData.nitrogen.value}
          </div>

          <p style={{ fontSize: '14px', marginBottom: '16px' }}>{sampleSoilData.nitrogen.advice}</p>

          <div style={{ background: 'var(--primary-green-subtle)', padding: '12px', borderRadius: 'var(--radius-md)', fontSize: '13px', color: 'var(--primary-green-dark)' }}>
            🌱 <strong>Action:</strong> Apply Azospirillum bio-fertilizer during tilling.
          </div>
        </div>

        {/* Phosphorus Card */}
        <div className="card card-pink-accent" style={{ borderTop: '4px solid var(--pink-accent-badge)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Root Development Nutrient</div>
              <h3 style={{ fontSize: '22px', color: 'var(--pink-accent-dark)' }}>Phosphorus (P)</h3>
            </div>
            <span className="badge badge-pink">{sampleSoilData.phosphorus.status}</span>
          </div>

          <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--pink-accent-dark)', marginBottom: '8px' }}>
            {sampleSoilData.phosphorus.value}
          </div>

          <p style={{ fontSize: '14px', marginBottom: '16px', color: '#701a75' }}>{sampleSoilData.phosphorus.advice}</p>

          <div style={{ background: 'var(--white)', padding: '12px', borderRadius: 'var(--radius-md)', fontSize: '13px', color: 'var(--pink-accent-dark)', border: '1px solid var(--pink-accent-border)' }}>
            ⚠️ <strong>Notice:</strong> Excess DAP fertilizer can lock micronutrients in soil.
          </div>
        </div>

        {/* Potassium Card */}
        <div className="card card-pink-accent" style={{ borderTop: '4px solid var(--pink-accent-badge)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Fruit & Grain Strength</div>
              <h3 style={{ fontSize: '22px', color: 'var(--pink-accent-dark)' }}>Potassium (K)</h3>
            </div>
            <span className="badge badge-pink">{sampleSoilData.potassium.status}</span>
          </div>

          <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--pink-accent-dark)', marginBottom: '8px' }}>
            {sampleSoilData.potassium.value}
          </div>

          <p style={{ fontSize: '14px', marginBottom: '16px', color: '#701a75' }}>{sampleSoilData.potassium.advice}</p>

          <div style={{ background: 'var(--white)', padding: '12px', borderRadius: 'var(--radius-md)', fontSize: '13px', color: 'var(--pink-accent-dark)', border: '1px solid var(--pink-accent-border)' }}>
            💡 <strong>Recommendation:</strong> Add Muriate of Potash (MOP) before flowering.
          </div>
        </div>

        {/* Moisture Card */}
        <div className="card" style={{ borderTop: '4px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Topsoil Water Content</div>
              <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)' }}>Soil Moisture</h3>
            </div>
            <span className="badge badge-green">{sampleSoilData.moisture.status}</span>
          </div>

          <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
            {sampleSoilData.moisture.value}
          </div>

          <p style={{ fontSize: '14px' }}>{sampleSoilData.moisture.advice}</p>
        </div>

        {/* Organic Matter Card */}
        <div className="card" style={{ borderTop: '4px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Humus & Microbial Carbon</div>
              <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)' }}>Organic Matter</h3>
            </div>
            <span className="badge badge-green">{sampleSoilData.organicMatter.status}</span>
          </div>

          <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
            {sampleSoilData.organicMatter.value}
          </div>

          <p style={{ fontSize: '14px' }}>{sampleSoilData.organicMatter.advice}</p>
        </div>

      </div>

    </div>
  );
}
