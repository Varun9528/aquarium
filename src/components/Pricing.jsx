import { motion } from 'framer-motion';

const tiers = [
  { name: 'Essence', price: '$14,900', features: ['Signature aquarium design', 'Standard coral palette', 'Installation support'] },
  { name: 'Prestige', price: '$29,500', features: ['Custom glass architecture', 'Advanced lighting', 'Quarterly wellness check'] },
  { name: 'Eternity', price: '$54,000', features: ['Fully bespoke ecosystem', 'Elite species curation', 'Dedicated aquarium concierge'] },
];

function Pricing() {
  return (
    <section id="pricing" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Pricing</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Investment packages for exceptional ocean spaces.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="glass-card p-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">{tier.name}</p>
              <p className="mt-4 text-5xl font-semibold text-white">{tier.price}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                Request proposal
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
