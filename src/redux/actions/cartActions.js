export const addPizzaAction = (pizza) => {
  return {
    type: 'ADD_PIZZA',
    payload: pizza,
  };
};
export const setPizzaPrice = (price) => {
  return {
    type: 'SET_PIZZAS_PRICE',
    payload: price,
  };
};
export const setPizzaCount = (count) => {
  return {
    type: 'SET_PIZZAS_COUNT',
    payload: count,
  };
};
