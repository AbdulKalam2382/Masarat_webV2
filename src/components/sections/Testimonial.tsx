"use client";

import { motion } from "framer-motion";

const quote = "They didn't just deliver a system — they delivered clarity, confidence, and infrastructure we trust.";
const words = quote.split(" ");

export default function Testimonial() {
  return (
    <section className="relative py-40 bg-[#070707] overflow-hidden">
      {/* Cinematic Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
          {words.map((word, i) => {
            const isHighlighted = word.toLowerCase().includes("clarity") || word.toLowerCase().includes("confidence");
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                viewport={{ once: true }}
                className={`text-4xl md:text-6xl font-light italic tracking-tight leading-[1.1] ${
                  isHighlighted ? "text-blue-500 font-bold not-italic" : "text-white/90"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-blue-600 mb-6" />
          <span className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold">
            Executive Leadership · Major Financial Institution
          </span>
        </motion.div>
      </div>
    </section>
  );
}
