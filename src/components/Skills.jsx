import React from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills and Technologies</h2>
          <p className="section-desc">
            A comprehensive list of skills across Big Data engineering, Cloud infrastructure, Enterprise database administration, and AI solutions.
          </p>
        </div>

        {/* 1x5 Side-by-Side Cards Grid Layout */}
        <div className="skills-grid-1x5">
          {skillCategories.map((catGroup, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '0.975rem', color: 'var(--text-primary)', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)', fontWeight: 700, lineHeight: 1.3, minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                {catGroup.category}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                {catGroup.skills.map((skillName, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.825rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    <span>{skillName}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
