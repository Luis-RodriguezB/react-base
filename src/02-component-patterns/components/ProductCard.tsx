import { createContext, ReactElement, CSSProperties } from 'react';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
