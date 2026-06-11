import React from 'react';
import FishTank from './FishTank';

export default function Navbar({ lang, setLang, currentPage, setCurrentPage }) {
  return (
    <div className="sidebar">
      <div className="nav-container">
        <FishTank />
        <div className="nav-name">Claudia Hodoroga</div>
        
        {/* Language Switcher */}
        <div className="lang-toggle">
          <button 
            onClick={() => setLang('en')} 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          >
            EN
          </button>
          <span className="lang-divider">/</span>
          <button 
            onClick={() => setLang('es')} 
            className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
          >
            ES
          </button>
        </div>
        
        <nav className="nav-menu">
          <button 
            onClick={() => setCurrentPage('work')}
            className={`nav-item ${currentPage === 'work' ? 'active' : ''}`}
          >
            {lang === 'en' ? 'work.' : 'proyectos.'}
          </button>
          
          <button 
            onClick={() => setCurrentPage('about')}
            className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
          >
            {lang === 'en' ? 'about.' : 'sobre mí.'}
          </button>
          
          <button 
            onClick={() => setCurrentPage('archive')}
            className={`nav-item ${currentPage === 'archive' ? 'active' : ''}`}
          >
            {lang === 'en' ? 'archive.' : 'archivo.'}
          </button>
          
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item"
          >
            CV.
          </a>
        </nav>
        
        <div className="nav-socials">
          <a href="https://linkedin.com/in/claudia-hodoroga" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:claudia.hodoroga@email.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
