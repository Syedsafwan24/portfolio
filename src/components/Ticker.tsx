"use client";

import { motion } from "framer-motion";

export function Ticker() {
  const words = [
    "FRONTEND DEV",
    "UI/UX DESIGNER",
    "VIDEO EDITOR",
    "DEVOPS",
    "AI-AUGMENTED",
    "AVAILABLE",
    "GULF & INDIA"
  ];
  
  // Create a long repeated string for the ticker
  const tickerText = Array(10).fill(words.join(" · ")).join(" · ") + " · ";

  return (
    <div className="w-full h-[40px] border-t border-b border-[#0A0A0A] bg-[#F1F1F1] overflow-hidden flex flex-col justify-center select-none">
      <motion.div
        className="whitespace-nowrap font-mono text-[12px] uppercase"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
        style={{ width: 'fit-content' }}
      >
        {tickerText}
      </motion.div>
    </div>
  );
}
