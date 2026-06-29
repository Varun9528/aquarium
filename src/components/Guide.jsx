import { motion } from 'framer-motion';

const steps = [
  { title: 'Prepare the ecosystem', description: 'We condition water, curate species, and plan coral composition.' },
  { title: 'Install with care', description: 'White-glove placement, glass calibration, and lighting tuning.' },
  { title: 'Monitor every detail', description: 'Ongoing water quality, nutrition, and environment optimization.' },
];

function Guide() {
  return (
    <section id="guide" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Fish care guide</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">The ritual of premium aquatic care.</h2>
          <p className="text-lg leading-8 text-slate-300">Every aquarium is supported by expert stewardship to preserve health, clarity, and luminous movement.</p>
        </div>
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="glass-card p-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Step {index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guide;
