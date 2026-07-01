import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const asset = (name) => `/assets/${name.split('/').map(encodeURIComponent).join('/')}`;
const fastAsset = (name) => asset(`fast/${name.replace(/\.[^.]+$/, '.jpg').split('/').join('__')}`);

const images = {
  heroFish: fastAsset('photos/fish/blue half-moon.jpg'),
  betta: fastAsset('photos/fish/betta fish.jpg'),
  arowana: fastAsset('photos/fish/Arowana fish.jpg'),
  discus: fastAsset('photos/fish/Discus Fish.jpg'),
  goldfish: fastAsset('photos/fish/gold fish.jpg'),
  guppy: fastAsset('photos/fish/guppy fish.png'),
  angelfish: fastAsset('photos/fish/Angelfish.jpg'),
  molly: fastAsset('photos/fish/Golden Molly.jpg'),
  gourami: fastAsset('photos/fish/Pearl Gourami.jpg'),
  reef: fastAsset('huy-phan-_LWxQJFgpyo-unsplash.jpg'),
  planted: fastAsset('huy-phan-nJrSZM_OaJg-unsplash.jpg'),
  studio: fastAsset('photos/other/Aquarium Studio.jpg'),
  coral: fastAsset('photos/other/Premium Reef Look.jpg'),
  nano: fastAsset('photos/other/Nano Desk Tank.jpg'),
};

const simpleFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const socials = [
  ['WhatsApp', 'Chat for fish, tanks and quick support', 'WA', '#25d366', images.planted, '#book'],
  ['Instagram', 'Daily aquarium reels and luxury setups', 'IG', '#ff4fd8', images.reef, 'https://www.instagram.com/aarjavpetzone?igsh=YWpwcmw5cGh4YTE1'],
  ['Facebook', 'Updates, offers and customer stories', 'FB', '#4aa3ff', images.studio, 'https://www.facebook.com/share/1BfCnogp7X/'],
  ['YouTube', 'Aquascaping tours and care videos', 'YT', '#ff4242', images.coral, 'https://m.youtube.com/%40aarjavpetzone?fbclid=PAb21jcASvEPJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad0fE8NIjUiaZZTW80Qc_1zri-ssXQ4gw5R2v0DfmH75Oj1bsmEoA9TbvQdPA_aem_MyKp1gNtcSmeHO4swQ6tig'],
  ['Google Maps', 'Find our premium aquarium studio', 'GM', '#35e79a', images.nano, '#book'],
  ['Website', 'Explore collections, services and plans', 'WEB', '#36e8ff', images.reef, 'https://aquarium-lilac.vercel.app/'],
  ['Email', 'Send your aquarium requirement', 'MAIL', '#eaf8ff', images.studio, '#book'],
  ['Pinterest', 'Moodboards for planted aquariums', 'PIN', '#ff6b83', images.coral, '#book'],
  ['Telegram', 'Join alerts for new imported fish', 'TG', '#24c8ff', images.planted, '#book'],
];

const features = [
  ['Expert Team', 'Senior aquarists for every build', '01'],
  ['Premium Imported Fish', 'Healthy, quarantined and vibrant', '02'],
  ['Aquascaping', 'Natural layouts with cinematic depth', '03'],
  ['Lifetime Maintenance', 'Long-term care for stable tanks', '04'],
];

const services = [
  'Aquarium Setup',
  'Aquascaping',
  'Maintenance',
  'Water Testing',
  'Fish Treatment',
  'Aquarium Cleaning',
  'Custom Aquarium',
  'Aquarium Accessories',
  'Fish Food',
  'Plants',
  'Emergency Support',
  'AMC Plans',
];

const fish = [
  ['Half Moon Betta', images.heroFish],
  ['Arowana', images.arowana],
  ['Flowerhorn', images.discus],
  ['Discus', images.discus],
  ['Oscar', images.arowana],
  ['Koi', images.goldfish],
  ['Goldfish', images.goldfish],
  ['Guppy', images.guppy],
  ['Neon Tetra', images.betta],
  ['Angelfish', images.angelfish],
  ['Molly', images.molly],
  ['Gourami', images.gourami],
  ['Shrimp', images.nano],
];

const reasons = ['2500+ Happy Clients', '1000+ Installations', '100+ Imported Fish', 'Premium Quality', 'Healthy Fish', 'Fast Delivery', 'Lifetime Support'];

const reviews = [
  ['Rohan Mehta', 'AquaWorld made our living room feel like a luxury hotel lobby. The tank is silent, clean and stunning.', images.planted],
  ['Priya Shah', 'Their imported fish quality is excellent. Every setup detail felt thoughtful and premium.', images.heroFish],
  ['Arjun Nair', 'Fast service, beautiful aquascape and reliable monthly care. Best aquarium team we have worked with.', images.studio],
];

function AmbientLayer() {
  return (
    <div className="social-ambient" aria-hidden="true">
      <div className="surface-rays" />
      <div className="coral coral-left" />
      <div className="coral coral-right" />
      <div className="blur-orb orb-one" />
      <div className="blur-orb orb-two" />
    </div>
  );
}

