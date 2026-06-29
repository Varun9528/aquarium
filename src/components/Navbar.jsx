import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Fish', 'Gallery', 'Services', 'Care Guide', 'Contact'];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-6 py-4 backdrop-blur-xl bg-slate-950/20 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-cyan-200/20 bg-cyan-200/5 text-cyan-200 shadow-glow">
            <span className="text-lg font-semibold">A</span>
          </div>
          <div>
            <p className="font-semibold text-white">AquaWorld</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Underwater luxury</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="transition hover:text-cyan-200">
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-xl transition hover:bg-cyan-200">
          Book Now
        </a>
      </div>
    </motion.header>
  );
}

export default Navbar;
