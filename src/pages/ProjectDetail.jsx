import React, { useState, useEffect, useRef } from 'react';

// Image loader component with stylized CSS fallbacks
function ImageWithFallback({ src, alt, fallbackText, className }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`image-fallback-placeholder ${className || ''}`}>
        <div className="placeholder-icon">📷</div>
        <div className="placeholder-label">{fallbackText || alt}</div>
        <div className="placeholder-hint">Asset fallback load state</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}

// Scroll anim trigger using IntersectionObserver
function ScrollSlide({ children, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`project-slide ${visible ? 'slide-visible' : 'slide-hidden'} ${className || ''}`}
    >
      {children}
    </section>
  );
}

// Helper to render stats inline — accepts a single string or an array
function renderStatHighlight(input, lang) {
  if (!input) return null;
  const items = Array.isArray(input) ? input : [input];
  return (
    <>
      {items.map((highlightText, i) => {
        // Match leading number/percentage e.g. "80%" or "34%"
        const match = highlightText.match(/^([Ee]l\s+)?(\d+%\s+|\d+\s+[Hh]oras\s+|\d+\s+[Hh]our[s]?\s+)([\s\S]*)/);
        if (match) {
          const numPart = match[2].trim();
          const textPart = ((match[1] || '') + match[3]).trim();
          return (
            // Use div (not p) so embedded <ul> lists are valid HTML
            <div key={i} className="stat-desc-text" style={{ marginBottom: i < items.length - 1 ? '14px' : 0 }}>
              <span className="stat-number-highlight">{numPart}</span>{' '}
              <span dangerouslySetInnerHTML={{ __html: textPart }} />
            </div>
          );
        }
        return (
          <div key={i} className="stat-highlight" style={{ marginBottom: i < items.length - 1 ? '14px' : 0 }}
            dangerouslySetInnerHTML={{ __html: highlightText }} />
        );
      })}
    </>
  );
}

