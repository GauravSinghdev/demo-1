"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section
      ref={ref}
      className="relative h-[600px] lg:h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} />
      <Image
        src="https://cdn.pixabay.com/photo/2022/12/01/17/52/sea-7629517_1280.jpg"
        alt="Beautiful tropical destination"
        fill
        className="object-cover"
        priority
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-bold"
        >
          Discover Your <span className="hidden sm:inline">Next</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block bg-gradient-to-r from-blue-300 to-peach-300 text-transparent bg-clip-text [text-shadow:2px_0px_rgba(0,0,0,0.5)]">
            Dream Destination
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl mb-8 text-white"
        >
          Create unforgettable memories with our carefully curated holiday
          packages
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold shadow-xl"
            >
              Explore Packages
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm shadow-xl"
            >
              Plan Custom Trip
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
