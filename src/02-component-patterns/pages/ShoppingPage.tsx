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
        className='bg-dark text-white'
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ count, increaseBy, isMaxCountReached, reset, maxCount }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />

            <button onClick={reset} >Reset</button>

            <button onClick={() => increaseBy(-2)}>-2</button>

            <button style={{ display: isMaxCountReached ? 'none' : '' }} onClick={() => increaseBy(2)}>+2</button>
            
            <span>{ count } - { maxCount }</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
