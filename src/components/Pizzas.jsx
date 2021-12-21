import React from 'react';
import { useSelector } from 'react-redux';
import PizzaBlock from './PizzaBlock';

function Pizzas() {
  const pizzas = useSelector(({ homeReducer }) => homeReducer.pizzas);
  const expectedTypes = ['тонкое', 'традиционное'];
  const expectedSizes = [26, 30, 40];

  return (
    <>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {pizzas.map((pizza) => {
          return (
            <PizzaBlock
              {...pizza}
              key={pizza.id}
              expectedTypes={expectedTypes}
              expectedSizes={expectedSizes}
            />
          );
        })}
      </div>
    </>
  );
}

export default Pizzas;
