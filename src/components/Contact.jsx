import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="glass-card border-cyan-200/10 p-8 shadow-glow">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Contact</p>
            <h2 className="text-4xl font-semibold text-white md:text-5xl">Begin your bespoke aquarium journey.</h2>
            <p className="text-lg leading-8 text-slate-300">Reach out for a custom consultation, 3D concept, or on-site design assessment.</p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {['Name', 'Email', 'Project details'].map((label) => (
              <label key={label} className="block text-sm text-slate-300">
                <span className="mb-2 block text-white">{label}</span>
                {label === 'Project details' ? (
                  <textarea rows="5" className="w-full rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-white outline-none placeholder:text-slate-500" placeholder="Share your vision" />
                ) : (
                  <input className="w-full rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-white outline-none placeholder:text-slate-500" placeholder={`Enter your ${label.toLowerCase()}`} />
                )}
              </label>
            ))}
            <button type="submit" className="magnetic inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              Send inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
