import { createContext } from 'react';
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';

export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      onChange,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
