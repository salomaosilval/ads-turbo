import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormData, checkoutFormSchema } from "@/app/_lib/schemas";
import { useUTM } from "@/app/_context/utm-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useCheckoutForm = () => {
  const { utmParams } = useUTM();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  async function onSubmit(data: CheckoutFormData) {
    setIsSubmitting(true);
    try {
      console.log({ ...data, ...utmParams });
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
