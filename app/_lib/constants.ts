import { Product, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Curso Completo Ads Turbo",
    description:
      "Domine o tráfego pago e aumente suas vendas com nosso curso completo + mentoria exclusiva",
    price: 997,
    installments: 12,
    image: "/products/course.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "João Silva",
    role: "Dono de Restaurante",
    content:
      "Depois do curso, consegui aumentar minhas vendas em 300% com anúncios no Facebook",
    image: "/testimonials/1.png",
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Proprietária de Academia",
    content:
      "Os resultados foram impressionantes! Dobrei o número de alunos em apenas 2 meses",
    image: "/testimonials/2.png",
  },
];
