import React from 'react';
import Categories from '../components/Categories';
import Pizzas from '../components/Pizzas';
import Sort from '../components/Sort';

function Home() {
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <Pizzas />
    </div>
  );
}

export default Home;
