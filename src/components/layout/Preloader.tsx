"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF9F6] text-[#1d1d1f]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="relative w-[600px] h-[400px] mx-auto mb-8"
          >
            <Image
              src="/images/Masarat Logo.png"
              alt="Masarat Technologies"
              fill
              sizes="600px"
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-10 right-10 flex items-end gap-2"
          >
            <span className="text-4xl font-light tabular-nums text-[#1d1d1f]">{counter}</span>
            <span className="text-sm pb-1 font-medium text-blue-500">%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
