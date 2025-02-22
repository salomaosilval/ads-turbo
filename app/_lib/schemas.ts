import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone inválido"),
  business: z
    .string()
    .min(3, "Nome da empresa deve ter pelo menos 3 caracteres"),
});

export const checkoutFormSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone inválido"),
  paymentMethod: z.enum(["credit_card", "pix", "bank_slip"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCVC: z.string().optional(),
  cpf: z.string().min(11, "CPF inválido"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
