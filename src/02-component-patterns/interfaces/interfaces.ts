import { ReactElement } from 'react';
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardComponentProps {
  ({ children, product }: ProductCardProps): ReactElement;
  Title: (Props: ProductTitleProps) => ReactElement;
  Image: (Props: ProductImageProps) => ReactElement;
  Buttons: (Props: ProductButtonsProps) => ReactElement;
}
