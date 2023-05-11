import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import notImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img }: { img?: string }) => {
  const { product } = useContext(ProductContext);
  let imgToShow = notImage;

  if (img) imgToShow = img;

  if (product.img) imgToShow = product.img;

  return <img className={styles.productImg} src={imgToShow} alt='Product' />;
};
