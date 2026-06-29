import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: 'How long does installation take?', answer: 'Typically 6-10 weeks depending on scale and custom fabrication needs.' },
  { question: 'Do you provide maintenance?', answer: 'Yes, we offer white-glove care plans with monitoring, cleaning, and water checks.' },
  { question: 'Can the aquarium be integrated with lighting systems?', answer: 'Absolutely — every installation includes intelligent ambient and accent lighting.' },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="fade-up mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">FAQ</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Questions about our premium aquarium service.</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <motion.div key={item.question} className="glass-card p-6">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold text-white">{item.question}</p>
                  <span className="text-cyan-200">{openIndex === index ? '−' : '+'}</span>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden text-slate-300"
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
