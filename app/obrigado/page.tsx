"use client";

import { Container } from "@/app/_components/ui/container";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIsClient } from "@/app/_hooks/useIsClient";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <main className="min-h-screen bg-background py-24 flex items-center">
      <Container className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Obrigado pela sua compra!
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Enviamos um email com suas instruções de acesso. Por favor,
            verifique sua caixa de entrada (e spam, se necessário).
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button asChild size="lg">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
};

export default ThankYouPage;
