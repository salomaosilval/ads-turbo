"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormData, checkoutFormSchema } from "@/app/_lib/schemas";
import { useUTM } from "@/app/_context/utm-context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const useCheckoutForm = () => {
  const { utmParams } = useUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      form.setValue("name", userData.name);
      form.setValue("email", userData.email);
      form.setValue("phone", userData.phone);
    }
  }, [form]);

  async function onSubmit(data: CheckoutFormData) {
    setIsSubmitting(true);
    try {
      const checkoutData = {
        ...data,
        ...utmParams,
      };
      localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
      router.push("/obrigado");
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

export default useCheckoutForm;
