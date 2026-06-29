import { motion } from 'framer-motion';

const types = [
  { title: 'Luxury Terrace', description: 'Outdoor ocean-view installations with sculptural glass.' },
  { title: 'Executive Suite', description: 'Indoor living room centerpieces with ambient lighting.' },
  { title: 'Wellness Cove', description: 'Spa-inspired ecosystems for calm and clarity.' },
];

function Types() {
  return (
    <section id="types" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="glass-card border-cyan-200/10 p-8 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Aquarium types</p>
            <h2 className="text-4xl font-semibold text-white md:text-5xl">Every space deserves a distinct ocean identity.</h2>
            <p className="text-lg leading-8 text-slate-300">Discover tailored aquarium typologies for residences, hospitality, and corporate sanctuaries.</p>
          </div>
          <div className="grid gap-6">
            {types.map((item) => (
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 120 }} className="glass-card p-6" key={item.title}>
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Types;
