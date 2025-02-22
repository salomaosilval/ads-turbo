"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import LeadForm from "../forms/lead-form";
import { useLeadModal } from "@/app/_hooks/useLeadModal";
import { useIsClient } from "@/app/_hooks/useIsClient";

const Headline = () => {
  const { isOpen, onOpenChange, openModal } = useLeadModal();
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Descubra Como Aumentar Suas Vendas Com Apenas um Vídeo!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Aprenda as estratégias comprovadas que estão ajudando pequenos
            negócios a conquistar mais clientes usando anúncios no Facebook e
            Google
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg" onClick={openModal}>
              Quero Aumentar Minhas Vendas
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      <LeadForm open={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
};

export default Headline;
