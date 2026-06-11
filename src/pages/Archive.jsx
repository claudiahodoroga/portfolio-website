import React from 'react';

export default function Archive() {
  return (
    <div className="archive-container">
      {/* Row 1: GDG */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">google developers group.</h2>
          <p>
            Joining the GDG Girona team has been a key experience in the recent years. What began as an initiative to help a friend out has grown into a lovely team and an active community.
          </p>
          <p>
            Through organizing tech events I've learned skills like networking, handling logistics, working with a budget. 'Soft skills' should be renamed to 'invaluable skills'. There's nothing that teaches you to act on your feet like a speaker's train getting delayed, or an issue communicating with your catering provider.
          </p>
          <p>
            Although I'm a little far away now, I still support the team I helped build with my co-organizer and bestie Lila.
          </p>
          <p>
            You can find us on <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
        <div className="archive-col-right">
          <img src="/photos/gdg.jpg" alt="Google Developers Group" className="archive-img" />
        </div>
      </div>

      {/* Row 2: Videogame Design */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">videogame design and development.</h2>
          <p>
            Studying game design sometimes means, shockingly, actually making [games]. The sarcasm comes from endless hours trying to figure out how a NAT network works and debugging thousands of C++ program lines. :)
          </p>
          <p>
            The project I loved the most was 'Guardian of the Breadth'. It's buggy and incomplete, but what came from those three months of work feels like the first real game I've made.
          </p>
          <p>
            I was able to research and put SCRUM methodologies into practice by leading my team, acting as an art director and team manager. I also learnt what a 'technical artist' is and discovered my passion for making shaders that barely work.
          </p>
          <p>
            In this project, I contributed what I love: doing a bit of everything. I programmed a few game mechanics, designed some 3D elements, integrated the sound design, and created a few shaders that give the game its unique visual style.
          </p>
        </div>
        <div className="archive-col-right">
          <img src="/photos/gamedev.png" alt="Videogame Design and Development" className="archive-img" />
        </div>
      </div>

      {/* Row 3: Illustration */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">illustration and graphic design.</h2>
          <p>
            I got my Wacom Intuos Draw for Christmas about 10 years ago. What followed has been a series of phases where I loved digital illustration, then I didn't, then I did again.
          </p>
          <p>
            I've kind of always had a notebook and a pen in my hand.
          </p>
        </div>
        <div className="archive-col-right">
          <img src="/photos/art.png" alt="Illustration and Graphic Design" className="archive-img" />
        </div>
      </div>

      {/* Row 4: Written Works */}
      <div className="archive-row archive-row-text">
        <div className="archive-col-left">
          <h2 className="archive-title">written works.</h2>
          <p>
            Storytelling was the reason I studied my degree. Dreaming up stories and situations has always been my go-to way to pass the time. <a href="http://larioja.com/culturas/concurso-cocacola-jovenes-20180605002655-ntvo.html?srsltid=AfmBOorif7eASH7F_9HXBeAr-Ug6B4tUYvij7Op0XNFzkP3hcKwaOmNW" target="_blank" rel="noopener noreferrer" className="blue-text">It even once got me an award!</a>
          </p>
        </div>
        <div className="archive-col-right">
          <div className="archive-links">
            <a href="#story-1" className="info-item-subtitle">Link to story 1.</a>
            <a href="#story-2" className="info-item-subtitle">Link to story 2.</a>
            <a href="#story-3" className="info-item-subtitle">Link to story 3.</a>
          </div>
        </div>
      </div>
    </div>
  );
}
