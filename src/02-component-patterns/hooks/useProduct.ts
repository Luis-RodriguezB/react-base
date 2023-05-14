import { useState, useEffect, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  value?: number;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (!!initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    setCounter(initialValues?.count || value);
  }, [value]);

  return {
    counter,
    isMaxCountReached: typeof initialValues?.count !== undefined && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    
    reset,
    increaseBy,
  };
};
