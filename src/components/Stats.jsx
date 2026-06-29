import { motion } from 'framer-motion';

const stats = [
  { label: 'Luxury aquariums installed', value: '128+' },
  { label: 'Years of marine design', value: '18' },
  { label: 'Premium aquatic species', value: '76' },
  { label: 'Curated wellness spaces', value: '42' },
];

function Stats() {
  return (
    <section id="stats" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="glass-card border-cyan-200/10 p-8 shadow-glow">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Luxury metrics</p>
            <h2 className="text-4xl font-semibold text-white md:text-5xl">A premium portfolio, measured in details.</h2>
            <p className="text-lg leading-8 text-slate-300">Every installation is tailored from glass to coral, with immersive motion and exceptional aquatic balance.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:w-[42%]">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6 }}
                className="glass-card p-6"
              >
                <p className="text-5xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
