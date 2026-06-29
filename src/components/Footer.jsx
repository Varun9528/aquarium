function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 text-slate-400 md:px-10 lg:px-16">
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">© 2026 AquaLuxe. Crafted for sophisticated aquatic living.</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
