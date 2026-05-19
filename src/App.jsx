const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><rect width="100%" height="100%" fill="%23ece8df"/><text x="50%" y="50%" text-anchor="middle" font-family="Georgia,serif" font-size="34" fill="%236d6759">Image coming soon</text></svg>';

const content = {
  name: 'Jay Singleton',
  roleLine: 'Podcast creator, producer and story developer',
  intro:
    'I make story-led podcasts about difficult ideas and help people turn complex subjects into shows with tension, substance and point of view.',
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
    title: 'Wrong Side of History',
    description: [
      'The show is for people who ask “what were they thinking?” and want to know the answer.',
      'It’s about worldviews.',
      'I help you understand some of history’s ‘bad guys’ the way they understood themselves — to actually understand what they feared, what they valued, and why things might have made sense from their perspective.'
    ],
    listenLink: '#'
  },
  selectedWork: [
    {
      title: 'Secret Leaders',
      role: 'Video Podcast Producer',
      description:
        'Founder interview show with guest strategy, briefing, production, editorial shaping and video expansion.',
      image: '/assets/secret-leaders-logo.png',
      link: 'https://open.spotify.com/episode/1W6rz3cjiFZ7yMjcCeOUVj?si=fd2d10ea11aa4d91'
    },
    {
      title: 'Simon Says with Simon Squibb',
      role: 'Lead Producer',
      description:
        'Live call-in mentorship show across YouTube, podcast, social and in-person formats.',
      image: '/assets/simon-says-logo.png',
      link: 'https://open.spotify.com/episode/2Bl1kzXxgPJf6dn1FIimWF?si=cbca879d9d914588'
    },
    {
      title: 'We Are In Beta Podcast',
      role: 'Podcast Producer',
      description:
        'Education-sector podcast formats produced end-to-end for a large school leadership community.',
      image: '/assets/we-are-in-beta-logo.png',
      link: 'https://open.spotify.com/episode/3q2Rctep5ispDTtfBHZiaH?si=203720630eda44f1'
    },
    {
      title: 'PiXL Leadership Bookclub',
      role: 'Producer / Format Developer',
      description:
        'Bookclub format turning leadership books into structured conversations for school leaders.',
      image: '/assets/pixl-leadership-club-logo.png',
      link: 'https://open.spotify.com/episode/78JjXaLxxspyP505dqzUC0?si=8ac256388ad64f6d'
    },
    {
      title: 'PiXL Pearls',
      role: 'Producer',
      description: 'Concise education podcast episodes designed for quick professional insight.',
      image: '/assets/pixl-pearls-logo.png',
      link: 'https://open.spotify.com/episode/1Fgwgi7mpCdEk3SQsVI0jF?si=c1FQQBlQTH22bhSYDo1ZXA'
    },
    {
      title: 'The One You Feed',
      role: 'Format Developer / Producer',
      description:
        'Developed the Blinkist Shortcast adaptation and later produced with the original team.',
      image: '/assets/The-One-You-Feed-logo.jpg',
      link: 'https://podcasts.apple.com/gb/podcast/the-one-you-feed-personal-growth-emotional-resilience/id792555885?i=1000654108529'
    },
    {
      title: 'The Daily Stoic',
      role: 'Format Developer',
      description: 'Adapted the show into a concise Blinkist Shortcast format.',
      image: '/assets/daily-stoic-logo.png',
      link: 'https://open.spotify.com/episode/1qiTLtga4pLJIAGVTo6E9N?si=Ld3XQj82RuuPyrJDcJ85nw'
    },
    {
      title: 'Blinkist Shortcast',
      role: 'Supervising Producer',
      description:
        'Short-form editorial audio turning books and ideas into concise, listenable series.',
      image: '/assets/blinkist-logo.png',
      link: 'https://www.blinkist.com/episodes/816?utm_source=bk_ios&utm_medium=bk_referral&utm_campaign=contentItem%253Acover&utm_content=816&referral_token=d94a16f81ca5'
    },
    {
      title: 'Blinkist Guides',
      role: 'Supervising Producer',
      description:
        'Expert-led short-form audio guides shaped through scripting, recording and delivery.',
      image: '/assets/blinkist-logo.png',
      link: 'https://www.blinkist.com/guides/use-failure-at-work-for-growth-with-amy-edmondson'
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
    }
  ],
  contact: {
    intro: 'Have a show in mind?',
    body: 'I work best with people who care about substance, story and getting the details right. That might be a founder with a strong point of view, a thinker with years of ideas to organise, or an organisation that wants to make something more interesting than branded content. Send me a short note with what you’re thinking about, who it’s for, and where you are in the process.',
    email: 'jahwuan.singleton1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jaysingleton'
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
      <header className="masthead" id="top">
        <p className="masthead-name">{content.name}</p>
        <h1>{content.roleLine}</h1>
        <p className="lead">{content.intro}</p>
        <div className="button-row">
          <a className="btn btn-solid" href={content.heroButtons.listen}>
            Listen to Wrong Side of History
          </a>
          <a className="btn btn-outline" href={content.heroButtons.selectedWork}>
            Shows
          </a>
          <a className="btn btn-outline" href={content.heroButtons.contact}>
            Help me make a podcast
          </a>
        </div>
      </header>

      <main>
        <section className="section about-layout" id="about">
          <SmartImage src="/assets/headshot.jpg" alt="Portrait of Jay Singleton" className="headshot" />
          <div>
            <h2>About</h2>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section" id="wrong-side-of-history">
          <div className="wrong-side-overlay" aria-hidden="true" />
          <h2>{content.wrongSide.title}</h2>
          <div className="long-copy">
            {content.wrongSide.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a className="text-link" href={content.wrongSide.listenLink}>
            Listen now
          </a>
        </section>

        <section className="section" id="selected-work">
          <h2>Selected Work</h2>
          <div className="carousel" role="list">
            {content.selectedWork.map((project) => (
              <article className="project-card" key={project.title} role="listitem">
                <SmartImage src={project.image} alt={`${project.title} artwork`} className="logo" />
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                  Listen now
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="what-i-do">
          <h2>What I Do</h2>
          <div className="services-grid">
            {content.whatIDo.map((item) => (
              <article className="service" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Contact</h2>
          <p className="contact-lead">{content.contact.intro}</p>
          <p>{content.contact.body}</p>
          <p>
            Email:{' '}
            <a className="text-link" href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </a>
            <br />
            LinkedIn:{' '}
            <a className="text-link" href={content.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
