import { motion } from 'framer-motion';

const images = [
  { label: 'Ocean glass', asset: '/assets/fast/nolan-krattinger-ADcXaqQ9vOM-unsplash.jpg' },
  { label: 'Coral light', asset: '/assets/fast/huy-phan-_LWxQJFgpyo-unsplash.jpg' },
  { label: 'Luxury tank', asset: '/assets/fast/huy-phan-nJrSZM_OaJg-unsplash.jpg' },
  { label: 'Wave detail', asset: '/assets/fast/elist-nguyen-17zsNza3V6U-unsplash.jpg' },
];

function Gallery() {
  return (
    <section id="gallery" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Gallery</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Gallery of refined ocean interiors and living installations.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map(({ label, asset }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: index * 0.1 }}
              className="glass-card relative overflow-hidden rounded-[2rem] shadow-glow"
            >
              <img
                src={asset}
                alt={label}
                className="card-image"
              />
              <div className="image-mask" />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-slate-950/80 p-4 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
