import React from 'react';
import FishTank from './FishTank';

export default function Navbar({ currentPage, setCurrentPage }) {
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
            work.
          </button>

          <button
            onClick={() => setCurrentPage('about')}
            className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
          >
            about.
          </button>

          <button
            onClick={() => setCurrentPage('archive')}
            className={`nav-item ${currentPage === 'archive' ? 'active' : ''}`}
          >
            archive.
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
          <a href="https://www.linkedin.com/in/claudiahodoroga/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:claudiahodoroga@outlook.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
