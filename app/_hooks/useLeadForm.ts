import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadFormData, leadFormSchema } from "@/app/_lib/schemas";
import { useUTM } from "@/app/_context/utm-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function useLeadForm(onOpenChange: (open: boolean) => void) {
  const { utmParams } = useUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  async function onSubmit(data: LeadFormData) {
    setIsSubmitting(true);
    try {
      console.log({ ...data, ...utmParams });
      onOpenChange(false);
      router.push("/checkout");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
