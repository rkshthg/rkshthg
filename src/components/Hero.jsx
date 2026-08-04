import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '130px', paddingBottom: '80px' }}>
      <div className="container">
        
        <div className="hero-grid">
          
          {/* Left Column: Text & Content (Left Aligned) */}
          <div className="hero-text">
            
            {/* Availability Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }} className="badge">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name Title: Rakshith G */}
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '12px', lineHeight: 1.1 }}>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Subtitle: Data Engineer */}
            <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '16px' }}>
              Data Engineer
            </h2>

            {/* IIIT-B Specialization Badge */}
            <div style={{ marginBottom: '24px' }}>
              <span className="badge badge-purple" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
                <Sparkles size={14} />
                {personalInfo.specializationBadge}
              </span>
            </div>

            {/* Bio Summary */}
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>
            </div>

            {/* Location Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>

          </div>

          {/* Right Column: 50% Enlarged Profile Picture */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar">
              <img
                src="/profile.png"
                alt="Rakshith G Profile Photo"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
