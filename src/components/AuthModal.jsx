import React, { useState } from 'react';
import { X, User, Lock, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [farmerName, setFarmerName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      alert("Welcome back! Logged in as Farmer " + (phone || "9876543210"));
    } else if (mode === 'signup') {
      alert(`Account created successfully for ${farmerName}! Welcome to AgroCare.`);
    } else {
      alert("Password reset OTP sent to " + phone);
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>
            {mode === 'login' ? "Farmer Login" : mode === 'signup' ? "Create Farmer Account" : "Reset Password"}
          </h2>
          <button className="btn btn-sm btn-secondary" onClick={onClose}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="form-input" style={{ paddingLeft: '44px' }} value={farmerName} onChange={e => setFarmerName(e.target.value)} placeholder="e.g. Ramesh V" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Village / Location</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="form-input" style={{ paddingLeft: '44px' }} value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Tenali, Guntur" required />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Mobile Phone Number</label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="tel" className="form-input" style={{ paddingLeft: '44px' }} value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit mobile number" required />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input type="password" className="form-input" style={{ paddingLeft: '44px' }} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" required />
              </div>
            </div>
          )}

          <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '10px' }} type="submit">
            {mode === 'login' ? "Login to AgroCare" : mode === 'signup' ? "Complete Sign Up" : "Send OTP Reset Link"}
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', borderTop: '1px solid var(--gray-200)', pt: '16px' }}>
          {mode === 'login' ? (
            <div>
              Don't have an account?{' '}
              <button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--primary-green-dark)', fontWeight: 800, cursor: 'pointer' }} onClick={() => setMode('signup')}>
                Sign Up Now
              </button>
              <br />
              <button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--pink-accent-dark)', fontSize: '13px', marginTop: '8px', cursor: 'pointer' }} onClick={() => setMode('forgot')}>
                Forgot Password?
              </button>
            </div>
          ) : (
            <div>
              Already registered?{' '}
              <button className="btn-link" style={{ background: 'none', border: 'none', color: 'var(--primary-green-dark)', fontWeight: 800, cursor: 'pointer' }} onClick={() => setMode('login')}>
                Login Here
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
