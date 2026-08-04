import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationCerts() {
  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Academic & Professional Development</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Formal qualifications in Data Engineering & Information Science alongside industry certifications from Kaggle, upGrad, Microsoft, and JLPT.
          </p>
        </div>

        {/* 1. Education Section (Side-by-Side Cards Layout) */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap style={{ color: 'var(--accent-gold)' }} size={24} />
            <span>Education</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span className="badge badge-purple">{edu.status}</span>
                    <span className="mono" style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{edu.period}</span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '6px' }}>{edu.degree}</h4>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.975rem', marginBottom: '10px' }}>
                    {edu.specialization}
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                  {edu.institution} — {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications Section (Strict 2x2 4-Card Grid) */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award style={{ color: 'var(--accent-gold)' }} size={24} />
            <span>Certifications & Credentials</span>
          </h3>

          <div className="certs-grid-2x2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-gold)',
                    border: '1px solid rgba(229, 193, 88, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Award size={22} />
                  </div>

                  <span className="badge" style={{ fontSize: '0.75rem' }}>{cert.badge}</span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.08rem', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.4, fontWeight: 600 }}>
                    {cert.title}
                  </h4>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Issued by <strong style={{ color: 'var(--text-primary)' }}>{cert.issuer}</strong>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
