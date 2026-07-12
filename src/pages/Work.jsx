import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Work({ lang, onProjectSelect }) {
  const projects = [
    {
      slug: 'repot',
      title: lang === 'en' ? 'REPOT. Plant community app.' : 'REPOT. App de comunidad de plantas.',
      tags: lang === 'en' 
        ? ['marketplace design', 'user testing', 'ai workflows'] 
        : ['diseño de marketplace', 'pruebas de usuario', 'flujos de IA'],
      thumbnail: '/photos/repot.png',
      video: '/videos/repot.mp4'
    },
    {
      slug: 'blueroom',
      title: lang === 'en' ? 'BLUE ROOM INNOVATION. Internship.' : 'BLUE ROOM INNOVATION. Prácticas.',
      tags: lang === 'en' 
        ? ['frontend dev', 'ux/ui design', 'startup experience'] 
        : ['desarrollo frontend', 'diseño ux/ui', 'experiencia startup'],
      thumbnail: '/photos/blueroominnovation.png',
      video: '/bri/circularpass.mp4'
    },
    {
      slug: 'hackupc',
      title: lang === 'en' ? 'HACKUPC 2025. Split The Bill.' : 'HACKUPC 2025. Divide la cuenta.',
      tags: lang === 'en' 
        ? ['ai integration', '36 hours delivery', 'ux optimization'] 
        : ['integración de IA', 'entrega en 36h', 'optimización de ux'],
      thumbnail: '/photos/hackup.png',
      video: '/videos/hackupc.mp4'
    }
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.slug} 
          project={project} 
          lang={lang}
          onClick={() => onProjectSelect(project.slug)} 
        />
      ))}
    </div>
  );
}
