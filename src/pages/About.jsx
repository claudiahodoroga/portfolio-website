import React from 'react';
import Greeting from '../components/Greeting';
import SpotifyWidget from '../components/SpotifyWidget';

export default function About({ lang }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
      {/* Row 1: Bio and Portrait */}
      <div className="about-row-1">
        <div className="about-col-text">
          <Greeting />

          {lang === 'en' ? (
            <>
              <p>
                I've always been the new kid. I was born in Madrid to a Romanian family, moved to Logroño as a teen, and spent my uni years in Girona. In my current chapter, <span className="blue-text">I'm figuring out life in Dublin</span>. Moving a lot has taught me to read a room fast and value building something worth staying for.
              </p>
              <p>
                You could say I was raised on the internet. Club Penguin, YouTube, Tumblr; that's where I developed my creative eye. <span className="blue-text">2000s nostalgia</span> drives a lot of my design choices.
              </p>
              <p>
                I studied in Videogame Design and Development. I spent four years thinking about <span className="blue-text">immersion, interaction, engagement</span>, and having fun. I care about the small details nobody notices until they're missing.
              </p>
              <p>
                If this sounds like someone worth grabbing a coffee with, my <a href="mailto:claudiahodoroga@outlook.com" className="blue-text">email</a> / <a href="https://www.linkedin.com/in/claudiahodoroga/" target="_blank" rel="noopener noreferrer" className="blue-text">LinkedIn</a> are right there!
              </p>
            </>
          ) : (
            <>
              <p>
                Siempre he sido la niña nueva. Nací en Madrid en una familia rumana, me mudé a Logroño de adolescente y pasé mis años de la uni en Girona. En mi capítulo actual, <span className="blue-text">estoy descubriendo la vida en Dublín</span>. Mudarme mucho me ha enseñado a adaptarme a diferentes ambientes y a valorar crear cosas por las que valga la pena quedarse.
              </p>
              <p>
                Se podría decir que me crié en internet. Club Penguin, YouTube, Tumblr; ahí es donde desarrollé mi ojo creativo. La <span className="blue-text">nostalgia de los años 2000</span> impulsa muchas de mis decisiones de diseño.
              </p>
              <p>
                Estudié Diseño y Desarrollo de Videojuegos. Pasé cuatro años pensando en la <span className="blue-text">inmersión, la interacción, cómo captar la atención,</span> y en pasarlo bien. Me importan los pequeños detalles en los que nadie se fija hasta que faltan.
              </p>
              <p>
                Si esto te suena a alguien con quien valdría la pena tomar un café, ¡mi <a href="mailto:claudiahodoroga@outlook.com" className="blue-text">email</a> / <a href="https://www.linkedin.com/in/claudiahodoroga/" target="_blank" rel="noopener noreferrer" className="blue-text">LinkedIn</a> están ahí!
              </p>
            </>
          )}

          <SpotifyWidget lang={lang} />
        </div>

        <div className="about-col-img">
          <img src="/photos/aboutme.jpg" alt="Claudia Hodoroga" className="about-img" />
        </div>
      </div>

      {/* Row 2: Experience, Skills, Education */}
      <div className="about-row-2">
        {/* Experience Column */}
        <div className="about-info-col">
          <h2 className="info-section-title">
            {lang === 'en' ? 'experience.' : 'experiencia.'}
          </h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Organizer & Design Lead' : 'Organizadora y Líder de Diseño'}
              </span>
              <span className="info-item-subtitle">Google Developers Group Girona</span>
              <span className="info-item-date">
                {lang === 'en' ? 'September 2024 - Present' : 'Septiembre 2024 - Presente'}
              </span>
            </div>

            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Quality Assurance Auditor' : 'Auditora de Control de Calidad'}
              </span>
              <span className="info-item-subtitle">AQUA Andorra</span>
              <span className="info-item-date">
                {lang === 'en' ? 'March 2026 - Present' : 'Marzo 2026 - Presente'}
              </span>
            </div>

            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Quality Assurance Evaluator' : 'Evaluadora de Control de Calidad'}
              </span>
              <span className="info-item-subtitle">AQU Catalunya</span>
              <span className="info-item-date">
                {lang === 'en' ? 'October 2025 - April 2026' : 'Octubre 2025 - Abril 2026'}
              </span>
            </div>

            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Frontend & UX/UI Intern' : 'Becaria Frontend y UX/UI'}
              </span>
              <span className="info-item-subtitle">Blue Room Innovation</span>
              <span className="info-item-date">
                {lang === 'en' ? 'July 2025 - August 2025' : 'Julio 2025 - Agosto 2025'}
              </span>
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="about-info-col">
          <h2 className="info-section-title">
            {lang === 'en' ? 'skills.' : 'habilidades.'}
          </h2>
          <div className="skills-list">
            <div className="skills-group">
              <span className="info-item-subtitle">UX/UI design</span>
              <span className="info-item-subtitle">Product design</span>
              <span className="info-item-subtitle">Interaction design</span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'User research' : 'Investigación de usuarios'}
              </span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'Usability testing' : 'Pruebas de usabilidad'}
              </span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'Prototyping' : 'Prototipado'}
              </span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'Visual identity design' : 'Diseño de identidad visual'}
              </span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'Copywriting' : 'Redacción creativa'}
              </span>
              <span className="info-item-subtitle">
                {lang === 'en' ? 'Frontend development' : 'Desarrollo frontend'}
              </span>
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
          <h2 className="info-section-title">
            {lang === 'en' ? 'education.' : 'educación.'}
          </h2>
          <div className="info-list">
            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Bachelor of Videogame Design and Development' : 'Grado en Diseño y Desarrollo de Videojuegos'}
              </span>
              <span className="info-item-subtitle">Universitat de Girona</span>
              <span className="info-item-date">2022 - 2026</span>
            </div>

            <div className="info-item">
              <span className="info-item-title">
                {lang === 'en' ? 'Foundations of UX Design - Google' : 'Fundamentos del Diseño de Experiencia de Usuario (UX) - Google'}
              </span>
              <span className="info-item-subtitle">Coursera</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
