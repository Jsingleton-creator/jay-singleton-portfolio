const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700"><rect width="100%" height="100%" fill="%23d9c894"/></svg>';

const content = {
  name: 'Jay Singleton',
  roleLine: 'Podcast creator, producer and story developer',
  positioning:
    'I make story-led podcasts about difficult ideas and help people turn complex subjects into shows with tension, substance and point of view.',
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
    link: 'https://open.spotify.com/show/4c1ASKSU8cXIErnNWpN13H?si=8C5wL4B2Q1Sr5y53XREOnQ'
  },
  selectedWork: [
    {
      title: 'Wrong Side of History',
      role: 'Creator, host and producer',
      description:
        'Research-led history podcast about understanding history’s “bad guys” the way they understood themselves.',
      image: '/assets/wrong-side-of-history-artwork.png',
      link: 'https://open.spotify.com/show/4c1ASKSU8cXIErnNWpN13H?si=8C5wL4B2Q1Sr5y53XREOnQ'
    },
    {
      title: 'Secret Leaders',
      role: 'Video Podcast Producer',
      description:
        'Guest strategy, production, briefing, recording, editorial shaping and video expansion for a long-running founder interview show with millions of downloads.',
      image: '/assets/secret-leaders-logo.png',
      link: 'https://open.spotify.com/show/2IwIk50zNhVsgK0rQRSik7?si=7e8a2d782abb49e3',
      bestExample: 'https://open.spotify.com/episode/1W6rz3cjiFZ7yMjcCeOUVj?si=fd2d10ea11aa4d91'
    },
    {
      title: 'Simon Says with Simon Squibb',
      role: 'Lead Producer',
      description:
        'Live call-in mentorship show across YouTube, TikTok Live, Instagram Live, Spotify and in-person audiences; helped generate 343K+ cross-platform views.',
      image: '/assets/simon-says-logo.png',
      link: 'https://open.spotify.com/show/1OTQYBmYN3CcFtCQnuNuox?si=b7b7fdd2159b4f76',
      bestExample: 'https://open.spotify.com/episode/2Bl1kzXxgPJf6dn1FIimWF?si=cbca879d9d914588'
    },
    {
      title: 'We Are In Beta Podcast',
      role: 'Podcast Producer',
      description:
        'Developed education-sector podcast formats and produced episodes end-to-end, supporting a 17K+ member community, 30K mailing list and 100K+ listens.',
      image: '/assets/we-are-in-beta-logo.png',
      link: 'https://open.spotify.com/show/3H06QHslOdYeGD85SwEMYS?si=ed85fcfb8f7d4a04',
      bestExample: 'https://open.spotify.com/episode/3q2Rctep5ispDTtfBHZiaH?si=203720630eda44f1'
    },
    {
      title: 'PiXL Leadership Bookclub',
      role: 'Producer / Format Developer',
      description:
        'Developed and produced an education-focused bookclub podcast, turning leadership books and ideas into structured conversations for school leaders.',
      image: '/assets/pixl-leadership-club-logo.png',
      link: 'https://open.spotify.com/show/48ZHifKVPkeiEH7ccjFdOJ?si=0122c4ec0c794e63',
      bestExample: 'https://open.spotify.com/episode/78JjXaLxxspyP505dqzUC0?si=8ac256388ad64f6d'
    },
    {
      title: 'PiXL Pearls',
      role: 'Producer',
      description:
        'Produced a short-form education podcast for school leaders and teachers, shaping useful ideas into concise, practical episodes.',
      image: '/assets/pixl-pearls-logo.png',
      link: 'https://open.spotify.com/show/45Nqrj9VkMfRyLJkgf3iJW?si=7a4367023f3241b5',
      bestExample: 'https://open.spotify.com/episode/1Fgwgi7mpCdEk3SQsVI0jF?si=c1FQQBlQTH22bhSYDo1ZXA'
    },
    {
      title: 'The One You Feed',
      role: 'Format Developer / Producer',
      description:
        'Developed the Blinkist Shortcast adaptation of the show and later produced an episode with the original team.',
      image: '/assets/The-One-You-Feed-logo.jpg',
      link: 'https://open.spotify.com/show/4byxEuJGV8xnxlgoqHQxxs?si=631cc10f531f4613',
      bestExample:
        'https://podcasts.apple.com/gb/podcast/the-one-you-feed-personal-growth-emotional-resilience/id792555885?i=1000654108529'
    },
    {
      title: 'The Daily Stoic',
      role: 'Format Developer',
      description:
        'Developed the Blinkist Shortcast adaptation of the show, translating the original format into concise, structured short-form audio.',
      image: null,
      link: 'https://open.spotify.com/show/7fY99FB3bNyn7nEdXCoBeB?si=a07234798fe141ce',
      bestExample: 'https://open.spotify.com/episode/1qiTLtga4pLJIAGVTo6E9N?si=Ld3XQj82RuuPyrJDcJ85nw'
    },
    {
      title: 'Blinkist Shortcast',
      role: 'Supervising Producer',
      description: 'Short-form editorial audio, turning books and ideas into concise, listenable scripts and series.',
      image: '/assets/blinkist-logo.png',
      link: 'https://www.blinkist.com/episodes/816?utm_source=bk_ios&utm_medium=bk_referral&utm_campaign=contentItem%253Acover&utm_content=816&referral_token=d94a16f81ca5'
    },
    {
      title: 'Blinkist Guides',
      role: 'Supervising Producer',
      description: 'Expert-led short-form audio guides, managing writers, hosts, scripts, recordings and delivery.',
      image: '/assets/blinkist-logo.png',
      link: 'https://www.blinkist.com/guides/use-failure-at-work-for-growth-with-amy-edmondson'
    }
  ],
  whatIDo: [
    { title: 'Show Strategy', text: 'Clarify the premise, audience, format, tone, structure and reason to exist.' },
    {
      title: 'Development Producer',
      text: 'Shape episode ideas, recurring formats, guest angles, series arcs and the creative spine of the show.'
    },
    {
      title: 'Podcast Launch Partner',
      text: 'Take a show from rough idea to launch-ready: concept, trailer, first episodes and publishing rhythm.'
    },
    {
      title: 'Story Development',
      text: 'Turn complex research, interviews and ideas into episodes with movement, stakes and a reason to keep listening.'
    },
    {
      title: 'Shows for Thinkers, Founders and Organisations',
      text: 'Build podcasts with substance, voice and point of view — not forgettable interview noise.'
    }
  ],
  contact: {
    email: 'jahwuan.singleton1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jay-singleton-550b7143/'
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

const ShowArt = ({ show }) => {
  if (show.image) return <SmartImage src={show.image} alt={`${show.title} artwork`} className="show-image" />;
  return (
    <div className="show-placeholder" aria-label={`${show.title} artwork placeholder`}>
      <p className="show-placeholder-label">Audio / Podcast / Production</p>
      <h4>{show.title}</h4>
    </div>
  );
};

export default function App() {
  return (
    <div className="page">
      <header className="masthead">
        <p className="name">{content.name}</p>
        <p className="role">{content.roleLine}</p>
        <p className="positioning">{content.positioning}</p>
      </header>

      <SmartImage src="/assets/wrong-side-of-history-banner.png" alt="Wrong Side of History banner" className="hero-strip" />

      <main>
        <section className="section about-layout" id="about">
          <SmartImage src="/assets/headshot.jpg" alt="Portrait of Jay Singleton" className="headshot" />
          <div>
            <div className="section-divider" />
            <h3>About</h3>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section flagship" id="wrong-side-of-history">
          <p className="panel-label">Flagship Project</p>
          <h3>Wrong Side of History</h3>
          <div className="long-copy">{content.wrongSide.description.map((p) => <p key={p}>{p}</p>)}</div>
          <a className="text-link" href={content.wrongSide.link} target="_blank" rel="noreferrer">
            Listen on Spotify →
          </a>
        </section>

        <section className="section" id="selected-work">
          <div className="section-divider" />
          <h3>Selected Work</h3>
          <div className="show-rail" role="list" aria-label="Selected Work">
            {content.selectedWork.map((show) => (
              <article className="show-card" role="listitem" key={show.title}>
                <ShowArt show={show} />
                <h4>{show.title}</h4>
                <p className="show-role">{show.role}</p>
                <p>{show.description}</p>
                <div className="show-links">
                  {show.link && (
                    <a className="text-link" href={show.link} target="_blank" rel="noreferrer">
                      Main link
                    </a>
                  )}
                  {show.bestExample && (
                    <a className="text-link" href={show.bestExample} target="_blank" rel="noreferrer">
                      Best example
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="what-i-do">
          <div className="section-divider" />
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
          <div className="section-divider" />
          <h3>Contact</h3>
          <p>
            Email: <a className="text-link" href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            <br />
            LinkedIn:{' '}
            <a className="text-link" href={content.contact.linkedin} target="_blank" rel="noreferrer">
              {content.contact.linkedin}
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
