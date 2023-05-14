import { useState } from 'react';
import { Product, ProductInCart, ShoppingCart } from '../interfaces/interfaces';

interface onProductCountChangeArgs {
  count: number;
  product: Product;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductCountChange = ({
    count,
    product,
  }: onProductCountChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { count, ...product },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
