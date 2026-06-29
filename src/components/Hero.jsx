import { motion } from 'framer-motion';

const heroStats = [
  { label: 'Premium Quality', detail: 'Healthy & Active Fish' },
  { label: 'Expert Guidance', detail: '24/7 Support' },
  { label: 'Safe Delivery', detail: 'Across India' },
  { label: 'Secure Payment', detail: 'Multiple Options' },
];

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-28 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-ocean/95 bg-[radial-gradient(circle_at_top,rgba(57,240,255,0.12),transparent_32%),radial-gradient(circle_at_bottom,rgba(15,63,102,0.22),transparent_28%)]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble absolute left-10 top-24 h-24 w-24 rounded-full border border-cyan-200/20 bg-cyan-200/5 blur-2xl" />
        <div className="bubble absolute right-14 top-1/3 h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-2xl" />
        <div className="bubble absolute left-1/3 top-40 h-16 w-16 rounded-full border border-cyan-200/20 bg-cyan-200/10 blur-sm" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="z-10 max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="inline-flex items-center rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100"
          >
            Discover The Beauty Of
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className="max-w-3xl text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Underwater World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
            className="max-w-xl text-lg leading-8 text-slate-300"
          >
            Bring nature into your life with our stunning collection of aquariums, exotic fish, and premium accessories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#collection" className="magnetic inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-semibold text-slate-950 shadow-xl transition hover:bg-cyan-200">
              Explore Fish
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/50 px-8 py-4 text-sm text-white transition hover:bg-white/10">
              Our Services
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:w-[90%]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="feature-card">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">{stat.label}</p>
                <p className="mt-2 text-base font-semibold text-white">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img src="/assets/fast/nolan-krattinger-ADcXaqQ9vOM-unsplash.jpg" alt="AquaWorld hero" className="hero-image" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <button className="absolute left-6 bottom-8 inline-flex items-center gap-3 rounded-full bg-slate-950/70 px-5 py-3 text-sm text-white shadow-lg backdrop-blur-xl transition hover:bg-slate-950/90">
              <span className="inline-flex h-3.5 w-3.5 rounded-full bg-cyan-300 animate-pulse" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
