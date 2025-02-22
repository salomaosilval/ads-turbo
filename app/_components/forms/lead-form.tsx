"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useUTM } from "@/app/_context/utm-context";
import { LeadFormData, leadFormSchema } from "@/app/_lib/schemas";
import { useState } from "react";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadForm = ({ open, onOpenChange }: LeadFormProps) => {
  const { utmParams } = useUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  async function onSubmit(data: LeadFormData) {
    setIsSubmitting(true);
    try {
      // Aqui você implementaria a chamada para sua API
      console.log({ ...data, ...utmParams });
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quero saber mais</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input
            placeholder="Nome completo"
            {...form.register("name")}
            error={form.formState.errors.name?.message}
          />
          <Input
            placeholder="Email"
            type="email"
            {...form.register("email")}
            error={form.formState.errors.email?.message}
          />
          <Input
            placeholder="Telefone"
            {...form.register("phone")}
            error={form.formState.errors.phone?.message}
          />
          <Input
            placeholder="Nome da empresa"
            {...form.register("business")}
            error={form.formState.errors.business?.message}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
