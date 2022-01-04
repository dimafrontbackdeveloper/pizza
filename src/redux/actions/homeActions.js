import axios from 'axios';

export const fetchPizzas = (activeCategory, sortBy) => {
  return async (dispatch) => {
    if (activeCategory === 0) {
      const { data } = await axios(
        `http://localhost:3000/pizzas?_sort=${
          sortBy === 'популярности' ? 'popularity' : sortBy === 'цене' ? 'price' : 'name'
        }`,
      );
      dispatch(setPizzas(data));
    } else {
      const { data } = await axios(
        `http://localhost:3000/pizzas?category=${activeCategory}&?_sort=${
          sortBy === 'популярности' ? 'popularity' : sortBy === 'цене' ? 'price' : 'name'
        }`,
      );
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

export const setSortBy = (sortBy) => {
  return {
    type: 'SET_SORT_BY',
    payload: sortBy,
  };
};
