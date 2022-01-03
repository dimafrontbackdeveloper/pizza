import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPizzas } from './../redux/actions/homeActions';
import PizzaBlock from './PizzaBlock';

function Pizzas() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ homeReducer }) => homeReducer.pizzas);
  const activeCategory = useSelector(({ homeReducer }) => homeReducer.activeCategory);
  const expectedTypes = ['тонкое', 'традиционное'];
  const expectedSizes = [26, 30, 40];

  useEffect(async () => {
    dispatch(fetchPizzas(activeCategory));
  }, [activeCategory]);

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
