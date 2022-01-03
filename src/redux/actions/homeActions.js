import axios from 'axios';

export const fetchPizzas = (activeCategory) => {
  return async (dispatch) => {
    if (activeCategory === 0) {
      const { data } = await axios(`http://localhost:3000/pizzas`);
      dispatch(setPizzas(data));
    } else {
      const { data } = await axios(`http://localhost:3000/pizzas?category=${activeCategory}`);
      dispatch(setPizzas(data));
    }
  };
};

export const setPizzas = (pizzas) => {
  return {
    type: 'SET_PIZZAS',
    payload: pizzas,
  };
};

export const setActiveCategory = (category) => {
  return {
    type: 'SET_ACTIVE_CATEGORY',
    payload: category,
  };
};
