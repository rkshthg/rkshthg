import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Github, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Featured');

  const categories = ['Featured', 'Data Engineering', 'Generative and Agentic AI', 'Data Science & Analytics'];

  const filteredProjects = projects.filter(p => p.tabs.includes(activeFilter));

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore production-grade Databricks Medallion Lakehouse pipelines, Multi-Agent GenAI applications, and analytical data engineering projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Stacked Cards Deck */}
        <div className="stacked-deck-container">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="stacked-card"
              style={{
                top: `${96 + idx * 8}px`, /* Offset sticky stacking effect */
                zIndex: idx + 1
              }}
            >
              
              {/* Card Top Header */}
              <div className="stacked-card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  {project.featured && (
                    <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}

                  <span className="badge badge-purple">
                    <Layers size={12} />
                    {project.tabs.find(t => t !== 'Featured') || 'Project'}
                  </span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Title & Link */}
              <h3 className="stacked-card-title" style={{ marginBottom: '12px' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-blue)'}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  {project.title}
                </a>
              </h3>

              {/* Short Summary */}
              <p className="stacked-card-summary">
                {project.summary}
              </p>

              {/* Bullet Highlights */}
              <ul className="stacked-card-bullets">
                {project.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="stacked-card-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="tech-stack-container">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
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
