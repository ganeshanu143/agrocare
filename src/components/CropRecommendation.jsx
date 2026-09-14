import React, { useState } from 'react';
import { Compass, MapPin, Layers, Sun, Droplets, FlaskConical, User, CheckCircle2, ChevronRight, ChevronLeft, ShieldAlert, BookOpen, BarChart3, Bookmark, MessageSquare, Info } from 'lucide-react';
import { translations } from '../data/translations';
import { masterCrops } from '../data/mockData';

export default function CropRecommendation({ lang }) {
  const t = translations[lang]?.cropRec || translations.en.cropRec;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 Location
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: 'Tenali',
    gpsDetected: false,

    // Step 2 Land Size
    landArea: '5',
    landUnit: 'Acres',

    // Step 3 Soil Condition
    soilType: 'Loamy',
    soilTestProvided: false,
    pH: '6.8',
    nitrogenVal: '280',
    phosphorusVal: '45',
    potassiumVal: '180',
    moistureVal: '30%',
    organicMatterVal: '1.2%',

    // Step 4 Weather
    currentTemp: '30°C',
    season: 'Kharif (Monsoon)',
    rainfall: '850 mm',
    humidity: '72%',
    weatherFetched: true,
    weatherTimestamp: 'Source: Live IMD Station (Today 12:30 PM)',

    // Step 5 Water Condition
    waterSource: 'Borewell',
    waterQuantity: 'Sufficient',
    irrigationFreq: '3 times a week',

    // Step 6 Nutrients Level
    nitrogenLevel: 'Medium',
    phosphorusLevel: 'High',
    potassiumLevel: 'Medium',
    zincLevel: 'Low',
    sulfurLevel: 'Medium',

    // Step 7 Preferences
    cropTypePref: 'Vegetables',
    budget: 'Medium',
    previousCrop: 'Paddy',
    farmerExp: 'Experienced (5+ Years)'
  });

  const [showResults, setShowResults] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedGuideModal, setSelectedGuideModal] = useState(null);

  const updateForm = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleGpsDetect = () => {
    updateForm('state', 'Andhra Pradesh');
    updateForm('district', 'Guntur');
    updateForm('village', 'Auto-Detected GPS (Lat: 16.24, Lon: 80.64)');
    updateForm('gpsDetected', true);
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      setShowResults(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      {/* Header Bar */}
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px auto' }}>
        <div className="badge badge-pink" style={{ marginBottom: '12px' }}>
          <Compass size={16} /> Smart Farming Advisor
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
          {t.title}
        </h1>
        <p style={{ fontSize: '16px' }}>{t.subtitle}</p>
      </div>

      {!showResults ? (
        /* STEP-BY-STEP FORM WIZARD */
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          {/* Progress Bar & Step Indicators */}
          <div style={{ background: 'var(--white)', padding: '20px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: 'var(--primary-green-dark)' }}>
              <span>Step {step} of 7: {
                step === 1 ? t.step1 :
                step === 2 ? t.step2 :
                step === 3 ? t.step3 :
                step === 4 ? t.step4 :
                step === 5 ? t.step5 :
                step === 6 ? t.step6 : t.step7
              }</span>
              <span>{Math.round((step / 7) * 100)}% Complete</span>
            </div>
            <div style={{ height: '10px', background: 'var(--gray-200)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${(step / 7) * 100}%`,
                background: 'linear-gradient(90deg, var(--primary-green), #10b981)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Form Step Container */}
          <div className="card" style={{ padding: '36px' }}>
            
            {/* STEP 1 — LOCATION */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin className="text-primary-green" size={24} /> Where is your farm located?
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Selecting your location helps us retrieve regional climate and soil parameters.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <select className="form-select" value={formData.state} onChange={e => updateForm('state', e.target.value)}>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">District</label>
                    <input className="form-input" value={formData.district} onChange={e => updateForm('district', e.target.value)} placeholder="e.g. Guntur" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Village / Town</label>
                  <input className="form-input" value={formData.village} onChange={e => updateForm('village', e.target.value)} placeholder="e.g. Tenali" />
                </div>

                <button className="btn btn-pink" onClick={handleGpsDetect} style={{ marginTop: '10px' }}>
                  <MapPin size={18} /> Auto-Detect GPS Location
                </button>
                {formData.gpsDetected && <span style={{ marginLeft: '12px', fontSize: '13px', color: 'var(--primary-green)', fontWeight: 700 }}>✓ GPS Detected</span>}
              </div>
            )}

            {/* STEP 2 — LAND SIZE */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers className="text-primary-green" size={24} /> How much land do you have?
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Enter total cultivated area for land feasibility estimation.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Land Area</label>
                    <input type="number" className="form-input" value={formData.landArea} onChange={e => updateForm('landArea', e.target.value)} placeholder="5" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Unit Selection</label>
                    <select className="form-select" value={formData.landUnit} onChange={e => updateForm('landUnit', e.target.value)}>
                      <option value="Acres">Acres</option>
                      <option value="Hectares">Hectares</option>
                      <option value="Cents">Cents</option>
                      <option value="Bigha">Bigha</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — SOIL CONDITION */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FlaskConical className="text-primary-green" size={24} /> What is the condition of your soil?
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Choose your visual soil type or enter lab soil test results if available.</p>

                <div className="form-group">
                  <label className="form-label">Select Primary Soil Type</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                    {['Loamy', 'Black soil', 'Red soil', 'Sandy', 'Clay', 'Other'].map(st => (
                      <button
                        key={st}
                        type="button"
                        className={`btn ${formData.soilType === st ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => updateForm('soilType', st)}
                        style={{ padding: '14px 10px', fontSize: '14px' }}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Soil Test Toggle */}
                <div style={{ marginTop: '24px', padding: '16px', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 700 }}>
                    <input
                      type="checkbox"
                      checked={formData.soilTestProvided}
                      onChange={e => updateForm('soilTestProvided', e.target.checked)}
                      style={{ width: '18px', height: '18px' }}
                    />
                    I have soil test lab results (pH, N, P, K)
                  </label>

                  {formData.soilTestProvided && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
                      <div>
                        <label className="form-label">Soil pH</label>
                        <input className="form-input" value={formData.pH} onChange={e => updateForm('pH', e.target.value)} />
                        <span className="form-hint"><Info size={14} /> Tells if soil is acidic or alkaline.</span>
                      </div>
                      <div>
                        <label className="form-label">Nitrogen (kg/ha)</label>
                        <input className="form-input" value={formData.nitrogenVal} onChange={e => updateForm('nitrogenVal', e.target.value)} />
                        <span className="form-hint"><Info size={14} /> Measures leaf growth power.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 4 — WEATHER & TEMPERATURE */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sun className="text-primary-green" size={24} /> Weather & Temperature Conditions
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '20px' }}>Automated weather retrieval for {formData.district || 'your area'}.</p>

                <div style={{ background: 'var(--pink-accent-bg)', border: '1px solid var(--pink-accent-border)', padding: '18px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--pink-accent-dark)', marginBottom: '8px' }}>
                    {formData.weatherTimestamp}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Avg Temperature:</span>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{formData.currentTemp}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Annual Rainfall:</span>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{formData.rainfall}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Avg Humidity:</span>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{formData.humidity}</div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Growing Season</label>
                  <select className="form-select" value={formData.season} onChange={e => updateForm('season', e.target.value)}>
                    <option value="Kharif (Monsoon)">Kharif (Monsoon / June - Oct)</option>
                    <option value="Rabi (Winter)">Rabi (Winter / Nov - March)</option>
                    <option value="Zaid (Summer)">Zaid (Summer / April - May)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 5 — WATER CONDITION */}
            {step === 5 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Droplets className="text-primary-green" size={24} /> What type of water source is available?
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Crop recommendations will match your available irrigation depth.</p>

                <div className="form-group">
                  <label className="form-label">Water Source</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                    {['Borewell', 'Rainwater', 'Well', 'Canal', 'River', 'Drip irrigation'].map(ws => (
                      <button
                        key={ws}
                        type="button"
                        className={`btn ${formData.waterSource === ws ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => updateForm('waterSource', ws)}
                        style={{ padding: '12px', fontSize: '14px' }}
                      >
                        {ws}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Water Availability</label>
                    <select className="form-select" value={formData.waterQuantity} onChange={e => updateForm('waterQuantity', e.target.value)}>
                      <option value="Abundant / Plentiful">Abundant / Plentiful</option>
                      <option value="Sufficient">Sufficient</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Low / Scarce">Low / Scarce</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Irrigation Frequency</label>
                    <input className="form-input" value={formData.irrigationFreq} onChange={e => updateForm('irrigationFreq', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 6 — NUTRIENTS */}
            {step === 6 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FlaskConical className="text-primary-green" size={24} /> Soil Nutrient Availability
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Select estimated status if exact lab numbers are unknown.</p>

                {['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)', 'Zinc (Zn)', 'Sulfur (S)'].map((nutr, idx) => {
                  const keyName = idx === 0 ? 'nitrogenLevel' : idx === 1 ? 'phosphorusLevel' : idx === 2 ? 'potassiumLevel' : idx === 3 ? 'zincLevel' : 'sulfurLevel';
                  return (
                    <div key={nutr} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--gray-200)' }}>
                      <span style={{ fontWeight: 700, fontSize: '15px' }}>{nutr}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {['Low', 'Medium', 'High'].map(lvl => (
                          <button
                            key={lvl}
                            type="button"
                            className={`btn btn-sm ${formData[keyName] === lvl ? 'btn-pink' : 'btn-secondary'}`}
                            onClick={() => updateForm(keyName, lvl)}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* STEP 7 — FARMER PREFERENCES */}
            {step === 7 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '22px', color: 'var(--primary-green-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User className="text-primary-green" size={24} /> Farmer Preferences & Experience
                </h3>
                <p style={{ fontSize: '14px', marginBottom: '24px' }}>Tailor the crop selection to your market goals and budget.</p>

                <div className="form-group">
                  <label className="form-label">Preferred Crop Category</label>
                  <select className="form-select" value={formData.cropTypePref} onChange={e => updateForm('cropTypePref', e.target.value)}>
                    <option value="Vegetables">Vegetables (Quick cash flow)</option>
                    <option value="Cereals">Cereals (Paddy, Wheat, Maize)</option>
                    <option value="Pulses">Pulses (Dal, Gram, Beans)</option>
                    <option value="Oilseeds">Oilseeds (Groundnut, Sunflower)</option>
                    <option value="Cash crops">Cash Crops (Cotton, Sugarcane)</option>
                    <option value="Any suitable crop">Any Suitable Crop</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Previous Crop Harvested</label>
                    <input className="form-input" value={formData.previousCrop} onChange={e => updateForm('previousCrop', e.target.value)} placeholder="e.g. Paddy" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Farmer Experience</label>
                    <select className="form-select" value={formData.farmerExp} onChange={e => updateForm('farmerExp', e.target.value)}>
                      <option value="Beginner (< 2 years)">Beginner (&lt; 2 years)</option>
                      <option value="Experienced (5+ Years)">Experienced (5+ Years)</option>
                      <option value="Expert">Expert Farmer</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons inside Form */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid var(--gray-200)' }}>
              {step > 1 ? (
                <button className="btn btn-secondary" onClick={handleBack}>
                  <ChevronLeft size={18} /> {t.back}
                </button>
              ) : <div />}

              <button className="btn btn-primary btn-lg" onClick={handleNext}>
                {step === 7 ? t.submit : t.next} <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* RECOMMENDATION RESULTS PAGE */
        <div className="animate-fade-in" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge badge-pink" style={{ marginBottom: '6px' }}>AI Feasibility Engine</span>
              <h2 style={{ fontSize: '28px', color: 'var(--primary-green-dark)' }}>{t.resultTitle}</h2>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-pink" onClick={() => setShowComparison(!showComparison)}>
                <BarChart3 size={18} /> {showComparison ? "Hide Comparison" : t.compareCrops}
              </button>
              <button className="btn btn-secondary" onClick={() => setShowResults(false)}>
                Modify Answers
              </button>
            </div>
          </div>

          {/* IMPORTANT LIGHT PINK DISCLAIMER NOTICE */}
          <div className="disclaimer-banner" style={{ marginBottom: '30px' }}>
            <ShieldAlert className="disclaimer-icon" size={24} />
            <div>
              <div className="disclaimer-title">Agricultural Recommendation Disclaimer</div>
              <div className="disclaimer-text">{t.disclaimerText}</div>
            </div>
          </div>

          {/* CROP COMPARISON MATRIX TABLE */}
          {showComparison && (
            <div className="card animate-fade-in" style={{ marginBottom: '36px', overflowX: 'auto' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--primary-green-dark)', marginBottom: '16px' }}>
                {t.comparisonTitle}
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                <thead>
                  <tr style={{ background: 'var(--primary-green-subtle)', borderBottom: '2px solid var(--primary-green-light)' }}>
                    <th style={{ padding: '14px' }}>Crop Name</th>
                    <th style={{ padding: '14px' }}>Soil Match</th>
                    <th style={{ padding: '14px' }}>Water Req</th>
                    <th style={{ padding: '14px' }}>Growing Period</th>
                    <th style={{ padding: '14px' }}>Risk Level</th>
                    <th style={{ padding: '14px' }}>Market Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {masterCrops.map((c, i) => (
                    <tr key={c.id} style={{ borderBottom: '1px solid var(--gray-200)', background: i % 2 === 0 ? 'var(--white)' : 'var(--gray-100)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{c.name}</td>
                      <td style={{ padding: '14px' }}>{c.soilSuitability}</td>
                      <td style={{ padding: '14px' }}>{c.waterReq}</td>
                      <td style={{ padding: '14px' }}>{c.growingPeriod}</td>
                      <td style={{ padding: '14px' }}><span className="badge badge-warning">{c.difficulty}</span></td>
                      <td style={{ padding: '14px' }}><span className="badge badge-pink">{c.marketPotential}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* RECOMMENDED CROPS CARDS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {masterCrops.slice(0, 3).map((crop, idx) => (
              <div key={crop.id} className="card" style={{ borderTop: `6px solid ${idx === 0 ? 'var(--primary-green)' : 'var(--pink-accent-badge)'}` }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <span className="badge badge-green" style={{ marginBottom: '6px' }}>Rank #{idx + 1} Recommendation</span>
                    <h3 style={{ fontSize: '24px', color: 'var(--primary-green-dark)' }}>{crop.name}</h3>
                  </div>
                  <div className="badge badge-pink" style={{ fontSize: '14px', padding: '6px 12px' }}>
                    {crop.suitability}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Growing Period:</span>
                    <strong style={{ color: 'var(--text-dark)' }}>{crop.growingPeriod}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Water Requirement:</span>
                    <strong style={{ color: 'var(--primary-green-dark)' }}>{crop.waterReq}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Soil Suitability:</span>
                    <strong style={{ color: 'var(--text-dark)' }}>{crop.soilSuitability}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--gray-200)', paddingBottom: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Market Potential:</span>
                    <strong style={{ color: 'var(--pink-accent-dark)' }}>{crop.marketPotential}</strong>
                  </div>
                </div>

                {/* Farming Requirements & Main Risks */}
                <div style={{ background: 'var(--gray-100)', padding: '14px', borderRadius: 'var(--radius-md)', marginBottom: '20px', fontSize: '13px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>Key Farming Guidance:</div>
                  <p style={{ margin: 0, fontSize: '13px' }}>{crop.farmingReq}</p>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => setSelectedGuideModal(crop)}>
                    <BookOpen size={16} /> {t.viewGuide}
                  </button>
                  <button className="btn btn-pink btn-sm" onClick={() => alert("Recommendation saved to your Farmer Profile!")}>
                    <Bookmark size={16} /> {t.saveRec}
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* FARMING GUIDE MODAL */}
          {selectedGuideModal && (
            <div className="modal-overlay" onClick={() => setSelectedGuideModal(null)}>
              <div className="modal-card" onClick={e => e.stopPropagation()}>
                <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)', marginBottom: '12px' }}>
                  Farming Guide: {selectedGuideModal.name}
                </h2>
                <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                  Detailed step-by-step agronomic guide for cultivating {selectedGuideModal.name} on {formData.soilType} land.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
                  <div style={{ background: 'var(--primary-green-subtle)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <strong>1. Soil Preparation & Nursery:</strong> Plough land 2-3 times. Apply 10 tons of well-decomposed FYM compost per acre.
                  </div>
                  <div style={{ background: 'var(--pink-accent-bg)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <strong>2. Irrigation Schedule:</strong> Irrigate immediately after sowing, then at 7-10 day intervals based on soil moisture.
                  </div>
                  <div style={{ background: 'var(--gray-100)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                    <strong>3. Pest & Disease Protection:</strong> Inspect leaves weekly for early signs of blight or aphids.
                  </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'right' }}>
                  <button className="btn btn-primary" onClick={() => setSelectedGuideModal(null)}>
                    Close Guide
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
