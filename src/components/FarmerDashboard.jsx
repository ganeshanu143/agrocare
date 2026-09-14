import React, { useState, useEffect } from 'react';
import { Sprout, Sun, FlaskConical, Stethoscope, ArrowRight, Settings, Globe, Moon, Camera, LogOut, History, RefreshCw, ShieldCheck } from 'lucide-react';
import { sampleWeatherData, sampleSoilData, sampleHistory } from '../data/mockData';
import { translations } from '../data/translations';

export default function FarmerDashboard({
  setActiveTab,
  lang,
  setLang,
  theme,
  setTheme,
  farmerUser,
  onLogout
}) {
  const t = translations[lang] || translations.en;

  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('unknown');
  const [isTestingCamera, setIsTestingCamera] = useState(false);

  // Check camera permission
  useEffect(() => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'camera' })
        .then(result => {
          setCameraPermissionStatus(result.state);
          result.onchange = () => {
            setCameraPermissionStatus(result.state);
          };
        })
        .catch(() => {
          setCameraPermissionStatus('prompt');
        });
    }
  }, []);

  const requestCameraAccess = async () => {
    setIsTestingCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermissionStatus('granted');
      stream.getTracks().forEach(track => track.stop());
      alert("Camera Permission Granted Successfully! You can now capture live leaf photos in Plant Doctor.");
    } catch (err) {
      console.warn("Camera permission denied:", err);
      setCameraPermissionStatus('denied');
      alert("Camera Permission was Denied or is Unavailable. You can still upload leaf photos or pick sample leaves.");
    } finally {
      setIsTestingCamera(false);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      {/* Welcome Header */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-green-dark), var(--primary-green))',
        color: 'var(--white)',
        padding: '36px',
        borderRadius: 'var(--radius-xl)',
        marginBottom: '36px',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div className="badge badge-pink" style={{ marginBottom: '10px', background: 'rgba(255,255,255,0.2)', color: 'var(--white)', border: 'none' }}>
          Registered Farmer Profile #{farmerUser?.phone ? farmerUser.phone.slice(-4) : '8842'}
        </div>
        <h1 style={{ fontSize: '32px', color: '#ffffff', marginBottom: '8px' }}>
          Welcome, {farmerUser?.name || 'Ramesh Farmer'}!
        </h1>
        <p style={{ color: 'var(--primary-green-light)', fontSize: '16px' }}>
          Farm Location: Guntur, Andhra Pradesh | Mobile: +91 {farmerUser?.phone || '9876543210'}
        </p>
      </div>

      {/* DASHBOARD CARDS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
        
        {/* Card 1: My Farm Summary */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>My Farm Status</h3>
            <Sprout className="text-primary-green" size={24} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
              <span>Current Season Crop:</span> <strong>Hybrid Tomato</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
              <span>Planting Date:</span> <strong>01 Aug 2026</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
              <span>Irrigation Source:</span> <strong>Borewell Drip</strong>
            </div>
          </div>
        </div>

        {/* Card 2: Weather Quick Summary */}
        <div className="card card-pink-accent">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--pink-accent-dark)' }}>Live Weather Advisory</h3>
            <Sun className="text-pink-accent-dark" size={24} />
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{sampleWeatherData.currentTemp}</span>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{sampleWeatherData.condition}</span>
          </div>

          <div style={{ fontSize: '13px', background: 'var(--white)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--pink-accent-border)', color: 'var(--pink-accent-dark)', fontWeight: 700 }}>
            💡 {sampleWeatherData.advisories[0].text}
          </div>

          <button className="btn btn-pink btn-sm" onClick={() => setActiveTab('weather')} style={{ marginTop: '16px', width: '100%' }}>
            View Full Weather <ArrowRight size={16} />
          </button>
        </div>

        {/* Card 3: Soil Condition */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>Soil Health Status</h3>
            <FlaskConical className="text-primary-green" size={24} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px', marginBottom: '16px' }}>
            <div style={{ background: 'var(--primary-green-subtle)', padding: '10px', borderRadius: '8px' }}>
              <div>pH: <strong>{sampleSoilData.pH.value}</strong></div>
              <span className="badge badge-green" style={{ fontSize: '11px' }}>{sampleSoilData.pH.status}</span>
            </div>
            <div style={{ background: 'var(--pink-accent-bg)', padding: '10px', borderRadius: '8px' }}>
              <div>Potassium (K):</div>
              <span className="badge badge-pink" style={{ fontSize: '11px' }}>{sampleSoilData.potassium.status}</span>
            </div>
          </div>

          <button className="btn btn-secondary btn-sm" onClick={() => setActiveTab('soil')} style={{ width: '100%' }}>
            View Soil Dashboard <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* RECENT PLANT SCANS WIDGET */}
      <div className="card" style={{ marginTop: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Stethoscope className="text-primary-green" size={24} /> Recent Plant Health Scans
          </h3>
          <button className="btn btn-primary btn-sm" onClick={() => setActiveTab('plant-doctor')}>
            Scan New Plant
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {sampleHistory.map((item) => (
            <div key={item.id} style={{ background: 'var(--gray-100)', padding: '16px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-green)' }}>
              <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-green-dark)', marginBottom: '4px' }}>{item.plantName}</div>
              <div style={{ fontSize: '13px', color: 'var(--pink-accent-dark)', fontWeight: 700 }}>{item.disease}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>Date: {item.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FARMER SETTINGS & PREFERENCES SECTION (MOVED DIRECTLY INTO DASHBOARD)     */}
      {/* ========================================================================= */}
      <div className="card" style={{ marginTop: '36px', borderTop: '6px solid var(--pink-accent-badge)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', borderBottom: '1px solid var(--gray-200)', pb: '14px' }}>
          <div style={{ background: 'var(--pink-accent-soft)', color: 'var(--pink-accent-dark)', padding: '10px', borderRadius: '12px' }}>
            <Settings size={26} />
          </div>
          <div>
            <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>Farmer Settings & Account Controls</h2>
            <p style={{ fontSize: '14px', margin: 0 }}>Manage your language, website theme, camera permissions, scan history, and session.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          {/* 1. Change Language Option */}
          <div style={{ background: 'var(--gray-100)', padding: '20px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Globe className="text-primary-green" size={24} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-dark)' }}>Change Language</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Select preferred language</div>
              </div>
            </div>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="form-select"
              style={{ fontWeight: 800, fontSize: '15px' }}
            >
              <option value="en">English</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
          </div>

          {/* 2. Theme Switcher Option */}
          <div style={{ background: 'var(--gray-100)', padding: '20px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              {theme === 'dark' ? <Moon className="text-pink-accent-dark" size={24} /> : <Sun className="text-primary-green" size={24} />}
              <div>
                <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-dark)' }}>Website Theme</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Light or Dark mode</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setTheme('light')}
              >
                <Sun size={16} /> Light
              </button>
              <button
                className={`btn ${theme === 'dark' ? 'btn-pink' : 'btn-secondary'}`}
                onClick={() => setTheme('dark')}
              >
                <Moon size={16} /> Dark
              </button>
            </div>
          </div>

          {/* 3. Camera Permission Option */}
          <div style={{ background: 'var(--gray-100)', padding: '20px', borderRadius: 'var(--radius-md)', gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Camera className="text-primary-green" size={24} />
                <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-dark)' }}>Camera Permission</div>
              </div>

              <span className={`badge ${cameraPermissionStatus === 'granted' ? 'badge-green' : cameraPermissionStatus === 'denied' ? 'badge-warning' : 'badge-pink'}`}>
                {cameraPermissionStatus === 'granted' ? "✓ Granted" : cameraPermissionStatus === 'denied' ? "❌ Denied" : "⚠️ Prompt"}
              </span>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Enables live plant leaf scanning with smartphone camera.
            </p>

            <button
              className="btn btn-primary btn-sm"
              disabled={isTestingCamera}
              onClick={requestCameraAccess}
              style={{ width: '100%' }}
            >
              {isTestingCamera ? <RefreshCw className="animate-spin" size={16} /> : <Camera size={16} />}
              {isTestingCamera ? "Testing..." : "Request / Test Camera Permission"}
            </button>
          </div>

        </div>

        {/* Bottom Row: History & Logout Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--gray-200)' }}>
          
          <div style={{ background: 'var(--primary-green-subtle)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--primary-green-dark)' }}>Plant Disease Scans History</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>View previous leaf diagnosis records</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => setActiveTab('plant-doctor')}>
              <History size={16} /> View History
            </button>
          </div>

          <div style={{ background: 'var(--pink-accent-bg)', border: '1px solid var(--pink-accent-border)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 800, color: 'var(--pink-accent-dark)' }}>Account Session</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Logout from current farmer session</div>
            </div>
            <button className="btn btn-pink btn-sm" onClick={onLogout}>
              <LogOut size={16} /> Logout
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