export default function ProjectDetail({ lang, projectSlug, onBack }) {
  // English and Spanish full translations for each project case study
  const caseStudies = {
    repot: {
      theme: 'repot-theme',
      title: 'REPOT',
      heroTitle: lang === 'en' ? 'RePot: find your plants a temporary home.' : 'RePot: encuentra un hogar temporal para tus plantas.',
      heroImg: '/photos/repot-hero.png',
      statusText: lang === 'en' ? 'active project • review phase' : 'proyecto activo • fase de revisión',
      liveLink: 'https://github.com/claudiahodoroga/portfolio-website',
      repoLink: 'https://github.com/claudiahodoroga/portfolio-website',
      prototypeLink: 'https://repot-mu.vercel.app/plantas',
      quote: null,
      metadata: {
        role: lang === 'en' ? 'Designer & Develope' : 'Diseñadora y Desarrolladora',
        timeline: lang === 'en' ? '4 weeks' : '4 semanas',
        team: lang === 'en' ? 'Solo + illustration collaborator' : 'Sola + colaboración con ilustrador',
        tools: 'Figma, React'
      },
      problem: {
        title: lang === 'en' ? 'The Problem' : 'El Problema',
        text: lang === 'en'
          ? "My mother has <strong>so many plants</strong>. When she goes on vacation, her only solution is to send a WhatsApp message around and hope someone can come over to water them. There are <strong>no structured alternatives</strong>, just favours, crossed fingers, and the occasional plant left behind after a move."
          : "Mi madre tiene <strong>muchísimas plantas</strong>. Cuando se va de vacaciones, su única opción es enviar un mensaje por WhatsApp y cruzar los dedos para que alguien pueda venir a regarlas. No hay <strong>alternativas estructuradas</strong>: solo favores, rezos y alguna planta abandonada tras una mudanza.",
        subText: lang === 'en'
          ? "Existing apps like Planta solve care scheduling. They <strong>don't solve the human problem</strong>: finding someone you can trust to temporarily take over. The closest analogy is <strong>Rover</strong>, the pet-sitting platform, but without anyone entering your home."
          : "Las apps existentes como Planta solucionan la programación del riego, pero <strong>no el problema humano</strong>: encontrar a alguien de confianza que se haga cargo de ellas temporalmente. La analogía más cercana es <strong>Rover</strong> para mascotas, pero sin que nadie tenga que entrar en tu casa."
      },
      outcome: {
        title: lang === 'en' ? 'The Outcome' : 'El Resultado',
        text: lang === 'en'
          ? "Designed and developed end-to-end as a <strong>solo project</strong>. Planning to launch in Spain through existing family and community networks — a <strong>deliberate closed pilot</strong> that mirrors the invite-only philosophy of the product itself."
          : "Diseñado y desarrollado de extremo a extremo como un <strong>proyecto en solitario</strong>. Planeo lanzarlo en España a través de redes familiares y comunitarias: un <strong>piloto cerrado deliberado</strong> que refleja la filosofía de acceso exclusivo por invitación de la app."
      },
      audience: {
        title: lang === 'en' ? 'Who This Is For' : 'Para Quién Es',
        text: lang === 'en'
          ? "RePot is designed for people who are genuinely attached to their plants. <strong>The primary user is older women</strong>, a demographic that stays largely forgotten in product thinking. I started designing for my mother, then realised I was designing for a lot of mothers."
          : "RePot está diseñado para personas realmente apegadas a sus plantas. El usuario principal son mujeres mayores, un grupo demográfico a menudo olvidado en el desarrollo de productos. Empecé diseñando para mi madre, y me di cuenta de que diseñaba para muchas madres."
      },
      hypothesis: {
        title: lang === 'en' ? 'Hypothesis' : 'Hipótesis',
        text: lang === 'en'
          ? "<strong>Plant lovers would trust a stranger</strong> to care for their plants temporarily if the social context felt close enough — friend of a friend — and if <strong>accountability</strong> was built into the handover process from the start."
          : "Los amantes de las plantas <strong>confiarían en un extraño</strong> para cuidar de sus plantas temporalmente si el contexto social fuera cercano (un amigo de un amigo) y si <strong>la transparencia</strong> estuviera integrada en el proceso de entrega desde el principio."
      },
      research: {
        title: lang === 'en' ? 'User Research' : 'Investigación de Usuarios',
        text: lang === 'en'
          ? "Based on 18 respondents (primarily ages 18–49, with representation across 35–64)."
          : "Basado en 18 encuestados (principalmente de 18 a 49 años, con representación de 35 a 64).",
        highlights: lang === 'en'
          ? [
            "94% of users have plants at home. Plant ownership is near-universal.",
            "44% of users abandoned their plants entirely when moving homes. Resignation is the go-to solution.",
            "80% of users would trust a stranger with their plants given 3 primary trust signals:<ul class=\"research-bullets\"><li>a visible, genuine love for plants</li><li>a recommendation from a mutual connection</li><li>regular photo updates during the handover period</li></ul>"
          ]
          : [
            "94% de los usuarios tienen plantas en casa. Tener plantas es casi universal.",
            "44% de los usuarios abandonaron sus plantas por completo al mudarse de casa. La resignación es la solución habitual.",
            "80% confiaría en un extraño con sus plantas si se dan 3 señales de confianza:<ul class=\"research-bullets\"><li>un amor visible y genuino por las plantas</li><li>una recomendación de un contacto en común</li><li>actualizaciones periódicas con fotos durante el período de entrega</li></ul>"
          ]
      },
      decisions: [
        {
          num: '01',
          title: lang === 'en' ? 'layering trust signals.' : 'confianza por capas.',
          text: lang === 'en'
            ? "A profile photo isn't enough. RePot stacks multiple trust signals: invite-only networks, plant galleries showing what users already care for, and plant status updates via chat."
            : "Una foto de perfil no es suficiente. RePot superpone múltiples señales de confianza: red de invitaciones, galería de plantas que ya cuidan y frecuencia de actualizaciones por chat."
        },
        {
          num: '02',
          title: lang === 'en' ? 'invite-only access.' : 'acceso por invitación.',
          text: lang === 'en'
            ? "A closed network grows slower, which is intentional. The friend-of-a-friend model is what makes the trust architecture believable and preserves community quality."
            : "Una red cerrada crece más lento, lo cual es intencionado. El modelo de amigo-de-amigo es lo que hace creíble la estructura de confianza y preserva la calidad de la comunidad."
        },
        {
          num: '03',
          title: lang === 'en' ? 'illustrated avatars.' : 'avatares ilustrados.',
          text: lang === 'en'
            ? "Our demographic values privacy over presence. Illustrated avatars maintain visual cohesion and feel personal without requiring users to expose their photos online."
            : "Nuestro público valora la privacidad por encima de la exposición. Los avatares ilustrados mantienen la cohesión visual y se sienten personales sin exigir que suban selfis."
        }
      ],
      learnings: {
        title: lang === 'en' ? 'Learnings & Takeaways' : 'Aprendizajes y Conclusiones',
        points: lang === 'en'
          ? [
            "The illustrated plant system is complex at scale. I'm exploring <strong>training a generative model</strong> on the illustrator's style to dynamically produce plant species illustrations.",
            "Stopped fighting the designer/developer divide. Letting clear <strong>product decisions guide</strong> the UI design and engineering resolved early workflow blocks."
          ]
          : [
            "El sistema de plantas ilustradas es complejo a gran escala. Estoy explorando <strong>entrenar un modelo generativo</strong> en el estilo de la ilustradora para producir nuevas especies.",
            "Dejé de pelear con la división entre diseñador y desarrollador. Permitir que las <strong>decisiones claras de producto guiaran</strong> tanto el diseño UI como la ingeniería resolvió los bloqueos."
          ]
      },
      mockupImages: ['/photos/repot-gallery1.png', '/photos/repot-gallery2.png'],
      isolatedImage: '/photos/repot-feature-isolated.png',
      outcomeImg: '/photos/repot-outcome.png',
      isolatedCaption: lang === 'en' ? 'Handover photo update popup' : 'Ventana emergente de actualización con foto'
    },
    blueroom: {
      theme: 'blueroom-theme',
      title: 'BLUE ROOM INNOVATION',
      heroTitle: lang === 'en' ? 'UX/UI & Frontend Internship — Summer 2025.' : 'Prácticas de UX/UI y Frontend — Verano de 2025.',
      heroImg: '/bri/circularpassmockup.png',
      statusText: lang === 'en' ? 'internship complete' : 'prácticas completadas',
      liveLink: 'https://blueroominnovation.com',
      repoLink: null,
      quote: {
        text: lang === 'en'
          ? "Despite having a very good technical foundation thanks to her computer science training, I have always been very impressed by Claudia's passion for design and creativity. She is capable of making decisions thinking not only about technical aspects, but also visual and user experience aspects. This adds a lot of value to projects, as it is a profile that I find is often missing, bringing freshness and enriches discussions with the team."
          : "A pesar de tener una base técnica muy buena gracias a su formación en informática, siempre me ha impresionado mucho de Claudia su pasión por el diseño y la creatividad. Es capaz de tomar decisiones pensando no solo en los aspectos técnicos, sino también en los aspectos visuales y de experiencia de usuario. Esto aporta mucho valor a los proyectos, ya que es un perfil que suelo encontrar que falta, aportando frescura y enriqueciendo las discusiones con el equipo.",
        author: lang === 'en' ? 'Guillem, Frontend Developer at Blue Room Innovation' : 'Guillem, Desarrollador Frontend en Blue Room Innovation'
      },
      metadata: {
        role: lang === 'en' ? 'Frontend & UX/UI Intern' : 'Becaria Frontend y UX/UI',
        timeline: lang === 'en' ? 'July–September 2025 (345 hours)' : 'Julio–Septiembre 2025 (345 horas)',
        team: lang === 'en' ? 'Product Owner, 1 Frontend Intern, Dev Team' : 'Product Owner, 1 becario frontend, equipo dev',
        tools: 'Figma, Next.js, Git'
      },
      problem: {
        title: lang === 'en' ? 'Context & Dashboards' : 'Contexto y Cuadros de Mando',
        text: lang === 'en'
          ? "Blue Room Innovation builds <strong>digital product passports</strong> to make origins and lifecycles traceable. I worked on <strong>CircularPass</strong> (a product info dashboard for businesses) and <strong>Portwaste</strong> (an environmental compliance dashboard tracking ship shipments)."
          : "Blue Room Innovation crea pasaportes digitales para hacer trazable el ciclo de vida de los productos. Trabajé en CircularPass (cuadro de mando de información para empresas) y Portwaste (seguimiento de cumplimiento ambiental de buques).",
        subText: lang === 'en'
          ? "Midway through the internship, the lead designer was unexpectedly unavailable. I stepped up to lead Portwaste designs directly, ensuring development and client delivery continued without delays."
          : "A mitad de las prácticas, el diseñador principal no estuvo disponible. Asumí la responsabilidad directa del diseño de Portwaste, garantizando que el desarrollo y las entregas siguieran sin retrasos."
      },
      outcome: {
        title: lang === 'en' ? 'Deliveries & Impact' : 'Entregas e Impacto',
        text: lang === 'en'
          ? "Hi-fi screens delivered to developers and made production-ready. <strong>Stepped into UX lead responsibilities</strong> without formal handover and successfully presented design progress directly to clients."
          : "Pantallas de alta fidelidad entregadas y listas para producción. Asumí las tareas de liderazgo de UX sin traspaso formal y presenté con éxito los avances de diseño directamente a los clientes."
      },
      audience: null,
      hypothesis: null,
      research: {
        title: lang === 'en' ? 'Startup Challenges' : 'Desafíos Startup',
        text: lang === 'en'
          ? "Working at startup speed meant no iteration buffer. Every decision had to be considered enough to hand off immediately and confident enough to defend to stakeholders."
          : "Trabajar a ritmo de startup significaba no tener margen de error. Cada decisión debía estar lo bastante madurada para entregarse de inmediato y defenderse ante los clientes.",
        highlight: lang === 'en'
          ? "345 hours of UX/UI and frontend development structured into clean layouts for CircularPass compliance."
          : "345 horas de desarrollo frontend y UX/UI estructuradas en diseños limpios para CircularPass."
      },
      decisions: [
        {
          num: '01',
          title: lang === 'en' ? 'Designing the missing tablet breakpoint' : 'Diseño del punto de ruptura para tabletas',
          text: lang === 'en'
            ? "CircularPass only had mobile and desktop layouts. When elements broke on tablets, I took ownership of redesigning the components to scale cleanly in between."
            : "CircularPass solo tenía versiones móvil y escritorio. Cuando los elementos fallaban en tabletas, rediseñé los componentes para que escalaran de forma limpia."
        },
        {
          num: '02',
          title: lang === 'en' ? 'Replacing complex mobile graphs' : 'Sustitución de gráficos complejos en móviles',
          text: lang === 'en'
            ? "A key Portwaste graph became unreadable on mobile. Instead of scaling it down, I replaced it with a list format that preserved the data relationships."
            : "Un gráfico clave de Portwaste era ilegible en móvil. En lugar de encogerlo, lo sustituí por un formato de lista que mantenía las relaciones de los datos."
        },
        {
          num: '03',
          title: lang === 'en' ? 'Resolving data & interaction hierarchy' : 'Resolución de jerarquías de datos e interacción',
          text: lang === 'en'
            ? "Broke a design-development deadlock by sketching interaction flows for drill-down graphs, aligning developers and product owners on the data structure."
            : "Desbloqueé el trabajo coordinando con los desarrolladores bocetos de flujos para gráficos interactivos, alineando la estructura de datos."
        }
      ],
      learnings: {
        title: lang === 'en' ? 'Learnings' : 'Aprendizajes',
        points: lang === 'en'
          ? [
            "<strong>Design decisions and data architecture</strong> are the same decision. You cannot finalize interaction UI without understanding what data categories exist.",
            "Learning how to construct a brief and <strong>gather requirements</strong> mid-project is a key skill when starting without instructions."
          ]
          : [
            "Las decisiones de diseño y la arquitectura de datos son la misma moneda. No puedes cerrar la interacción sin entender las categorías de datos.",
            "Aprender a redactar un briefing y reunir requisitos a mitad de un proyecto es vital cuando trabajas sin instrucciones iniciales."
          ]
      },
      mockupImages: ['/bri/portwaste_mockup.png'],
      isolatedImage: null,
      outcomeImg: '/bri/bri_interns.png',
      isolatedCaption: null
    },
    hackupc: {
      theme: 'hackupc-theme',
      title: 'HACKUPC 2025',
      heroTitle: lang === 'en' ? 'Split The Bill — Revolut Track, 4th Place.' : 'Divide la cuenta — Pista de Revolut, 4º Puesto.',
      heroImg: '/photos/hackupc-hero.png',
      statusText: lang === 'en' ? 'active project • review phase' : 'proyecto activo • fase de revisión',
      liveLink: 'https://github.com/claudiahodoroga/portfolio-website',
      repoLink: 'https://github.com/claudiahodoroga/portfolio-website',
      prototypeLink: 'https://split-the-bill-demo.vercel.app/',
      quote: null,
      metadata: {
        role: lang === 'en' ? 'Designer & Frontend' : 'Diseñadora y Frontend',
        timeline: lang === 'en' ? '36 hours (HackUPC 2025)' : '36 horas (HackUPC 2025)',
        team: lang === 'en' ? '4 people (2 frontend, 2 backend)' : '4 personas (2 frontend, 2 backend)',
        tools: 'Figma, React, Gemini API, OCR'
      },
      problem: {
        title: lang === 'en' ? 'The Opportunity' : 'La Oportunidad',
        text: lang === 'en'
          ? "Revolut's default bill splitting only allows manual percent calculations. For complex restaurant bills or trips, users water down experience in calculator or notes apps. We brought itemized receipt OCR, AI voice parsing, and friend splitting directly into Revolut."
          : "La división de facturas por defecto de Revolut solo permite cálculos porcentuales manuales. Para cuentas complejas de restaurantes o viajes, los usuarios recurren a notas o calculadoras. Llevamos el OCR, el dictado por voz IA y el reparto directo a Revolut.",
        subText: lang === 'en'
          ? "Apple launched an equivalent feature in Apple Pay shortly after. Great minds think alike!"
          : "Apple lanzó una función equivalente en Apple Pay poco después. ¡Las grandes mentes piensan igual!"
      },
      outcome: {
        title: lang === 'en' ? 'Hackathon Outcome' : 'Resultado del Hackathon',
        text: lang === 'en'
          ? "Awarded 4th place out of 17 teams in the Revolut sponsor track. OCR bill scanning, group item assignment, and friend matching were fully implemented and demoed live."
          : "Ganadores del 4º puesto de 17 equipos en la categoría patrocinada por Revolut. Implementamos y mostramos en vivo el escaneo OCR, la asignación y la lista de amigos."
      },
      audience: null,
      hypothesis: null,
      research: {
        title: lang === 'en' ? 'Hackathon Pitching' : 'Presentación Hackathon',
        text: lang === 'en'
          ? "Pitched the project live to Revolut engineers. Being honest about descoped features (like the AI assistant backend logic which wasn't fully connected) built credibility and trust during QA."
          : "Presentamos el proyecto en vivo a ingenieros de Revolut. Ser sinceros sobre lo que se dejó fuera (como la lógica del asistente por voz IA) nos dio credibilidad.",
        highlight: lang === 'en'
          ? "36 hours to complete the V1 prototype from scratch under intense hackathon time constraints."
          : "36 horas para completar el prototipo V1 desde cero bajo intensas restricciones de tiempo."
      },
      decisions: [
        {
          num: '01',
          title: lang === 'en' ? 'Defending simple, completable scope' : 'Defender un alcance sencillo y completable',
          text: lang === 'en'
            ? "Avoided high-concept features that we couldn't finish. Scope control allowed us to deliver OCR, friend list features, and voice triggers securely."
            : "Evitamos ideas demasiado complejas que no habríamos acabado. Controlar el alcance nos permitió entregar OCR, lista de amigos e interactividad por voz."
        },
        {
          num: '02',
          title: lang === 'en' ? 'Working within Revolut design system' : 'Trabajar dentro del sistema de diseño de Revolut',
          text: lang === 'en'
            ? "Designed UI screens directly on top of Revolut's existing system guidelines for faster implementation, high visual fidelity, and a native look."
            : "Diseñamos las interfaces sobre las pautas de Revolut para acelerar la maquetación, lograr alta fidelidad visual y un aspecto nativo."
        },
        {
          num: '03',
          title: lang === 'en' ? 'Building a local fallback first' : 'Construir una alternativa local primero',
          text: lang === 'en'
            ? "Because the backend ran on a local machine, I built static mock endpoints. When a developer fell asleep before the presentation, we ran the live demo from the fallback file seamlessly."
            : "Como el backend corría en local, creé datos simulados. Cuando el programador se durmió antes de presentar, ejecutamos la demo con los datos de reserva sin problemas."
        }
      ],
      learnings: {
        title: lang === 'en' ? 'Key Learnings' : 'Aprendizajes Clave',
        points: lang === 'en'
          ? [
            "Foresight in a chaotic environment looks like paranoia until it saves the live demo.",
            "Knowing when to protect your own delivery output instead of trying to unblock someone else is a tough but necessary call under hackathon timeframes.",
            "Agree on database and backend hosting before writing a single line of code."
          ]
          : [
            "La previsión en entornos caóticos parece paranoia hasta que te salva la demostración en directo.",
            "Saber cuándo centrarse en entregar tu parte en lugar de intentar desbloquear a otro es difícil pero necesario en un hackathon.",
            "Acordar la base de datos y el hosting del backend antes de escribir la primera línea de código."
          ]
      },
      mockupImages: ['/photos/hackupc-ocr.png'],
      isolatedImage: '/photos/hackupc-assistant.png',
      outcomeImg: '/photos/hackupc-outcome.png',
      isolatedCaption: lang === 'en' ? 'AI Voice assistant splitting panel' : 'Asistente de reparto por voz IA'
    }
  };

  const project = caseStudies[projectSlug];

  if (!project) {
    return (
      <div className="detail-container">
        <button onClick={onBack} className="back-btn-link">
          {lang === 'en' ? '← back to work.' : '← volver a proyectos.'}
        </button>
        <div className="error-card">
          {lang === 'en' ? 'Project not found.' : 'Proyecto no encontrado.'}
        </div>
      </div>
    );
  }

  return (
    <div className={`detail-container ${project.theme}`}>
      {/* Back Button */}
      <button onClick={onBack} className="back-btn-link">
        {lang === 'en' ? '← back to work.' : '← volver a proyectos.'}
      </button>

      {/* Slide 1: Hero */}
      <ScrollSlide className="project-hero-slide">
        <div className="hero-text-wrap">
          <h1 className="hero-heading">{project.heroTitle}</h1>

          <div className="hero-status-area">
            <div className="status-badge-wrap">
              <span className="status-glow-dot"></span>
              <span className="status-badge-text">{project.statusText}</span>
            </div>
            {project.prototypeLink && (
              <div className="hero-links-wrap">
                <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="hero-btn-link">
                  {lang === 'en' ? 'view live prototype ↗' : 'ver prototipo en vivo ↗'}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hero-visual-card">
          <ImageWithFallback
            src={project.heroImg}
            alt={project.title}
            fallbackText={lang === 'en' ? 'Hero Interface Mockup Graphic' : 'Diseño de interfaz principal (Hero)'}
            className="hero-device-img"
          />
        </div>
      </ScrollSlide>

      {/* Slide 2: Problem + Outcome (left) / Metadata (right) */}
      <ScrollSlide className="overview-slide">
        <div className="slide-grid-half">
          <div className="overview-text">
            <div className="overview-paragraphs">
              <div>
                <h3 className="cs-title">{lang === 'en' ? 'the problem.' : 'el problema.'}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.problem.text }} />
                {project.problem.subText && <p style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: project.problem.subText }} />}
              </div>
              <div style={{ marginTop: '24px' }}>
                <h3 className="cs-title">{lang === 'en' ? 'the outcome.' : 'el resultado.'}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.outcome.text }} />
              </div>
            </div>
          </div>
          <div className="metadata-card">
            <ul className="metadata-list">
              <li>
                <span className="meta-label">{lang === 'en' ? 'role.' : 'rol.'}</span>
                <span className="meta-value">{project.metadata.role}</span>
              </li>
              <li>
                <span className="meta-label">{lang === 'en' ? 'timeline.' : 'tiempo.'}</span>
                <span className="meta-value">{project.metadata.timeline}</span>
              </li>
              <li>
                <span className="meta-label">{lang === 'en' ? 'team.' : 'equipo.'}</span>
                <span className="meta-value">{project.metadata.team}</span>
              </li>
              <li>
                <span className="meta-label">{lang === 'en' ? 'tools.' : 'herramientas.'}</span>
                <span className="meta-value">{project.metadata.tools}</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollSlide>

      {/* Slide 3: Gallery — single full-width image (layout composed externally) */}
      <ScrollSlide className="gallery-slide">
        <div className="gallery-three-col">
          <div className="gallery-img-frame">
            <ImageWithFallback
              src={project.mockupImages[0] || project.isolatedImage}
              alt={`${project.title} screens`}
              fallbackText={lang === 'en' ? 'App screens & interface overview — image coming soon.' : 'Pantallas de la app — imagen próximamente.'}
              className="gallery-img-fill"
            />
          </div>
        </div>
      </ScrollSlide>

      {/* Slide 4: User + Hypothesis (left) / Research + stats (right) */}
      {(project.audience || project.hypothesis) && (
        <ScrollSlide className="research-slide">
          <div className="slide-grid-half">
            <div className="research-left">
              {project.audience && (
                <div>
                  <h3 className="cs-title">{lang === 'en' ? 'the user.' : 'el usuario.'}</h3>
                  <p dangerouslySetInnerHTML={{ __html: project.audience.text }} />
                </div>
              )}
              {project.hypothesis && (
                <div style={{ marginTop: '24px' }}>
                  <h3 className="cs-title">{lang === 'en' ? 'the hypothesis.' : 'la hipótesis.'}</h3>
                  <p style={{ marginTop: '8px' }} dangerouslySetInnerHTML={{ __html: project.hypothesis.text }} />
                </div>
              )}
            </div>
            <div className="research-right-highlight">
              <h3 className="cs-title">{lang === 'en' ? 'the research.' : 'la investigación.'}</h3>
              <p className="text-light" style={{ marginTop: '8px' }} dangerouslySetInnerHTML={{ __html: project.research.text }} />
              <div style={{ marginTop: '16px' }}>
                {renderStatHighlight(project.research.highlights || project.research.highlight, lang)}
              </div>
            </div>
          </div>
        </ScrollSlide>
      )}

      {/* Slide 5: Key Decisions — left col title+desc text, right col numbered list */}
      <ScrollSlide className="decisions-slide">
        <div className="decisions-layout-grid">
          <div className="decisions-left">
            <h3 className="cs-title">{lang === 'en' ? 'the key decisions.' : 'las decisiones clave.'}</h3>
            <p className="decisions-intro-text">
              {lang === 'en' ? 'Product strategy & UX choices that shaped the product.' : 'Decisiones de estrategia de producto y diseño UX que definieron la app.'}
            </p>
          </div>
          <ol className="decisions-numbered-list">
            {project.decisions.map((item, idx) => (
              <li key={idx} className="decision-numbered-item">
                <h4 className="decision-heading">{item.title}</h4>
                <p className="decision-desc">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </ScrollSlide>

      {/* Slide 6: Takeaways — image (left), learnings list (right) + optional quote row */}
      <ScrollSlide className="outcomes-slide">
        <div className="outcomes-layout-grid">
          <div className="outcome-mockup-card">
            <div className="outcome-mockup-wrapper">
              <ImageWithFallback
                src={project.outcomeImg}
                alt="Final outcome mockup"
                fallbackText={lang === 'en' ? 'the pretty mockup & screenshots go here.' : 'El mockup y capturas finales van aquí.'}
                className="outcome-mockup-img"
              />
            </div>
          </div>
          <div className="outcomes-right">
            <h3 className="cs-title">{lang === 'en' ? 'the takeaways.' : 'las conclusiones.'}</h3>
            <ul className="learnings-list-wrap" style={{ marginTop: '16px' }}>
              {project.learnings.points.map((point, idx) => (
                <li key={idx} className="learning-point-item">
                  <div className="learning-dot"></div>
                  <p dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.quote && (
          <div className="outcomes-quote-row">
            <blockquote className="quote-banner-blockquote">
              <p className="quote-banner-text">"{project.quote.text}"</p>
              <cite className="quote-banner-author">— {project.quote.author}</cite>
            </blockquote>
          </div>
        )}
      </ScrollSlide>
    </div>
  );
}
