"use client";
import { myInfo } from "@/data/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero mt-[68px]">
      <div className="container mx-auto flex flex-col gap-4 px-5 py-10 md:py-20">
        <motion.span
          className="block text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I am
        </motion.span>
        <motion.h1
          className="text-3xl font-bold uppercase md:text-5xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {myInfo.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="inline-block bg-red-400 px-4 py-1.5 text-xl font-semibold md:text-2xl">
            {myInfo.title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
