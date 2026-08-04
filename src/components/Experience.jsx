import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Career History</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            Hands-on database administration, high-availability cluster tuning, SLA enforcement, and analytics automation at enterprise scale.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {workExperience.map((job, idx) => (
            <div key={idx} className="glass-card">
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{job.role}</h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-blue)', marginTop: '4px' }}>
                    {job.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }} className="mono">
                    <Calendar size={14} />
                    {job.period}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {job.location}
                  </div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {job.highlights.map((point, pIdx) => (
                  <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '4px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                {job.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
