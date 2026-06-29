import { motion } from 'framer-motion';

function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#041223]"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="h-16 w-16 rounded-full border border-cyan-200/40 bg-cyan-200/10 shadow-[0_0_60px_rgba(57,240,255,0.2)] backdrop-blur-xl">
          <div className="h-full w-full animate-pulse rounded-full bg-cyan-200/20" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">AquaLuxe</p>
          <p className="mt-3 text-2xl font-semibold text-white">Immersive aquatic design</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Loading;
