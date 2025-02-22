"use client";

import { Container } from "@/app/_components/ui/container";
import { CheckoutForm } from "@/app/_components/forms/checkout-form";
import { UTMProvider } from "@/app/_context/utm-context";
import { motion } from "framer-motion";
import { Button } from "@/app/_components/ui/button";
import { useIsClient } from "@/app/_hooks/useIsClient";
import { UPSELL_PRODUCTS } from "@/app/_lib/constants";
import { useCart } from "@/app/_hooks/useCart";
import { Check } from "lucide-react";
import { cn } from "@/app/_lib/utils";

export default function CheckoutPage() {
  const isClient = useIsClient();
  const { toggleProduct, isProductSelected, getTotal, getProducts } = useCart();

  if (!isClient) return null;

  return (
    <UTMProvider>
      <main className="min-h-screen bg-background py-12 flex items-center">
        <Container className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl font-bold">Finalizar Compra</h1>
                  <p className="text-muted-foreground mt-2">
                    Preencha seus dados para completar a compra
                  </p>
                </div>
                <CheckoutForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                <div className="space-y-4">
                  {getProducts().map((product) => (
                    <div key={product.id} className="flex justify-between">
                      <span>{product.name}</span>
                      <span>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold border-t pt-4">
                    <span>Total</span>
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(getTotal())}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Ofertas Especiais</h2>
                <p className="text-muted-foreground">
                  Aproveite estes bônus exclusivos com desconto especial
                </p>
                <div className="space-y-4">
                  {UPSELL_PRODUCTS.map((product) => (
                    <div key={product.id} className="bg-card rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <div className="mt-2">
                            <span className="text-lg font-bold">
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(product.price)}
                            </span>
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(product.originalPrice)}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant={
                            isProductSelected(product.id)
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => toggleProduct(product.id)}
                          className={cn(
                            "transition-colors",
                            isProductSelected(product.id) &&
                              "bg-green-500 hover:bg-green-600"
                          )}
                        >
                          {isProductSelected(product.id) ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Adicionado
                            </>
                          ) : (
                            "Adicionar"
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </main>
    </UTMProvider>
  );
}
