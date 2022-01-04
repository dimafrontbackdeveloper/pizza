import React from 'react';
import CartEmpty from '../components/CartEmpty';
import CartFilled from '../components/CartFilled';
import { useSelector } from 'react-redux';

function Cart() {
  const addedPizzas = useSelector(({ cartReducer }) => cartReducer.addedPizzas);

  if (addedPizzas.length === 0) {
    return <CartEmpty />;
  } else {
    return <CartFilled addedPizzas={addedPizzas} />;
  }
}

export default Cart;
