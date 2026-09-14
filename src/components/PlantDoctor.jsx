import React, { useState, useRef } from 'react';
import { Camera, Upload, CheckCircle2, AlertTriangle, RefreshCw, Stethoscope, Eye, Sun, Image as ImageIcon, Maximize2, ShieldAlert, Sparkles, History, HelpCircle } from 'lucide-react';
import { translations } from '../data/translations';
import { sampleDiseases, sampleHistory } from '../data/mockData';

export default function PlantDoctor({ lang }) {
  const t = translations[lang]?.plantDoctor || translations.en.plantDoctor;

  const [selectedImage, setSelectedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [historyList, setHistoryList] = useState(sampleHistory);
  const [activeTabSub, setActiveTabSub] = useState('scanner'); // 'scanner' | 'history'
  
  // Camera state
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);

  // Instructions cards data with icons
  const conditionRules = [
    { icon: <Eye size={20} className="text-primary-green" />, text: t.inst1 },
    { icon: <CheckCircle2 size={20} className="text-primary-green" />, text: t.inst2 },
    { icon: <Sun size={20} className="text-primary-green" />, text: t.inst3 },
    { icon: <AlertTriangle size={20} className="text-primary-green" />, text: t.inst4 },
    { icon: <Maximize2 size={20} className="text-primary-green" />, text: t.inst5 },
    { icon: <Camera size={20} className="text-primary-green" />, text: t.inst6 },
    { icon: <ShieldAlert size={20} className="text-primary-green" />, text: t.inst7 },
    { icon: <ImageIcon size={20} className="text-primary-green" />, text: t.inst8 }
  ];

  // Start Camera
  const startCamera = async () => {
    setIsCameraActive(true);
    setSelectedImage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.warn("Camera permission denied or camera not present. Using mock webcam frame.");
    }
  };

  // Capture Camera Snapshot
  const captureSnapshot = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      setSelectedImage(canvas.toDataURL('image/jpeg'));
      // Stop track
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    } else {
      // Mock snapshot
      setSelectedImage('/leaf_blight.jpg');
    }
    setIsCameraActive(false);
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger Scanning Simulation
  const runPlantScan = (diseaseIndex = 0) => {
    if (!selectedImage) {
      setSelectedImage('/leaf_blight.jpg');
    }
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      const res = sampleDiseases[diseaseIndex] || sampleDiseases[0];
      setScanResult(res);

      // Add to history
      const newHistoryItem = {
        id: 'scan_' + Date.now(),
        plantName: res.name.split(' (')[0],
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        disease: res.name.split(' (')[0],
        status: 'Diagnosed',
        confidence: res.confidence
      };
      setHistoryList([newHistoryItem, ...historyList]);
    }, 2200);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      {/* Header Bar */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px auto' }}>
        <div className="badge badge-pink" style={{ marginBottom: '12px' }}>
          <Stethoscope size={16} /> AI Leaf Diagnostics & Health Care
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
          {t.scanTitle}
        </h1>
        <p style={{ fontSize: '16px' }}>{t.scanSubtitle}</p>
      </div>

      {/* Sub Navigation Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px' }}>
        <button
          className={`btn ${activeTabSub === 'scanner' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTabSub('scanner')}
        >
          <Camera size={18} /> {t.scanTitle}
        </button>
        <button
          className={`btn ${activeTabSub === 'history' ? 'btn-pink' : 'btn-secondary'}`}
          onClick={() => setActiveTabSub('history')}
        >
          <History size={18} /> {t.historyTitle} ({historyList.length})
        </button>
      </div>

      {activeTabSub === 'history' ? (
        /* Disease History Section */
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="card" style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '6px' }}>
              {t.historyTitle}
            </h2>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>{t.historySubtitle}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {historyList.map((item) => (
                <div key={item.id} className="card" style={{ borderLeft: '4px solid var(--primary-green)', padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-green-dark)' }}>{item.plantName}</span>
                    <span className="badge badge-green">{item.confidence}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Date: {item.date}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pink-accent-dark)', marginBottom: '10px' }}>
                    Detected: {item.disease}
                  </div>
                  <div className="badge badge-pink" style={{ fontSize: '12px' }}>{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Scanner Section */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left Column: Image Picker & Camera Box */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--primary-green-dark)' }}>1. Select or Capture Photo</h2>

            {/* Upload Area or Camera View */}
            <div style={{
              height: '300px',
              borderRadius: 'var(--radius-lg)',
              border: '2px dashed var(--primary-green)',
              background: 'var(--primary-green-subtle)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {isCameraActive ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button
                    className="btn btn-primary"
                    onClick={captureSnapshot}
                    style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <Camera size={20} /> Capture Snapshot
                  </button>
                </div>
              ) : selectedImage ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <img src={selectedImage} alt="Plant Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {isScanning && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(6, 78, 59, 0.75)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--white)',
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <Sparkles size={48} className="pulse-scan" style={{ color: 'var(--pink-accent-badge)', marginBottom: '16px' }} />
                      <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '8px' }}>Scanning Plant Leaf...</div>
                      <div style={{ fontSize: '13px', opacity: 0.9 }}>{t.scanningProgress}</div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <ImageIcon size={48} className="text-primary-green" style={{ marginBottom: '12px', opacity: 0.6 }} />
                  <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>No Leaf Selected</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Choose an image or take a live photo</div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button className="btn btn-secondary" onClick={startCamera}>
                <Camera size={18} /> {t.takePhoto}
              </button>

              <label className="btn btn-secondary" style={{ cursor: 'pointer', margin: 0 }}>
                <Upload size={18} /> {t.uploadImage}
                <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
              </label>
            </div>

            {/* Quick Demo Samples */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                {t.selectSample}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => { setSelectedImage('/leaf_blight.jpg'); runPlantScan(0); }}
                  className="btn btn-sm btn-pink"
                  style={{ flex: 1, fontSize: '12px' }}
                >
                  Leaf Blight
                </button>
                <button
                  onClick={() => { setSelectedImage('/fresh_produce.jpg'); runPlantScan(1); }}
                  className="btn btn-sm btn-pink"
                  style={{ flex: 1, fontSize: '12px' }}
                >
                  Powdery Mildew
                </button>
                <button
                  onClick={() => { setSelectedImage('/hero_banner.jpg'); runPlantScan(2); }}
                  className="btn btn-sm btn-secondary"
                  style={{ flex: 1, fontSize: '12px' }}
                >
                  Healthy Leaf
                </button>
              </div>
            </div>

            {/* Start Scan Primary CTA */}
            <button
              className="btn btn-primary btn-lg"
              disabled={isScanning}
              onClick={() => runPlantScan(0)}
              style={{ marginTop: '10px', width: '100%' }}
            >
              {isScanning ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
              {isScanning ? "Scanning..." : t.startScan}
            </button>
          </div>

          {/* Right Column: Instructions or Diagnosis Result */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {scanResult ? (
              /* RESULT CARD */
              <div className="card animate-fade-in" style={{ borderTop: '6px solid var(--primary-green)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <span className="badge badge-pink" style={{ marginBottom: '6px' }}>{t.diseaseDetected}</span>
                    <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>{scanResult.name}</h2>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.confidence}</div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-green)' }}>{scanResult.confidence}</div>
                  </div>
                </div>

                {/* Symptoms */}
                <div style={{ marginBottom: '18px' }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertTriangle size={18} className="text-pink-accent-dark" /> {t.symptoms}
                  </h4>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    {scanResult.symptoms.map((s, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Treatment */}
                <div style={{ marginBottom: '18px' }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={18} className="text-primary-green" /> {t.treatment}
                  </h4>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '14px' }}>
                    {scanResult.treatment.map((tr, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{tr}</li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Medicine */}
                <div style={{ background: 'var(--primary-green-subtle)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '18px', border: '1px solid var(--primary-green-light)' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-green-dark)', fontSize: '15px', marginBottom: '4px' }}>
                    {t.medicine}: {scanResult.medicine.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-dark)' }}>
                    <strong>Dosage:</strong> {scanResult.medicine.dosage}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    <strong>Schedule:</strong> {scanResult.medicine.schedule}
                  </div>
                </div>

                {/* IMPORTANT LIGHT PINK REGULATORY DISCLAIMER BANNER */}
                <div className="disclaimer-banner">
                  <ShieldAlert className="disclaimer-icon" size={24} />
                  <div>
                    <div className="disclaimer-title">{t.disclaimerTitle}</div>
                    <div className="disclaimer-text">{t.disclaimerText}</div>
                  </div>
                </div>

                {/* Prevention & Next Steps */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ background: 'var(--gray-100)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '6px' }}>{t.prevention}</div>
                    <ul style={{ fontSize: '12px', paddingLeft: '16px', color: 'var(--text-muted)' }}>
                      {scanResult.prevention.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>

                  <div style={{ background: 'var(--gray-100)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)', marginBottom: '6px' }}>{t.nextSteps}</div>
                    <ul style={{ fontSize: '12px', paddingLeft: '16px', color: 'var(--text-muted)' }}>
                      {scanResult.nextSteps.map((ns, i) => <li key={i}>{ns}</li>)}
                    </ul>
                  </div>
                </div>

                <button
                  className="btn btn-pink"
                  onClick={() => setScanResult(null)}
                  style={{ width: '100%', fontWeight: 700 }}
                >
                  <RefreshCw size={18} /> {t.scanAnother}
                </button>

              </div>
            ) : (
              /* INSTRUCTIONS CARDS GRID */
              <div className="card">
                <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={20} className="text-primary-green" /> {t.instructionsTitle}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {conditionRules.map((rule, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px',
                      background: 'var(--primary-green-subtle)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--primary-green-light)'
                    }}>
                      <div style={{ background: 'var(--white)', padding: '8px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        {rule.icon}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: '24px',
                  background: 'var(--pink-accent-bg)',
                  border: '1px solid var(--pink-accent-border)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pink-accent-dark)', marginBottom: '4px' }}>
                    Tip for Best Diagnosis Results
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Make sure the photo captures both the healthy stem and infected spot boundaries clearly.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
