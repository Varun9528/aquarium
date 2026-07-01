import { useEffect, useState } from 'react';
import SocialBioPage from './SocialBioPage.jsx';

const asset = (name) => `/assets/${name.split('/').map(encodeURIComponent).join('/')}`;
const fastAsset = (name) => asset(`fast/${name.replace(/\.[^.]+$/, '.jpg').split('/').join('__')}`);

const aquariumImages = {
  betta: 'elist-nguyen-17zsNza3V6U-unsplash.jpg',
  plantedTank: 'huy-phan-nJrSZM_OaJg-unsplash.jpg',
  reef: 'huy-phan-_LWxQJFgpyo-unsplash.jpg',
  wideReef: 'nolan-krattinger-ADcXaqQ9vOM-unsplash.jpg',
};

const fishPhotos = [
  ['Angelfish', 'Starting $149', 'photos/fish/Angelfish.jpg', 'Elegant tall-fin freshwater species', 'Calm companions'],
  ['Arowana Fish', 'Starting $799', 'photos/fish/Arowana fish.jpg', 'Premium surface swimming show fish', 'Tank 450L+'],
  ['Betta Fish', 'Starting $199', 'photos/fish/betta fish.jpg', 'Peaceful solo display fish', 'Temperature 24-28 C'],
  ['Blue Half-Moon', 'Starting $249', 'photos/fish/blue half-moon.jpg', 'Vivid blue halfmoon betta variety', 'Solo tank'],
  ['Cobra Guppy', 'Starting $89', 'photos/fish/Cobra Guppy.jpg', 'Colorful active nano fish', 'Group of 6+'],
  ['Discus Fish', 'Starting $599', 'photos/fish/Discus Fish.jpg', 'Bright showpiece for planted tanks', 'Soft warm water'],
  ['Fancy Goldfish', 'Starting $129', 'photos/fish/Fancy Goldfish.jpg', 'Beginner friendly family favorite', 'Tank 75L+'],
  ['Gold Fish', 'Starting $99', 'photos/fish/gold fish.jpg', 'Hardy classic aquarium fish', 'Cool clean water'],
  ['Golden Molly', 'Starting $109', 'photos/fish/Golden Molly.jpg', 'Hardy livebearer for families', 'Planted corners'],
  ['Guppy Fish', 'Starting $79', 'photos/fish/guppy fish.png', 'Small colorful community fish', 'Easy care'],
  ['Marble Angelfish', 'Starting $179', 'photos/fish/Marble Angelfish.jpg', 'Patterned centerpiece fish', 'Tall planted tank'],
  ['Pearl Gourami', 'Starting $159', 'photos/fish/Pearl Gourami.jpg', 'Calm graceful community fish', 'Floating plants'],
  ['Red Discus', 'Starting $649', 'photos/fish/Red Discus.jpg', 'Premium warm-water display fish', 'Stable water'],
  ['Silver Arowana', 'Starting $899', 'photos/fish/silver arowana.jpg', 'Large premium predator fish', 'Tank 450L+'],
];

const fishCollection = fishPhotos;

const services = [
  ['Aquarium Setup', 'Custom aquarium design and setup'],
  ['Maintenance', 'Regular cleaning and water care'],
  ['Fish Care', 'Health checks and guidance'],
  ['Accessories', 'High quality essentials'],
];

const tips = ['Maintain Water Quality', 'Feed Fish Properly', 'Regular Water Change', 'Monitor Temperature', 'Provide Good Lighting'];

const gallery = ['photos/fish tank.jpg', 'photos/fish tank1.jpg', 'photos/fish tank2.jpg', 'photos/fish tank3.jpeg', 'photos/fish tank4.jpg', 'photos/fishtank6.jpg'];

const fishCatalog = fishPhotos.map(([name, , image, desc, care]) => [name, desc, care, image]);

const aquariumPackages = [
  [
    'Nano Desk Tank',
    '12-30 liters',
    'Betta, shrimp, moss, mini filter',
    'photos/other/Nano Desk Tank.jpg'
  ],
  [
    'Family Planted Tank',
    '75-180 liters',
    'Community fish, driftwood, live plants',
    'photos/other/Family Planted Tank.jpg'
  ],
  [
    'Premium Reef Look',
    '200+ liters',
    'Bright coral style, dramatic lighting',
    'photos/other/Premium Reef Look.jpg'
  ],
];

const videoCards = [
  ['Feeding Time Closeup', 'Colorful fish movement, bubble flow and healthy feeding behavior.', 'video/Feeding Time Closeup.mp4', aquariumImages.betta],
  ['Maintenance Routine', 'Water change, glass cleaning, plant trimming and weekly water testing.', 'video/Maintenance Routine.mp4', aquariumImages.reef],
];

