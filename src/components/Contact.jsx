import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-desc">
            Open for Data Engineering roles, Database Infrastructure projects, and GenAI consultations.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          
          <a href={`mailto:${personalInfo.email}`} className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Mail size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{personalInfo.email}</p>
          </a>

          <a href={`tel:${personalInfo.phone}`} className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Phone size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Phone</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{personalInfo.phone}</p>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-glow)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Linkedin size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>LinkedIn</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Connect on LinkedIn <ArrowUpRight size={14} />
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
