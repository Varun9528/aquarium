import { motion } from 'framer-motion';

const fishes = [
  { name: 'Angelfish', detail: 'Starting Rs 149', asset: '/assets/photos/fish/Angelfish.jpg' },
  { name: 'Arowana Fish', detail: 'Starting Rs 799', asset: '/assets/photos/fish/Arowana fish.jpg' },
  { name: 'Betta Fish', detail: 'Starting Rs 199', asset: '/assets/photos/fish/betta fish.jpg' },
  { name: 'Blue Half-Moon', detail: 'Starting Rs 249', asset: '/assets/photos/fish/blue half-moon.jpg' },
  { name: 'Cobra Guppy', detail: 'Starting Rs 89', asset: '/assets/photos/fish/Cobra Guppy.jpg' },
  { name: 'Discus Fish', detail: 'Starting Rs 599', asset: '/assets/photos/fish/Discus Fish.jpg' },
  { name: 'Fancy Goldfish', detail: 'Starting Rs 129', asset: '/assets/photos/fish/Fancy Goldfish.jpg' },
  { name: 'Gold Fish', detail: 'Starting Rs 99', asset: '/assets/photos/fish/gold fish.jpg' },
  { name: 'Golden Molly', detail: 'Starting Rs 109', asset: '/assets/photos/fish/Golden Molly.jpg' },
  { name: 'Guppy Fish', detail: 'Starting Rs 79', asset: '/assets/photos/fish/guppy fish.png' },
  { name: 'Marble Angelfish', detail: 'Starting Rs 179', asset: '/assets/photos/fish/Marble Angelfish.jpg' },
  { name: 'Pearl Gourami', detail: 'Starting Rs 159', asset: '/assets/photos/fish/Pearl Gourami.jpg' },
  { name: 'Red Discus', detail: 'Starting Rs 649', asset: '/assets/photos/fish/Red Discus.jpg' },
  { name: 'Silver Arowana', detail: 'Starting Rs 899', asset: '/assets/photos/fish/silver arowana.jpg' },
];

function Collection() {
  return (
    <section id="fish" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Popular Fish Collection</p>
            <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Explore our handpicked collection of exotic and beautiful fish.</h2>
          </div>
          <a href="#gallery" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            View All Fish
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fishes.map((fish, index) => (
            <motion.div
              key={fish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-950/40">
                <img src={fish.asset} alt={fish.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-[2rem] bg-slate-950/80 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">{fish.name}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{fish.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
