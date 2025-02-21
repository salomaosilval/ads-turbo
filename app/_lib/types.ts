export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  installments: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}
