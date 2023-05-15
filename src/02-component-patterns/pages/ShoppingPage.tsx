import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';

import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  // const productsInCart = () => {
  //   return Object.keys(shoppingCart).map(key => {
  //     const { count, ...product } = shoppingCart[key];
  //     return product;
  //   });
  // }

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 0,
        }}
      >
        {({ count, increaseBy, isMaxCountReached, reset, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
