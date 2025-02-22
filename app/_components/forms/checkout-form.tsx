"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useCheckoutForm } from "@/app/_hooks/useCheckoutForm";
import useFormMask from "@/app/_hooks/useFormMask";
import { CheckoutFormData } from "@/app/_lib/schemas";
import CreditCard from "../ui/credit-card";
import { useState } from "react";

export function CheckoutForm() {
  const { form, isSubmitting, onSubmit } = useCheckoutForm();
  const {
    handlePhoneChange,
    handleCPFChange,
    handleCardNumberChange,
    handleCardExpiryChange,
  } = useFormMask();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
        placeholder="CPF"
        maxLength={14}
        {...form.register("cpf")}
        onChange={(e) => handleCPFChange(e, form.setValue.bind(null, "cpf"))}
        error={form.formState.errors.cpf?.message}
      />

      <RadioGroup
        onValueChange={(value: CheckoutFormData["paymentMethod"]) =>
          form.setValue("paymentMethod", value)
        }
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="credit_card" id="credit_card" />
          <Label htmlFor="credit_card">Cartão de Crédito</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pix" id="pix" />
          <Label htmlFor="pix">Pix</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bank_slip" id="bank_slip" />
          <Label htmlFor="bank_slip">Boleto Bancário</Label>
        </div>
      </RadioGroup>

      {form.watch("paymentMethod") === "credit_card" && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <CreditCard
              number={form.watch("cardNumber") || ""}
              name={form.watch("name") || ""}
              expiry={form.watch("cardExpiry") || ""}
              cvc={form.watch("cardCVC") || ""}
              flipped={isFlipped}
            />
          </div>
          <div className="space-y-4">
            <Input
              placeholder="Número do Cartão"
              maxLength={19}
              {...form.register("cardNumber")}
              onChange={(e) =>
                handleCardNumberChange(
                  e,
                  form.setValue.bind(null, "cardNumber")
                )
              }
              error={form.formState.errors.cardNumber?.message}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Validade"
                maxLength={5}
                {...form.register("cardExpiry")}
                onChange={(e) =>
                  handleCardExpiryChange(
                    e,
                    form.setValue.bind(null, "cardExpiry")
                  )
                }
                error={form.formState.errors.cardExpiry?.message}
              />
              <Input
                placeholder="CVC"
                maxLength={4}
                {...form.register("cardCVC")}
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                error={form.formState.errors.cardCVC?.message}
              />
            </div>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Finalizar Compra
      </Button>
    </form>
  );
}
