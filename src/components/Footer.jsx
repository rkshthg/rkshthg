import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-secondary)' }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} title="GitHub">
            <Github size={20} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }} title="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Rakshith G. Built with React & Vite.
        </p>

        <button
          onClick={scrollToTop}
          className="btn btn-secondary btn-sm"
          style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, justifyContent: 'center' }}
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
