import { motion } from 'framer-motion';

const categories = [
  { title: 'Tropical Reef', description: 'Colorful ecosystems with lush coral gardens.', asset: '/assets/fast/huy-phan-_LWxQJFgpyo-unsplash.jpg' },
  { title: 'Minimalist Planted Tank', description: 'Clean glass aquariums with dense green planting.', asset: '/assets/fast/huy-phan-nJrSZM_OaJg-unsplash.jpg' },
  { title: 'Betta Habitat', description: 'Calm planted scenes for vivid feature fish.', asset: '/assets/fast/elist-nguyen-17zsNza3V6U-unsplash.jpg' },
  { title: 'Ocean Sanctuary', description: 'Wide reef landscapes with colorful movement.', asset: '/assets/fast/nolan-krattinger-ADcXaqQ9vOM-unsplash.jpg' },
];

function Categories() {
  return (
    <section id="categories" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Fish Collections</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Categories designed to feel like curated ocean art.</h2>
          <p className="text-lg leading-8 text-slate-300">From luminous reefscapes to calm koi sanctuaries, each category is crafted for premium spaces.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:w-[58%]">
          {categories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-64">
                <img src={item.asset} alt={item.title} className="card-image" />
                <div className="image-mask" />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">{item.title}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
