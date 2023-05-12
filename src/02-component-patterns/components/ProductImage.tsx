import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import notImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow = notImage;

  if (img) imgToShow = img;

  if (product.img) imgToShow = product.img;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='Product'
      style={style}
    />
  );
};
