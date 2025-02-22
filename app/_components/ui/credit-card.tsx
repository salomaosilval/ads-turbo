"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/_lib/utils";

interface CreditCardProps {
  number?: string;
  name?: string;
  expiry?: string;
  cvc?: string;
  flipped?: boolean;
}

const CreditCard = ({
  number = "",
  name = "",
  expiry = "",
  cvc = "",
  flipped = false,
}: CreditCardProps) => {
  const cleanNumber = number.replace(/\s/g, "");

  return (
    <div className="relative w-[340px] h-[200px] perspective-1000">
      <motion.div
        className={cn(
          "absolute w-full h-full transition-transform duration-500 transform-style-3d",
          flipped ? "rotate-y-180" : ""
        )}
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-primary to-primary/60 rounded-xl p-6 backface-hidden">
          <div className="h-10 w-14 bg-muted/20 rounded" />
          <div className="mt-8 space-y-4">
            <p className="font-mono text-2xl tracking-wider text-white">
              {cleanNumber
                .padEnd(16, "•")
                .match(/.{1,4}/g)
                ?.join(" ")}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/80 uppercase">
                {name || "NOME DO TITULAR"}
              </p>
              <p className="text-sm text-white/80">{expiry || "MM/AA"}</p>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-gradient-to-br from-primary/80 to-primary/40 rounded-xl p-6 rotate-y-180 backface-hidden">
          <div className="w-full h-10 bg-black/30 my-4" />
          <div className="flex justify-end items-center">
            <div className="bg-white/80 h-8 w-16 rounded flex items-center justify-center">
              <p className="font-mono">{cvc || "•••"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreditCard;
