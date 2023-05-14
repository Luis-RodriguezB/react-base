import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';

import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';


export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, { count, ...product }]) => (
          <ProductCard
            key={key}
            product={product}
            style={{ width: '150px' }}
            className='bg-dark text-white'
            onChange={onProductCountChange}
            value={count}
          >
            <ProductImage className='custom-image' />
            <ProductButtons
              className='custom-buttons'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
