"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useLeadForm from "@/app/_hooks/useLeadForm";
import useFormMask from "@/app/_hooks/useFormMask";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadForm = ({ open, onOpenChange }: LeadFormProps) => {
  const { form, isSubmitting, onSubmit } = useLeadForm(onOpenChange);
  const { handlePhoneChange } = useFormMask();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quero saber mais</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Nome completo"
            maxLength={100}
            {...form.register("name")}
            error={form.formState.errors.name?.message}
          />
          <Input
            placeholder="Email"
            type="email"
            maxLength={100}
            {...form.register("email")}
            error={form.formState.errors.email?.message}
          />
          <Input
            placeholder="Telefone"
            maxLength={15}
            {...form.register("phone")}
            onChange={(e) =>
              handlePhoneChange(e, form.setValue.bind(null, "phone"))
            }
            error={form.formState.errors.phone?.message}
          />
          <Input
            placeholder="Nome da empresa"
            maxLength={100}
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
