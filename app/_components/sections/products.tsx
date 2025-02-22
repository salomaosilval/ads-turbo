"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { PRODUCTS } from "@/app/_lib/constants";
import LeadForm from "../forms/lead-form";
import useLeadModal from "@/app/_hooks/useLeadModal";
import Image from "next/image";
import useIsClient from "@/app/_hooks/useIsClient";

const Products = () => {
  const isClient = useIsClient();
  const { isOpen, onOpenChange, openModal } = useLeadModal();

  if (!isClient) return null;

  return (
    <section className="py-16 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8"
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg p-6 shadow-lg grid md:grid-cols-2 gap-6"
            >
              <div className="relative aspect-video rounded-md overflow-hidden">
                <Image
                  src="/products/course.jpg"
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <div className="space-y-2">
                  <p className="text-3xl font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou {product.installments}x de{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price / product.installments)}
                  </p>
                </div>
                <Button size="lg" className="w-full" onClick={openModal}>
                  Quero Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
      <LeadForm open={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
};

export default Products;
