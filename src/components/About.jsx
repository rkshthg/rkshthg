import React from 'react';
import { aboutPillars } from '../data/portfolioData';
import { Database, Workflow, Bot } from 'lucide-react';

const iconMap = {
  Database: Database,
  Workflow: Workflow,
  Bot: Bot
};

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">Architecting Enterprise Data & AI Systems</h2>
          <p className="section-desc">
            Bridging mission-critical database reliability with modern Medallion Lakehouse architectures and agentic GenAI intelligence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {aboutPillars.map((pillar, idx) => {
            const IconComp = iconMap[pillar.icon] || Database;
            return (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-glow)',
                  color: 'var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <IconComp size={24} />
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
