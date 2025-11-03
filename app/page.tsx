"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center space-y-8"
    >
      <h1 className="text-5xl font-extrabold text-foreground">🧠 Exploring Linearity</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        From pure linear regression to deep nonlinearity — interactively visualized and explained.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
        <Image
          src="/assets/comparison_chart.png"
          alt="Comparison Chart"
          width={700}
          height={400}
          className="rounded-xl shadow-lg mx-auto"
        />
      </motion.div>
    </motion.section>
  );
}
