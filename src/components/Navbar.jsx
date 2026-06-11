import React from 'react';
import FishTank from './FishTank';

export default function Navbar({ lang, setLang, currentPage, setCurrentPage }) {
  return (
    <div className="sidebar">
      <div className="nav-container">
        <FishTank />
        <div className="nav-name">Claudia Hodoroga</div>
        
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
        
        <div className="nav-footer">
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/claudiahodoroga/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="lang-divider">/</span>
            <a href="mailto:claudiahodoroga@outlook.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
            <span className="lang-divider">/</span>
            <button 
              onClick={() => setLang('en')} 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            >
              english
            </button>
            <span className="lang-divider">/</span>
            <button 
              onClick={() => setLang('es')} 
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
            >
              español
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
