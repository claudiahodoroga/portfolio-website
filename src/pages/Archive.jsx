import React from 'react';

export default function Archive({ lang }) {
  return (
    <div className="archive-container">
      {/* Row 1: GDG */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">
            {lang === 'en' ? 'google developers group.' : 'google developers group.'}
          </h2>
          {lang === 'en' ? (
            <>
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
            </>
          ) : (
            <>
              <p>
                Unirme al equipo de GDG Girona ha sido una experiencia clave en los últimos años. Lo que empezó como una iniciativa para ayudar a una amiga se ha convertido en un gran equipo y una comunidad muy activa.
              </p>
              <p>
                Al organizar eventos tecnológicos he aprendido habilidades como el networking, la gestión de logística y el trabajo con presupuestos. Las 'habilidades blandas' deberían renombrarse como 'habilidades invaluables'. No hay nada que te enseñe a reaccionar rápido como que se le atrase el tren a un ponente, o que hayan problemas con el proveedor de cátering.
                Aunque ahora estoy un poco lejos, sigo apoyando al equipo que ayudé a construir junto a mi coorganizadora y bestie Lila.
              </p>
              <p>
                Puedes encontrarnos en <a href="https://www.instagram.com/gdg_udg/" target="_blank" rel="noopener noreferrer">Instagram</a> o <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgdg-on-campus-universitat-de-girona%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnfkHKlmKAWDonzC0s0Vc71t6dCVgRw1b4BwpE38VkK1dsZbHhiYhy7xmiQkI_aem_jf2jeJmzI6CBl0ppvDWCyA&e=AUC7pnnfwpFhYI2LgtMS1-bRpwQPeAU33PdBMIgKxjEr1Xmf7PJsrqy9lmoc6LV_yREyOY21PyTfiFeBvJQQWQTf4uPyyhsdiAexHdqUpMfm-mL9OF-p5EpTJ8QFIy-4R2i8Nfg" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>
            </>
          )}
        </div>
        <div className="archive-col-right">
          <img src="/photos/gdg.jpg" alt="Google Developers Group" className="archive-img" />
        </div>
      </div>

      {/* Row 2: Videogame Design */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">
            {lang === 'en' ? 'videogame design and development.' : 'diseño y desarrollo de videojuegos.'}
          </h2>
          {lang === 'en' ? (
            <>
              <p>
                Studying game design sometimes means, shockingly, actually making [games]. The sarcasm comes from endless hours trying to figure out how a NAT network works and debugging thousands of C++ program lines.
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
            </>
          ) : (
            <>
              <p>
                Estudiar diseño de videojuegos a veces significa, sorprendentemente, hacer videojuegos. El sarcasmo proviene de las interminables horas intentando entender cómo funciona una red NAT y depurando miles de líneas de código en C++.
              </p>
              <p>
                El proyecto que más me gustó fue 'Guardian of the Breadth'. Está incompleto y tiene fallos, pero lo que surgió de esos tres meses de trabajo se siente como el primer juego real que he hecho.
              </p>
              <p>
                Pude investigar y poner en práctica metodologías SCRUM liderando a mi equipo, actuando como directora de arte y gestora de equipo. También aprendí lo que es un 'artista técnico' y descubrí mi pasión por crear shaders que apenas funcionan.
              </p>
              <p>
                En este proyecto, aporté lo que amo: hacer un poco de todo. Programé algunas mecánicas de juego, diseñé algunos elementos 3D, integré el diseño de sonido y creé algunos shaders que le dan al juego su estilo visual único.
              </p>
            </>
          )}
        </div>
        <div className="archive-col-right">
          <img src="/photos/gamedev.png" alt="Videogame Design and Development" className="archive-img" />
        </div>
      </div>

      {/* Row 3: Illustration */}
      <div className="archive-row archive-row-media">
        <div className="archive-col-left">
          <h2 className="archive-title">
            {lang === 'en' ? 'illustration and graphic design.' : 'ilustración y diseño gráfico.'}
          </h2>
          {lang === 'en' ? (
            <>
              <p>
                I got my Wacom Intuos Draw for Christmas about 10 years ago. What followed has been a series of phases where I loved digital illustration, then I didn't, then I did again.
              </p>
              <p>
                I've kind of always had a notebook and a pen in my hand.
              </p>
            </>
          ) : (
            <>
              <p>
                Me regalaron mi Wacom Intuos Draw por Navidad hace unos 10 años. Lo que siguió ha sido una serie de etapas en las que me encantaba la ilustración digital, luego no, y luego sí otra vez.
              </p>
              <p>
                En realidad, siempre he tenido una libreta y un bolígrafo en la mano.
              </p>
            </>
          )}
        </div>
        <div className="archive-col-right">
          <img src="/photos/art.png" alt="Illustration and Graphic Design" className="archive-img" />
        </div>
      </div>

      {/* Row 4: Written Works */}
      <div className="archive-row archive-row-text">
        <div className="archive-col-left">
          <h2 className="archive-title">
            {lang === 'en' ? 'written works.' : 'obras escritas.'}
          </h2>
          <p>
            {lang === 'en'
              ? "Storytelling was the reason I studied my degree. Dreaming up stories and situations has always been my go-to way to pass the time. It even once got me an award!"
              : "La narración de historias fue la razón por la que estudié mi carrera. Imaginar historias y situaciones siempre ha sido mi forma favorita de pasar el tiempo. ¡Incluso una vez me dieron un premio!"}
          </p>
        </div>
        <div className="archive-col-right">
          <div className="archive-links">
            <a href="#story-1" className="info-item-subtitle">
              {lang === 'en' ? 'Link to story 1.' : 'Enlace a la historia 1.'}
            </a>
            <a href="#story-2" className="info-item-subtitle">
              {lang === 'en' ? 'Link to story 2.' : 'Enlace a la historia 2.'}
            </a>
            <a href="#story-3" className="info-item-subtitle">
              {lang === 'en' ? 'Link to story 3.' : 'Enlace a la historia 3.'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
