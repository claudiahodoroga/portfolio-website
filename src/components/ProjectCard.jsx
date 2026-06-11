import React, { useRef } from 'react';

export default function ProjectCard({ project, lang, onClick }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Autoplay blocked or video missing:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="project-card" 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-tags">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-title">{project.title}</div>
      <div className="thumbnail-container">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="thumbnail-img" 
        />
        {project.video && (
          <video 
            ref={videoRef}
            src={project.video}
            className="thumbnail-video"
            muted
            loop
            playsInline
          />
        )}
        <div className="hover-overlay">
          {lang === 'en' ? 'view full demo and case study' : 'ver demo y caso de estudio'}
        </div>
      </div>
    </div>
  );
}
