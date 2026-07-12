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
            className={`nav-item ${currentPage === 'work' || currentPage === 'detail' ? 'active' : ''}`}
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
            href="https://drive.google.com/file/d/1eYqM3LEvb3RsO_RViVhevhEL6BTRSlMw/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item"
          >
            CV.
          </a>
        </nav>
        
        <div className="nav-footer">
          <div className="nav-socials">
            <a href="https://www.linkedin.com/in/claudiahodoroga/" target="_blank" rel="noopener noreferrer" className="lang-btn">
              linkedin
            </a>
            <a href="mailto:claudiahodoroga@outlook.com" className="lang-btn">
              email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
