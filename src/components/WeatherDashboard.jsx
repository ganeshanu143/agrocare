import React from 'react';
import { Sun, CloudRain, Wind, Droplets, ShieldAlert, Calendar, MapPin } from 'lucide-react';
import { sampleWeatherData } from '../data/mockData';

export default function WeatherDashboard() {
  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 80px 20px' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
        <div className="badge badge-pink" style={{ marginBottom: '12px' }}>
          <Sun size={16} /> Live Agricultural Weather Station
        </div>
        <h1 style={{ fontSize: '32px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>
          Farm Weather Dashboard
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{sampleWeatherData.source}</p>
      </div>

      {/* Main Weather Overview Card */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 100%)', marginBottom: '36px', border: '1px solid var(--primary-green-light)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', alignItems: 'center' }}>
          
          <div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Current Temperature</div>
            <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--primary-green-dark)', lineHeight: 1 }}>{sampleWeatherData.currentTemp}</div>
            <div style={{ fontSize: '14px', color: 'var(--pink-accent-dark)', fontWeight: 700, marginTop: '8px' }}>{sampleWeatherData.tempRange}</div>
            <div style={{ fontSize: '16px', color: 'var(--text-dark)', marginTop: '4px' }}>{sampleWeatherData.condition}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>
                <CloudRain size={18} className="text-primary-green" /> Rain Probability
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-green-dark)' }}>{sampleWeatherData.rainfallProb}</div>
            </div>

            <div style={{ background: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>
                <Droplets size={18} className="text-pink-accent-dark" /> Relative Humidity
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--pink-accent-dark)' }}>{sampleWeatherData.humidity}</div>
            </div>

            <div style={{ background: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>
                <Wind size={18} className="text-primary-green" /> Wind Speed & Direction
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)' }}>{sampleWeatherData.windSpeed}</div>
            </div>
          </div>

        </div>
      </div>

      {/* FARMING ACTION ADVISORIES */}
      <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)', marginBottom: '20px' }}>
        Farming Weather Advisories
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {sampleWeatherData.advisories.map((adv, idx) => (
          <div key={idx} className="card card-pink-accent" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <ShieldAlert size={24} className="text-pink-accent-dark" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 800, color: 'var(--pink-accent-dark)', fontSize: '15px', marginBottom: '4px' }}>
                Farming Suggestion #{idx + 1}
              </div>
              <div style={{ fontSize: '14px', color: '#701a75' }}>{adv.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 5-DAY FORECAST */}
      <h2 style={{ fontSize: '24px', color: 'var(--primary-green-dark)', marginBottom: '20px' }}>
        5-Day Weather Forecast
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        {sampleWeatherData.forecast.map((fc, idx) => (
          <div key={idx} className="card" style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-green-dark)', marginBottom: '8px' }}>{fc.day}</div>
            <div style={{ marginBottom: '8px' }}>
              {fc.cond.includes('Rain') ? <CloudRain size={36} className="text-pink-accent-dark" /> : <Sun size={36} className="text-primary-green" />}
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)' }}>{fc.temp}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{fc.cond}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
