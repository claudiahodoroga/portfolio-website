import React from 'react';

export default function ProjectDetail({ projectSlug, onBack }) {
  const displayNames = {
    repot: 'REPOT. Plant community app.',
    blueroom: 'BLUE ROOM INNOVATION. Internship.',
    hackupc: 'HACKUPC 2025. Split The Bill.',
    pluma: 'PLUMA. Daily writing lessons app.'
  };

  const name = displayNames[projectSlug] || 'Project Details';

  return (
    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button 
        onClick={onBack}
        className="nav-item active"
        style={{ width: 'fit-content' }}
      >
        &larr; Back to work.
      </button>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
        <h1 style={{ fontSize: 'var(--font-size-large)', color: 'var(--primary-color)' }}>
          {name}
        </h1>
        <div style={{
          backgroundColor: 'var(--card-bg)',
          borderRadius: 'var(--corner-radius)',
          padding: '48px 24px',
          textAlign: 'center',
          border: '1.5px dashed var(--primary-color)',
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--primary-color)',
          textTransform: 'lowercase',
          letterSpacing: 'var(--letter-spacing)'
        }}>
          details page under construction. check back soon!
        </div>
      </div>
    </div>
  );
}
