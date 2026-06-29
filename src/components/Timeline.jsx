import { motion } from 'framer-motion';

const milestones = [
  { year: '2008', title: 'First luxury aquarium', detail: 'Built an award-winning coral sanctuary.' },
  { year: '2014', title: 'International portfolio', detail: 'Expanded design work into hospitality and private residences.' },
  { year: '2020', title: 'Wellness ocean designs', detail: 'Launched spa and corporate wellness aquarium programs.' },
  { year: '2025', title: 'AquaLuxe signature', detail: 'Introduced premium living installations with glass architecture.' },
];

function Timeline() {
  return (
    <section id="timeline" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Timeline</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">A legacy of ocean architecture and serene installations.</h2>
        </div>
        <div className="glass-card border-cyan-200/10 p-8 shadow-glow">
          <div className="relative border-l border-cyan-300/30 pl-8">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="relative mb-4 flex items-center gap-4">
                  <div className="absolute -left-6 h-4 w-4 rounded-full bg-cyan-300 shadow-glow" />
                  <span className="text-sm uppercase tracking-[0.35em] text-cyan-100">{item.year}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
