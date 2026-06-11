import React from 'react';
import Greeting from '../components/Greeting';
import SpotifyWidget from '../components/SpotifyWidget';

export default function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
      {/* Row 1: Bio and Portrait */}
      <div className="about-row-1">
        <div className="about-col-text">
          <Greeting />

          <p>
            I've always been the new kid. I was born in Madrid to a Romanian family, moved to Logroño as a teen, and spent my uni years in Girona. In my current chapter, <span className="blue-text">I'm figuring out life in Dublin</span>. Moving a lot has taught me to read a room fast and value building something worth staying for.
          </p>
          <p>
            I grew up on the internet. Club Penguin, YouTube, Tumblr; that's where I developed my creative eye. <span className="blue-text">2000s nostalgia</span> drives a lot of my design choices.
          </p>
          <p>
            I studied in Videogame Design and Development. I spent four years thinking about <span className="blue-text">immersion, interaction, engagement</span>, and having fun. I care about the small details nobody notices until they're missing.
          </p>
          <p>
            If this sounds like someone worth grabbing a coffee with, my <a href="mailto:claudia.hodoroga@email.com" className="blue-text">email</a> / <a href="https://linkedin.com/in/claudia-hodoroga" target="_blank" rel="noopener noreferrer" className="blue-text">LinkedIn</a> are right there!
          </p>

          <SpotifyWidget />
        </div>

        <div className="about-col-img">
          <img src="/photos/aboutme.jpg" alt="Claudia Hodoroga" className="about-img" />
        </div>
      </div>

      {/* Row 2: Experience, Skills, Education */}
      <div className="about-row-2">
        {/* Experience Column */}
        <div className="about-info-col">
          <h2 className="info-section-title">experience.</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item-title">Organizer & Design Lead</span>
              <span className="info-item-subtitle">Google Developers Group Girona</span>
              <span className="info-item-date">September 2024 - Present</span>
            </div>

            <div className="info-item">
              <span className="info-item-title">Quality Assurance Auditor</span>
              <span className="info-item-subtitle">AQUA Andorra</span>
              <span className="info-item-date">March 2026 - Present</span>
            </div>

            <div className="info-item">
              <span className="info-item-title">Quality Assurance Evaluator</span>
              <span className="info-item-subtitle">AQU Catalunya</span>
              <span className="info-item-date">October 2025 - April 2026</span>
            </div>

            <div className="info-item">
              <span className="info-item-title">Frontend & UX/UI Intern</span>
              <span className="info-item-subtitle">Blue Room Innovation</span>
              <span className="info-item-date">July 2025 - August 2025</span>
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="about-info-col">
          <h2 className="info-section-title">skills.</h2>
          <div className="skills-list">
            <div className="skills-group">
              <span className="info-item-subtitle">UX/UI design</span>
              <span className="info-item-subtitle">Product design</span>
              <span className="info-item-subtitle">Interaction design</span>
              <span className="info-item-subtitle">User research</span>
              <span className="info-item-subtitle">Usability testing</span>
              <span className="info-item-subtitle">Prototyping</span>
              <span className="info-item-subtitle">Visual identity design</span>
              <span className="info-item-subtitle">Copywriting</span>
              <span className="info-item-subtitle">Frontend development</span>
            </div>

            <div className="skills-group" style={{ marginTop: '4px' }}>
              <span className="info-item-subtitle">Figma</span>
              <span className="info-item-subtitle">Android Studio</span>
              <span className="info-item-subtitle">Next.js</span>
              <span className="info-item-subtitle">React</span>
              <span className="info-item-subtitle">Claude Code</span>
              <span className="info-item-subtitle">Blender</span>
              <span className="info-item-subtitle">Git / GitHub</span>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="about-info-col">
          <h2 className="info-section-title">education.</h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item-title">Bachelor of Videogame Design and Development</span>
              <span className="info-item-subtitle">Universitat de Girona</span>
              <span className="info-item-date">2022 - 2026</span>
            </div>

            <div className="info-item">
              <span className="info-item-title">Foundations of UX Design - Google</span>
              <span className="info-item-subtitle">Coursera</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