const careGuide = [
  ['Cycle before adding fish', 'Run filter bacteria for 2-4 weeks and test ammonia, nitrite and nitrate.'],
  ['Keep stable temperature', 'Most tropical fish stay healthy around 24-28 C with a reliable heater.'],
  ['Do weekly water changes', 'Change 20-30% water weekly and remove waste from the substrate.'],
  ['Do not overfeed', 'Feed small portions fish can finish in 1-2 minutes.'],
  ['Quarantine new fish', 'Observe new arrivals before adding them to your main display tank.'],
  ['Match fish behavior', 'Mix peaceful fish with peaceful fish and avoid overcrowding.'],
];

function BubbleField() {
  return (
    <div className="bubbles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="AquaWorld home">
      <span className="logo-mark">A</span>
      <strong>AquaWorld</strong>
    </a>
  );
}

function Nav() {
  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Fish', '#fish'],
    ['Gallery', '#gallery'],
    ['Services', '#services'],
    ['Care Guide', '#care-guide'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="nav-shell">
      <Logo />
      <nav aria-label="Primary navigation">
        {links.map(([item, href]) => (
          <a key={item} href={href}>
            {item}
          </a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <a className="social-btn" href="/social">Connect With Us</a>
        <a className="book-btn" href="#contact">Book Now</a>
      </div>
    </header>
  );
}

function OptimizedImage({ src, alt, className, loading = 'lazy' }) {
  return (
    <img
      src={fastAsset(src)}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
}

function VideoCard({ title, text, video, poster }) {
  return (
    <article className="video-card">
      <video
        src={asset(video)}
        poster={fastAsset(poster)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="video-card-media"
      />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function HeroPanel() {
  return (
    <section className="hero-panel" id="home">
      <Nav />
      <BubbleField />
      <video
        className="hero-video"
        src={asset('video/Feeding Time Closeup.mp4')}
        poster={fastAsset(aquariumImages.wideReef)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="AquaWorld underwater aquarium video"
      />
      <div className="hero-copy">
        <p>Discover The Beauty Of</p>
        <h1>Underwater World</h1>
        <span>Bring marine life to your home with our stunning collection of aquariums, exotic fish and premium accessories.</span>
        <div className="hero-actions">
          <a href="#fish">Explore Fish</a>
          <a href="#services">Our Services</a>
        </div>
      </div>
      <a className="watch-btn" href="#videos" aria-label="Watch video previews">
        <span />
        Watch Video
      </a>
    </section>
  );
}

function TrustStrip() {
  const items = [
    ['Premium Quality', 'Healthy & Active Fish'],
    ['Expert Guidance', '24/7 Support'],
    ['Safe Delivery', 'Across India'],
    ['Secure Payment', 'Multiple Options'],
  ];

  return (
    <section className="trust-strip" aria-label="Store benefits">
      {items.map(([title, subtitle], index) => (
        <article key={title}>
          <span>{['+', 'i', '>', '#'][index]}</span>
          <div>
            <strong>{title}</strong>
            <small>{subtitle}</small>
          </div>
        </article>
      ))}
    </section>
  );
}

function FishCollection() {
  return (
    <section className="collection-card">
      <div className="section-title">
        <div>
          <h2>Popular Fish Collection</h2>
          <p>Explore our handpicked collection of exotic and beautiful fish</p>
        </div>
        <a href="#fish">View All Fish</a>
      </div>
      <div className="fish-grid">
        {fishCollection.map(([name, price, image]) => (
          <article key={name} className="fish-card">
            <OptimizedImage src={image} alt={name} />
            <strong>{name}</strong>
            <small>{price}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    ['Wide Variety', '150+ Fish Species'],
    ['Healthy Fish', '100% Healthy & Active'],
    ['Premium Quality', 'Best Imported Fish'],
    ['Expert Support', 'Always Here To Help'],
  ];

  return (
    <section className="why-card">
      <div>
        <h2>Why Choose AquaWorld?</h2>
        <div className="why-grid">
          {items.map(([title, subtitle]) => (
            <article key={title}>
              <span>~</span>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </article>
          ))}
        </div>
      </div>
      <OptimizedImage src={aquariumImages.betta} alt="Colorful betta fish in planted aquarium" />
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="side-panel">
      <section className="about-box">
        <div>
          <h2>About AquaWorld</h2>
          <p>We are passionate about bringing the beauty of underwater worlds to your home. Our expert team ensures you get the best fish and aquarium care.</p>
          <ul>
            <li>10+ Years Experience</li>
            <li>5000+ Happy Customers</li>
            <li>100+ Fish Species</li>
            <li>Best Quality Guarantee</li>
          </ul>
          <a href="#about">Learn More</a>
        </div>
        <OptimizedImage src="photos/aqua wrold about.jpg" alt="Colorful coral aquarium" />
      </section>

      <section className="services-box">
        <h2>Our Services</h2>
        <div>
          {services.map(([title, text]) => (
            <article key={title}>
              <span />
              <strong>{title}</strong>
              <small>{text}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-box">
        <h2>Beautiful Aquariums</h2>
        <div>
          {gallery.map((image) => (
            <OptimizedImage key={image} src={image} alt="Aquarium gallery" />
          ))}
        </div>
      </section>

      <section className="review-box">
        <h2>Customer Reviews</h2>
        <div>
          <OptimizedImage src={aquariumImages.plantedTank} alt="Customer planted aquarium" />
          <p>"Amazing quality fish and excellent service. My aquarium has never looked better!"</p>
          <strong>Rohan Kumar</strong>
          <span>★★★★★</span>
        </div>
      </section>

      <section className="tips-box">
        <h2>Fish Care Tips</h2>
        <div>
          <ul>
            {tips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
          <OptimizedImage src={aquariumImages.betta} alt="Care guide aquarium fish" />
        </div>
      </section>

      <section className="cta-box">
        <OptimizedImage src={aquariumImages.wideReef} alt="" />
        <h2>Ready to Bring Life to Your Space?</h2>
        <p>Explore our collection and create your perfect underwater world today.</p>
        <a href="mailto:hello@aquaworld.example">Shop Now</a>
      </section>
    </aside>
  );
}

function ExpandedWebsite() {
  return (
    <div className="expanded-site">
      <section className="wide-section about-wide" id="about">
        <div className="wide-copy">
          <p className="eyebrow">Complete Aquarium Studio</p>
          <h2>Freshwater tanks, reef-style displays, fish care and home installation in one place.</h2>
          <p>
            AquaWorld designs aquariums that look beautiful and stay healthy. We help with tank size, filtration,
            lighting, fish compatibility, aquascaping, feeding schedules and monthly maintenance.
          </p>
          <div className="metric-row">
            <strong>150+<span>Fish types</span></strong>
            <strong>42K<span>Liters maintained</span></strong>
            <strong>24/7<span>Care support</span></strong>
          </div>
        </div>
        <OptimizedImage src={aquariumImages.plantedTank} alt="Large planted aquarium with aquatic plants" />
      </section>

      <section className="wide-section" id="fish">
        <div className="section-heading">
          <p className="eyebrow">Fish Catalog</p>
          <h2>Popular aquarium fish for every tank size</h2>
        </div>
        <div className="catalog-grid">
          {fishCatalog.map(([name, desc, care, image]) => (
            <article key={name}>
              <OptimizedImage src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <span>{care}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-section packages" id="services">
        <div className="section-heading">
          <p className="eyebrow">Aquarium Services</p>
          <h2>Choose a setup and we prepare the complete underwater scene</h2>
        </div>
        <div className="package-grid">
          {aquariumPackages.map(([name, size, detail, image]) => (
            <article key={name}>
              <OptimizedImage src={image} alt={name} />
              <div>
                <h3>{name}</h3>
                <strong>{size}</strong>
                <p>{detail}</p>
                <a href="#contact">Book Setup</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-section videos-section" id="videos">
        <div className="section-heading">
          <p className="eyebrow">Aquarium Videos</p>
          <h2>Video preview panels for tours, feeding and maintenance</h2>
        </div>
        <div className="video-grid">
          {videoCards.map(([title, text, video, poster]) => (
            <VideoCard key={title} title={title} text={text} video={video} poster={poster} />
          ))}
        </div>
      </section>

      <section className="wide-section gallery-wide" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Photo Gallery</p>
          <h2>All aquarium images used across the website</h2>
        </div>
        <div className="photo-wall">
          {[...gallery, ...Object.values(aquariumImages), ...fishPhotos.map(([, , image]) => image)].map((image) => (
            <OptimizedImage key={image} src={image} alt="Aquarium and fish gallery" />
          ))}
        </div>
      </section>

      <section className="wide-section care-wide" id="care-guide">
        <div className="section-heading">
          <p className="eyebrow">Care Guide</p>
          <h2>Simple rules for a clean, healthy aquarium</h2>
        </div>
        <div className="care-grid">
          {careGuide.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-section contact-wide" id="contact">
        <OptimizedImage src={aquariumImages.reef} alt="" />
        <div>
          <p className="eyebrow">Contact AquaWorld</p>
          <h2>Tell us your tank size and we will suggest fish, plants, lights and setup plan.</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Name" placeholder="Your name" />
            <input aria-label="Phone" placeholder="Phone number" />
            <select aria-label="Aquarium type" defaultValue="">
              <option value="" disabled>Aquarium type</option>
              <option>Freshwater planted tank</option>
              <option>Betta nano tank</option>
              <option>Large premium display</option>
              <option>Monthly maintenance</option>
            </select>
            <textarea aria-label="Message" placeholder="Tell us what aquarium you want" />
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
}

function DeferredExpandedWebsite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const show = () => setIsVisible(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(show, { timeout: 900 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(show, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return isVisible ? <ExpandedWebsite /> : null;
}

function App() {
  if (window.location.pathname.toLowerCase().startsWith('/social')) {
    return <SocialBioPage />;
  }

  return (
    <main className="aquaworld-page">
      <div className="page-frame">
        <div className="left-column">
          <HeroPanel />
          <TrustStrip />
          <FishCollection />
          <WhyChoose />
        </div>
        <Sidebar />
      </div>
      <DeferredExpandedWebsite />
    </main>
  );
}

export default App;
