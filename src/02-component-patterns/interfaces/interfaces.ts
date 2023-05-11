import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardComponentProps {
  ({ children, product }: ProductCardProps): ReactElement;
  Title: ({ title }: { title?: string }) => ReactElement;
  Image: ({ img }: { img?: string }) => ReactElement;
  Buttons: () => ReactElement;
}
