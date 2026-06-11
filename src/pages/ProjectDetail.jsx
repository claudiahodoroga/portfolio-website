import React from 'react';

export default function ProjectDetail({ lang, projectSlug, onBack }) {
  const displayNames = {
    repot: lang === 'en' ? 'REPOT. Plant community app.' : 'REPOT. App de comunidad de plantas.',
    blueroom: lang === 'en' ? 'BLUE ROOM INNOVATION. Internship.' : 'BLUE ROOM INNOVATION. Prácticas.',
    hackupc: lang === 'en' ? 'HACKUPC 2025. Split The Bill.' : 'HACKUPC 2025. Divide la cuenta.',
    pluma: lang === 'en' ? 'PLUMA. Daily writing lessons app.' : 'PLUMA. App de lecciones de escritura.'
  };

  const name = displayNames[projectSlug] || 'Project Details';

  return (
    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button 
        onClick={onBack}
        className="nav-item active"
        style={{ width: 'fit-content' }}
      >
        {lang === 'en' ? '← Back to work.' : '← Volver a proyectos.'}
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
          {lang === 'en' 
            ? 'details page under construction. check back soon!' 
            : 'página de detalles en construcción. ¡vuelve pronto!'}
        </div>
      </div>
    </div>
  );
}
