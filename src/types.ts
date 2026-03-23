export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  isHot?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}
