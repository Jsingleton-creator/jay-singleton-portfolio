const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><rect width="100%" height="100%" fill="%23ece8df"/><text x="50%" y="50%" text-anchor="middle" font-family="Georgia,serif" font-size="34" fill="%236d6759">Image coming soon</text></svg>';

// EDIT THIS CONTENT: update copy, links, and image paths in this object.
const content = {
  name: 'Jay Singleton',
  title: 'Intelligent podcasts with a spine.',
  roleLine: 'Podcast creator, producer and story developer',
  intro:
    'I make story-led shows about complex ideas and help thinkers, founders and organisations turn big ideas into podcasts people actually want to hear.',
  heroButtons: {
    listen: '#wrong-side-of-history',
    selectedWork: '#selected-work',
    contact: '#contact'
  },
  about: [
    'I’m Jay Singleton, a podcast creator, producer and story developer. I’ve spent nearly a decade making shows across interviews, narrative, education, business, live formats and short-form audio. My work usually starts in the same place: a person with something worth saying, but no clear shape for how to say it.',
    'I help find that shape.',
    'I’ve produced founder interviews, developed education podcasts, led live multi-platform shows, worked on short-form editorial series, and built my own research-led history show from scratch. I’m interested in podcasts with a real point of view: shows that respect the audience, carry ideas clearly, and don’t collapse into bland conversation.'
  ],
  wrongSide: {
    description: [
      'Wrong Side of History is my own history podcast.',
      'The show asks a simple question: what were they thinking?',
      'Each season steps inside the worldview of people and movements that ended up on the wrong side of history. I look at what they feared, what they valued, what they thought they were protecting, and why their position made sense to them at the time.',
      'The first season explores the women who opposed women’s suffrage. Not as caricatures. Not as idiots. As intelligent, often principled people living inside a moral world we no longer share.',
      'The show is research-led, source-led and built for listeners who are tired of heroes-and-villains history, but still want moral seriousness.'
    ],
    listenLink: '#'
  },
  selectedWork: [
    {
      title: 'Wrong Side of History',
      role: 'Creator, host and producer of a research-led history podcast about understanding history’s “bad guys” the way they understood themselves. The first season examines the women who opposed women’s suffrage.',
      image: '/assets/wrong-side-of-history-artwork.png'
    },
    {
      title: 'Secret Leaders',
      role: 'Producer on a long-running founder interview show. Work included guest research, editorial planning, show structure, production, and helping turn business stories into episodes with shape and momentum.',
      image: '/assets/secret-leaders-logo.png'
    },
    {
      title: 'Simon Says with Simon Squibb',
      role: 'Lead producer on a live call-in advice show built across YouTube, podcast, social and live formats. A fast-moving production with real callers, live judgement calls and a strong community engine.',
      image: '/assets/headshot.jpg'
    },
    {
      title: 'We Are In Beta',
      role: 'Developed and produced education-focused podcasts for a community of school leaders, teachers and education professionals. The work was about turning lived experience and sector knowledge into useful, human stories.',
      image: '/assets/we-are-in-beta-logo.png'
    },
    {
      title: 'Blinkist',
      role: 'Worked across short-form editorial audio, helping turn books and ideas into concise, listenable scripts and series. A useful training ground in clarity, compression and making ideas travel.',
      image: '/assets/blinkist-logo.png'
    }
  ],
  whatIDo: [
    {
      title: 'Show Strategy',
      text: 'For people who have an idea for a podcast, but need to know what the show actually is. I help clarify the premise, audience, format, tone, structure and reason to exist.'
    },
    {
      title: 'Development Producer',
      text: 'For shows that need stronger editorial shape before production begins. I help develop episode ideas, recurring formats, guest angles, series arcs, host voice and the creative spine of the show.'
    },
    {
      title: 'Podcast Launch Partner',
      text: 'For thinkers, founders or organisations starting from zero. I help take a show from rough idea to launch-ready: concept, format, episode structure, production plan, trailer, first episodes and publishing rhythm.'
    },
    {
      title: 'Story Development',
      text: 'For complex material that needs to become listenable. I help shape research, interviews and ideas into episodes with movement, stakes, tension and a clear reason to keep listening.'
    },
    {
      title: 'Shows for Thinkers, Founders and Organisations',
      text: 'For people with serious ideas who don’t want to make another forgettable interview podcast. I help build shows with substance, voice and a point of view.'
    }
  ],
  contact: {
    intro: 'Have a show in mind?',
    body: 'I work best with people who care about substance, story and getting the details right. That might be a founder with a strong point of view, a thinker with years of ideas to organise, or an organisation that wants to make something more interesting than branded content. Send me a short note with what you’re thinking about, who it’s for, and where you are in the process.',
    email: '[your email]',
    linkedin: '[your LinkedIn]'
  }
};

const SmartImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallbackImage;
    }}
  />
);

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">{content.name}</p>
          <h1>{content.title}</h1>
          <h2>{content.roleLine}</h2>
          <p className="lead">{content.intro}</p>
          <div className="button-row">
            {/* EDIT LINKS: update href values in content.heroButtons above */}
            <a className="btn btn-solid" href={content.heroButtons.listen}>
              Listen to Wrong Side of History
            </a>
            <a className="btn btn-outline" href={content.heroButtons.selectedWork}>
              See Selected Work
            </a>
            <a className="btn btn-outline" href={content.heroButtons.contact}>
              Talk to Me About a Show
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Flagship project highlight">
          <p className="panel-label">Flagship Project</p>
          <h3>Wrong Side of History</h3>
          {content.wrongSide.description.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {/* EDIT LINK: replace # with platform/show URL */}
          <a className="text-link" href={content.wrongSide.listenLink}>
            Listen to Wrong Side of History →
          </a>
          <SmartImage
            src="/assets/wrong-side-of-history-artwork.png"
            alt="Wrong Side of History podcast artwork"
            className="artwork"
          />
        </aside>
      </header>

      <main>
        <section className="section about-layout" id="about">
          <SmartImage src="/assets/headshot.jpg" alt="Portrait of Jay Singleton" className="headshot" />
          <div>
            <h3>About</h3>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section" id="wrong-side-of-history">
          <h3>Wrong Side of History</h3>
          <div className="long-copy">
            {content.wrongSide.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a className="text-link" href={content.wrongSide.listenLink}>
            Listen to Wrong Side of History →
          </a>
        </section>

        <section className="section" id="selected-work">
          <h3>Selected Work</h3>
          <div className="grid">
            {content.selectedWork.map((project) => (
              <article className="project-card" key={project.title}>
                <SmartImage src={project.image} alt={`${project.title} logo`} className="logo" />
                <h4>{project.title}</h4>
                <p>{project.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="what-i-do">
          <h3>What I Do</h3>
          <div className="services-grid">
            {content.whatIDo.map((item) => (
              <article className="service" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h3>Contact</h3>
          <p className="contact-lead">{content.contact.intro}</p>
          <p>{content.contact.body}</p>
          <p>
            Email:{' '}
            <a className="text-link" href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </a>
            <br />
            LinkedIn:{' '}
            <a className="text-link" href={content.contact.linkedin}>
              {content.contact.linkedin}
            </a>
          </p>
          <a className="btn btn-solid" href={`mailto:${content.contact.email}`}>
            Start a Conversation
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
