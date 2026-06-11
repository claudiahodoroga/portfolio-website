import React, { useRef } from 'react';

export default function ProjectCard({ project, onClick }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        // Silently catch play exceptions if the browser blocks play action before user interaction
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
          view full demo and case study
        </div>
      </div>
    </div>
  );
}
