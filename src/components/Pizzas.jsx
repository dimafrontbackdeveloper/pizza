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
  const sortBy = useSelector(({ homeReducer }) => homeReducer.sortBy);
  const expectedTypes = ['тонкое', 'традиционное'];
  const expectedSizes = [26, 30, 40];

  useEffect(async () => {
    dispatch(fetchPizzas(activeCategory, sortBy));
  }, [activeCategory, sortBy]);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
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
