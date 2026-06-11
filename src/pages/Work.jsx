import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    slug: 'repot',
    title: 'REPOT. Plant community app.',
    tags: ['marketplace design', 'user testing', 'ai workflows'],
    thumbnail: '/photos/repot.png',
    video: '/videos/repot.mp4'
  },
  {
    slug: 'blueroom',
    title: 'BLUE ROOM INNOVATION. Internship.',
    tags: ['frontend dev', 'ux/ui design', 'startup experience'],
    thumbnail: '/photos/blueroominnovation.png',
    video: '/videos/blueroom.mp4'
  },
  {
    slug: 'hackupc',
    title: 'HACKUPC 2025. Split The Bill.',
    tags: ['ai integration', '36 hours delivery', 'ux optimization'],
    thumbnail: '/photos/hackup.png',
    video: '/videos/hackupc.mp4'
  },
  {
    slug: 'pluma',
    title: 'PLUMA. Daily writing lessons app.',
    tags: ['prototyping', 'ux research', 'interaction design'],
    thumbnail: '/photos/pluma.png',
    video: '/videos/pluma.mp4'
  }
];

export default function Work({ onProjectSelect }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.slug} 
          project={project} 
          onClick={() => onProjectSelect(project.slug)} 
        />
      ))}
    </div>
  );
}