function GoogleRating() {
  return (
    <motion.section className="rating-card premium-glass" variants={simpleFade} initial="hidden" whileInView="show">
      <div className="google-mark" aria-label="Google">
        <span>G</span>
      </div>
      <div>
        <p>Google Rating</p>
        <strong>4.9 Rating</strong>
        <span className="stars" aria-label="Five star rating">★★★★★</span>
      </div>
      <div className="rating-metrics">
        <span><b>2500+</b> Happy Customers</span>
        <span><b>1000+</b> Aquarium Installations</span>
        <span><b>10+</b> Years Experience</span>
      </div>
    </motion.section>
  );
}

const SocialCard = ({ item, index }) => {
  const [title, description, icon, color, image, url] = item;

  return (
    <motion.a
      className="social-link-card premium-glass"
      href={url}
      target={url.startsWith('http') ? '_blank' : undefined}
      rel={url.startsWith('http') ? 'noreferrer' : undefined}
      variants={simpleFade}
      initial="hidden"
      whileInView="show"
      style={{ '--accent': color, backgroundImage: `linear-gradient(120deg, rgba(2, 6, 23, .82), rgba(6, 28, 63, .58)), url("${image}")` }}
    >
      <span className="social-icon">{icon}</span>
      <span className="social-text">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="arrow">→</span>
    </motion.a>
  );
};

const SectionTitle = ({ kicker, title }) => (
  <motion.div className="bio-section-title" variants={simpleFade} initial="hidden" whileInView="show">
    <p>{kicker}</p>
    <h2>{title}</h2>
  </motion.div>
);

export default function SocialBioPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="social-bio-page">
      <AmbientLayer />

      <div className="bio-shell">
        <motion.header className="bio-hero premium-glass" variants={simpleFade} initial="hidden" animate="show">
          <div className="hero-waterline" />
          <div className="profile-wrap">
            <div className="brand-logo">
              <span>A</span>
            </div>
            <img className="hero-betta" src={images.heroFish} alt="Half Moon Betta Fish swimming beside AquaWorld profile" loading="eager" decoding="sync" />
          </div>

          <motion.div className="hero-copy-bio" variants={simpleFade}>
            <span className="active-pill"><i /> Active Now</span>
            <h1>AquaWorld</h1>
            <p className="subtitle">Premium Aquarium Studio</p>
            <p className="tagline">Bringing Nature Underwater</p>
          </motion.div>
        </motion.header>

        <GoogleRating />

        <section className="social-grid">
          {socials.map((item, index) => <SocialCard item={item} index={index} key={item[0]} />)}
        </section>

        <section className="feature-grid">
          {features.map(([title, text, icon]) => (
            <motion.article className="feature-card premium-glass" variants={simpleFade} initial="hidden" whileInView="show" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </section>

        <motion.section className="bio-panel premium-glass" variants={simpleFade} initial="hidden" whileInView="show">
          <SectionTitle kicker="Our Services" title="Everything your aquarium needs, handled by specialists." />
          <div className="service-cloud">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </motion.section>

        <section className="fish-gallery-wrap">
          <SectionTitle kicker="Fish Collection" title="Premium freshwater showpieces and community favorites." />
          <div className="fish-gallery">
            {fish.map(([name, image]) => (
              <article className="fish-tile" key={name}>
                <img src={image} alt={name} loading="lazy" decoding="async" />
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </section>

        <motion.section className="why-bio premium-glass" variants={simpleFade} initial="hidden" whileInView="show">
          <SectionTitle kicker="Why Choose Us" title="Designed for healthy fish and luxurious interiors." />
          <div className="reason-grid">
            {reasons.map((reason) => <span key={reason}>{reason}</span>)}
          </div>
        </motion.section>

        <section className="reviews-bio">
          <SectionTitle kicker="Customer Reviews" title="Loved by aquarium owners who want the full premium care." />
          <div className="review-grid">
            {reviews.map(([name, text, image]) => (
              <motion.article className="review-card premium-glass" variants={simpleFade} initial="hidden" whileInView="show" key={name}>
                <div>
                  <img src={image} alt={`${name} avatar`} loading="lazy" decoding="async" />
                  <span>★★★★★</span>
                </div>
                <p>"{text}"</p>
                <strong>{name}</strong>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section className="bottom-cta premium-glass" id="book" variants={simpleFade} initial="hidden" whileInView="show">
          <h2>Book Your Luxury Aquarium Experience</h2>
          <p>Free consultation for home, office, showroom and restaurant aquarium projects.</p>
          <div>
            <a className="cta-main" href="tel:+910000000000">Book Free Consultation</a>
            <a className="cta-soft" href="tel:+910000000000">Call Now</a>
            <a className="cta-soft" href="https://wa.me/910000000000">WhatsApp Now</a>
          </div>
        </motion.section>

        <footer className="bio-footer">AquaWorld © {year} · Premium Aquarium Studio</footer>
      </div>
    </main>
  );
}
