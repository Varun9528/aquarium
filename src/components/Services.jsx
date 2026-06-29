import { motion } from 'framer-motion';

const services = [
  { title: 'Aquarium Setup', detail: 'Complete design and installation with premium materials.' },
  { title: 'Maintenance', detail: 'Regular cleaning, nutrition, and water health monitoring.' },
  { title: 'Fish Care', detail: 'Personalized support for exotic fish and delicate ecosystems.' },
  { title: 'Accessories', detail: 'High-end lighting, filters, and decor curated for luxury aquariums.' },
];

function Services() {
  return (
    <section id="services" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Our Services</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Complete aquarium care for premium spaces.</h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">From curated fish collections to on-site installation, every service is tailored for luxury and reliability.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-300/15 text-cyan-100">
                <span className="text-lg">•</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-300">{service.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
