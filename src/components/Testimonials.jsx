import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'A masterpiece of luxury and calm — our space has never felt more alive.', name: 'Isabel Marino', role: 'Interior Director' },
  { quote: 'The aquarium design is artfully composed and the care team is flawless.', name: 'Armand Kline', role: 'Hospitality Partner' },
  { quote: 'Every detail feels considered and deeply premium.', name: 'Lina Cho', role: 'Wellness Consultant' },
];

function Testimonials() {
  return (
    <section id="testimonials" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Testimonials</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Praise from discerning advisors and partners.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-8 space-y-1 text-sm text-slate-400">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
