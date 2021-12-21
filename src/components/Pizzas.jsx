import React from 'react';
import { useSelector } from 'react-redux';
import PizzaBlock from './PizzaBlock';

function Pizzas() {
  return (
    <>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <PizzaBlock />
      </div>
    </>
  );
}

export default Pizzas;
