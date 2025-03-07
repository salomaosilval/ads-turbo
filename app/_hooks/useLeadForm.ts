"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeadFormData, leadFormSchema } from "@/app/_lib/schemas";
import { useUTM } from "@/app/_context/utm-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useLeadForm = (onOpenChange: (open: boolean) => void) => {
  const { utmParams } = useUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  async function onSubmit(data: LeadFormData) {
    setIsSubmitting(true);
    try {
      const userData = {
        ...data,
        ...utmParams,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
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
};

export default useLeadForm;
