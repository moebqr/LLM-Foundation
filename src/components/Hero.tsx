'use client';

import { motion } from 'framer-motion';
import Ripple from '../components/magicui/ripple';

export function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.p
          className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black py-2 mx-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            Introduction to LLMs
            </motion.p>
            <motion.p
            className="text-center text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            >
                A Foundational Introduction to Large Language Models!
            </motion.p>
        </motion.div>
      <Ripple />
    </div>
  );
}
