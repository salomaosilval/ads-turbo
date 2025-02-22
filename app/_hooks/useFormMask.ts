import { ChangeEvent } from "react";

const useFormMask = () => {
  const maskPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").substring(0, 11);

    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }

    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const maskCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "").substring(0, 11);
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const maskCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "").substring(0, 16);
    return numbers
      .replace(/(\d{4})(\d{4})?(\d{4})?(\d{4})?/, "$1 $2 $3 $4")
      .trim();
  };

  const maskCardExpiry = (value: string) => {
    const numbers = value.replace(/\D/g, "").substring(0, 4);
    return numbers.replace(/(\d{2})(\d{2})/, "$1/$2");
  };

  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const masked = maskPhone(e.target.value);
    e.target.value = masked;
    onChange(masked);
  };

  const handleCPFChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const masked = maskCPF(e.target.value);
    e.target.value = masked;
    onChange(masked);
  };

  const handleCardNumberChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const masked = maskCardNumber(e.target.value);
    e.target.value = masked;
    onChange(masked);
  };

  const handleCardExpiryChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const masked = maskCardExpiry(e.target.value);
    e.target.value = masked;
    onChange(masked);
  };

  return {
    handlePhoneChange,
    handleCPFChange,
    handleCardNumberChange,
    handleCardExpiryChange,
  };
};

export default useFormMask;
