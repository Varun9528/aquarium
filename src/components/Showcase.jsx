import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

function AquariumScene() {
  return (
    <mesh rotation={[0.1, 0.4, 0]} position={[0, -0.5, 0]}>
      <boxGeometry args={[2.4, 1.2, 0.9]} />
      <meshStandardMaterial color="#0d2742" transparent opacity={0.95} metalness={0.6} roughness={0.1} />
      <mesh position={[0, 0.3, 0]}> 
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#39f0ff" emissive="#39f0ff" emissiveIntensity={0.35} transparent opacity={0.9} />
      </mesh>
    </mesh>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="fade-up relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Interactive showcase</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">A premium aquarium showcase with depth and motion.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="glass-card overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-glow"
        >
          <div className="relative h-[500px] rounded-[1.75rem] bg-gradient-to-b from-slate-900 via-[#02122c] to-slate-950 p-4 shadow-inner">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[2, 5, 5]} intensity={1.2} color="#39f0ff" />
              <AquariumScene />
            </Canvas>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Showcase;
