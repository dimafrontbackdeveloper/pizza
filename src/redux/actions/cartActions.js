export const addPizzaAction = (pizza) => {
  return {
    type: 'ADD_PIZZA',
    payload: pizza,
  };
};

export const clearAddedPizzas = () => {
  return {
    type: 'CLEAR_ADDED_PIZZAS',
  };
};

export const plusCount = (id, size, type, price) => {
  return {
    type: 'PLUS_COUNT',
    payload: {
      id,
      size,
      type,
      price,
    },
  };
};

export const minusCount = (id, size, type, price) => {
  return {
    type: 'MINUS_COUNT',
    payload: {
      id,
      size,
      type,
      price,
    },
  };
};

export const deletePizza = (id, size, type, price, count) => {
  return {
    type: 'DELETE_PIZZA',
    payload: {
      id,
      size,
      type,
      price,
      count,
    },
  };
};
