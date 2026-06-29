import { motion } from 'framer-motion';

const quickFacts = [
  '120+ Fish Species',
  '100% Healthy Stock',
  'Best Imported Fish',
  'Always Here to Help',
];

const spotlightImages = [
  '/assets/fast/huy-phan-_LWxQJFgpyo-unsplash.jpg',
  '/assets/fast/huy-phan-nJrSZM_OaJg-unsplash.jpg',
  '/assets/fast/elist-nguyen-17zsNza3V6U-unsplash.jpg',
  '/assets/fast/nolan-krattinger-ADcXaqQ9vOM-unsplash.jpg',
];

function About() {
  return (
    <section id="about" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.55fr]">
        <div className="glass-card border-cyan-200/10 p-8 shadow-glow">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-xs uppercase tracking-[0.35em] text-cyan-200"
          >
            About AquaWorld
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 text-4xl font-semibold text-white md:text-5xl"
          >
            We bring aquatic luxury to your space with beautiful, healthy fish and exclusive designs.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            From custom aquarium builds to premium fish delivery and curated care guides, AquaWorld ensures every detail feels crafted, calm, and indulgent.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact} className="glass-card p-6">
                <p className="text-sm text-cyan-100">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Our Services</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Aquarium Setup', note: 'Custom design & installation' },
                { title: 'Maintenance', note: 'Complete care plans' },
                { title: 'Fish Care', note: 'Nutrition & health advice' },
                { title: 'Accessories', note: 'Premium lighting & decor' },
              ].map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-950/30 p-5">
                  <p className="text-base font-semibold text-white">{service.title}</p>
                  <p className="mt-3 text-sm text-slate-300">{service.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Spotlight Aquariums</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {spotlightImages.map((image) => (
                <img key={image} src={image} alt="Aquarium preview" className="h-32 w-full rounded-3xl object-cover" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
