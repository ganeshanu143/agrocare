import React, { useState, useEffect } from 'react';
import { Settings, X, Globe, Sun, Moon, History, Camera, LogOut, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { translations } from '../data/translations';

export default function SettingsModal({
  lang,
  setLang,
  theme,
  setTheme,
  onLogout,
  onClose,
  setActiveTab
}) {
  const t = translations[lang] || translations.en;

  const [activeTabSetting, setActiveTabSetting] = useState('general'); // 'general' | 'permissions' | 'history'
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('unknown'); // 'granted' | 'denied' | 'prompt' | 'unknown'
  const [isTestingCamera, setIsTestingCamera] = useState(false);

  // Check initial camera permission if supported
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

  // Request/Test Camera Access
  const requestCameraAccess = async () => {
    setIsTestingCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermissionStatus('granted');
      // Stop stream after permission granted test
      stream.getTracks().forEach(track => track.stop());
      alert("Camera Permission Granted Successfully! You can now scan plant leaves with live webcam.");
    } catch (err) {
      console.warn("Camera permission error:", err);
      setCameraPermissionStatus('denied');
      alert("Camera Permission was Denied or is Unavailable. You can still upload leaf images or select sample leaves.");
    } finally {
      setIsTestingCamera(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--gray-200)', pb: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'var(--pink-accent-soft)', color: 'var(--pink-accent-dark)', padding: '8px', borderRadius: '10px' }}>
              <Settings size={22} />
            </div>
            <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>AgroCare Settings</h2>
          </div>
          <button className="btn btn-sm btn-secondary" onClick={onClose}><X size={20} /></button>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--gray-200)', pb: '10px' }}>
          <button
            className={`btn btn-sm ${activeTabSetting === 'general' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTabSetting('general')}
          >
            General Settings
          </button>
          <button
            className={`btn btn-sm ${activeTabSetting === 'permissions' ? 'btn-pink' : 'btn-secondary'}`}
            onClick={() => setActiveTabSetting('permissions')}
          >
            <Camera size={16} /> Permissions
          </button>
          <button
            className={`btn btn-sm ${activeTabSetting === 'history' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTabSetting('history')}
          >
            <History size={16} /> History
          </button>
        </div>

        {/* GENERAL SETTINGS TAB */}
        {activeTabSetting === 'general' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* 1. Change Language */}
            <div style={{ background: 'var(--gray-100)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Globe className="text-primary-green" size={22} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)' }}>Change Language</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Select preferred language for AgroCare UI</div>
                  </div>
                </div>

                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="form-select"
                  style={{ width: '150px', padding: '8px 12px', fontSize: '14px', fontWeight: 700 }}
                >
                  <option value="en">English</option>
                  <option value="te">తెలుగు (Telugu)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>
            </div>

            {/* 2. Theme Switcher */}
            <div style={{ background: 'var(--gray-100)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {theme === 'dark' ? <Moon className="text-pink-accent-dark" size={22} /> : <Sun className="text-primary-green" size={22} />}
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-dark)' }}>Website Theme</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Toggle between Natural Light and Dark Contrast mode</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    className={`btn btn-sm ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setTheme('light')}
                  >
                    <Sun size={14} /> Light
                  </button>
                  <button
                    className={`btn btn-sm ${theme === 'dark' ? 'btn-pink' : 'btn-secondary'}`}
                    onClick={() => setTheme('dark')}
                  >
                    <Moon size={14} /> Dark
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Logout Option */}
            <div style={{ background: 'var(--pink-accent-bg)', border: '1px solid var(--pink-accent-border)', padding: '16px', borderRadius: 'var(--radius-md)', marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--pink-accent-dark)' }}>Account Session</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Log out from current farmer session</div>
                </div>

                <button
                  className="btn btn-pink"
                  onClick={() => {
                    onClose();
                    onLogout();
                  }}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>

          </div>
        )}

        {/* PERMISSIONS TAB */}
        {activeTabSetting === 'permissions' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'var(--gray-100)', padding: '18px', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Camera className="text-primary-green" size={24} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-dark)' }}>Camera Permission</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Required for scanning plant leaves directly via smartphone / webcam</div>
                  </div>
                </div>

                <span className={`badge ${cameraPermissionStatus === 'granted' ? 'badge-green' : cameraPermissionStatus === 'denied' ? 'badge-warning' : 'badge-pink'}`}>
                  {cameraPermissionStatus === 'granted' ? "✓ Granted" : cameraPermissionStatus === 'denied' ? "❌ Denied" : "⚠️ Prompt"}
                </span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Allowing camera access enables live plant leaf capturing inside the Plant Doctor scanner.
              </p>

              <button
                className="btn btn-primary"
                disabled={isTestingCamera}
                onClick={requestCameraAccess}
                style={{ width: '100%' }}
              >
                {isTestingCamera ? <RefreshCw className="animate-spin" size={18} /> : <Camera size={18} />}
                {isTestingCamera ? "Testing Camera..." : "Request / Test Camera Access"}
              </button>
            </div>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeTabSetting === 'history' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: 'var(--primary-green-subtle)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--primary-green-dark)' }}>Plant Disease Scans History</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>View previous leaf disease diagnostic reports</div>
              </div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  onClose();
                  setActiveTab('plant-doctor');
                }}
              >
                Go to History
              </button>
            </div>

            <div style={{ background: 'var(--pink-accent-bg)', padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--pink-accent-dark)' }}>Saved Crop Recommendations</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>View saved crop suitability matches</div>
              </div>
              <button
                className="btn btn-pink btn-sm"
                onClick={() => {
                  onClose();
                  setActiveTab('crop-recommendation');
                }}
              >
                View Crops
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
