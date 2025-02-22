"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/app/_hooks/useCountdown";
import { useIsClient } from "@/app/_hooks/useIsClient";

const Countdown = () => {
  const isClient = useIsClient();
  const { minutes, seconds } = useCountdown(15);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full bg-primary z-50 py-2 md:py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-primary-foreground">
          <p className="text-sm md:text-base font-medium">
            OFERTA ESPECIAL EXPIRA EM:{" "}
            <span className="font-bold">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Countdown;
