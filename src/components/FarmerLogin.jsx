import React, { useState } from 'react';
import { Leaf, User, Phone, KeyRound, CheckCircle2, ShieldCheck, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function FarmerLogin({ lang, onLoginSuccess, isInitialScreen = false, onClose }) {
  const t = translations[lang]?.loginScreen || translations.en.loginScreen;

  const [step, setStep] = useState(1); // 1: Name & Phone -> 2: OTP Verification
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Step 1: Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your full Name.");
      return;
    }
    if (!phone || phone.trim().length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile phone number.");
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Generate a mock 4-digit OTP
      const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(randomOtp);
      setStep(2);
    }, 800);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otpInput || otpInput.trim().length < 4) {
      setErrorMessage("Please enter the 4-digit OTP code sent to your phone.");
      return;
    }

    if (otpInput.trim() !== generatedOtp && otpInput.trim() !== '1234') {
      setErrorMessage(`Invalid OTP code. Please enter the generated code (${generatedOtp}) or test code '1234'.`);
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const farmerData = {
        name: name.trim(),
        phone: phone.trim(),
        loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      onLoginSuccess(farmerData);
    }, 600);
  };

  const resetPhoneStep = () => {
    setStep(1);
    setOtpInput('');
    setErrorMessage('');
  };

  const cardContent = (
    <div className="card animate-fade-in" style={{
      maxWidth: '480px',
      margin: '0 auto',
      padding: '36px 32px',
      boxShadow: 'var(--shadow-lg)',
      borderTop: '6px solid var(--primary-green)'
    }}>
      {/* Brand Header */}
      <div style={{ textAlignment: 'center', textAlign: 'center', marginBottom: '24px' }}>
        <div className="logo-icon" style={{ margin: '0 auto 12px auto', width: '52px', height: '52px' }}>
          <Leaf size={30} />
        </div>
        <h2 style={{ fontSize: '26px', color: 'var(--primary-green-dark)', marginBottom: '6px' }}>
          {t.title}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{t.subtitle}</p>
      </div>

      {/* Mandatory OTP Notice Badge */}
      <div className="badge badge-pink" style={{ width: '100%', padding: '8px 12px', justifyContent: 'center', marginBottom: '20px' }}>
        <ShieldCheck size={16} /> {t.mandatoryNotice}
      </div>

      {errorMessage && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fca5a5',
          color: '#991b1b',
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          fontSize: '13px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <AlertCircle size={18} /> {errorMessage}
        </div>
      )}

      {step === 1 ? (
        /* STEP 1: NAME & PHONE FORM */
        <form onSubmit={handleSendOtp}>
          <div className="form-group">
            <label className="form-label">{t.nameLabel} <span style={{ color: 'var(--pink-accent-deep)' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-green)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '46px' }}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Ramesh Farmer"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{t.phoneLabel} <span style={{ color: 'var(--pink-accent-deep)' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-green)' }} />
              <input
                type="tel"
                className="form-input"
                style={{ paddingLeft: '46px' }}
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={isLoading}
            style={{ width: '100%', marginTop: '10px' }}
          >
            {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <ArrowRight size={20} />}
            {isLoading ? "Sending OTP..." : t.sendOtp}
          </button>
        </form>
      ) : (
        /* STEP 2: MANDATORY OTP VERIFICATION FORM */
        <form onSubmit={handleVerifyOtp} className="animate-fade-in">
          <div style={{
            background: 'var(--pink-accent-bg)',
            border: '1px dashed var(--pink-accent-badge)',
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '13px', color: 'var(--pink-accent-dark)' }}>
              {t.otpSentMsg} <strong>+91 {phone}</strong>
            </div>
            {/* Display generated test OTP code for clear testing! */}
            <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: 800, color: 'var(--primary-green-dark)', letterSpacing: '3px' }}>
              Test OTP Code: <span style={{ background: 'var(--white)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--gray-300)' }}>{generatedOtp}</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{t.enterOtp} <span style={{ color: 'var(--pink-accent-deep)' }}>*</span></label>
            <div style={{ position: 'relative' }}>
              <KeyRound size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--pink-accent-dark)' }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '46px', letterSpacing: '4px', fontSize: '20px', fontWeight: 800 }}
                value={otpInput}
                onChange={e => setOtpInput(e.target.value)}
                placeholder="4-digit OTP"
                maxLength={4}
                autoFocus
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={isLoading}
            style={{ width: '100%', marginTop: '10px' }}
          >
            {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <CheckCircle2 size={20} />}
            {isLoading ? "Verifying..." : t.verifyLogin}
          </button>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '13px' }}>
            <button
              type="button"
              className="btn-link"
              onClick={resetPhoneStep}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }}
            >
              ← {t.changePhone}
            </button>

            <button
              type="button"
              className="btn-link"
              onClick={() => {
                const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
                setGeneratedOtp(newOtp);
                setErrorMessage("New OTP sent!");
              }}
              style={{ background: 'none', border: 'none', color: 'var(--pink-accent-dark)', fontWeight: 700, cursor: 'pointer', padding: 0 }}
            >
              {t.resendOtp}
            </button>
          </div>
        </form>
      )}

      {!isInitialScreen && onClose && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
            style={{ width: '100%' }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );

  if (isInitialScreen) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        {cardContent}
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%' }}>
        {cardContent}
      </div>
    </div>
  );
}
