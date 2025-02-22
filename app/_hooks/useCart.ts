import { useState } from "react";
import { UPSELL_PRODUCTS } from "@/app/_lib/constants";

interface CartProduct {
  id: number;
  name: string;
  price: number;
}

const useCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const basePrice = 997;

  const toggleProduct = (productId: number) => {
    setSelectedProducts((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const isProductSelected = (productId: number) => {
    return selectedProducts.includes(productId);
  };

  const getTotal = () => {
    const upsellTotal = UPSELL_PRODUCTS.filter((product) =>
      selectedProducts.includes(product.id)
    ).reduce((acc, product) => acc + product.price, 0);

    return basePrice + upsellTotal;
  };

  const getProducts = (): CartProduct[] => {
    const baseProduct = {
      id: 0,
      name: "Curso Completo",
      price: basePrice,
    };

    const selectedUpsells = UPSELL_PRODUCTS.filter((product) =>
      selectedProducts.includes(product.id)
    ).map(({ id, name, price }) => ({ id, name, price }));

    return [baseProduct, ...selectedUpsells];
  };

  return {
    toggleProduct,
    isProductSelected,
    getTotal,
    getProducts,
  };
};

export default useCart;
