const initialState = {
  allPriceOfPizzas: 0,
  allCountOfPizzas: 0,
  addedPizzas: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA':
      return {
        ...state,
        addedPizzas: [...state.addedPizzas, { ...action.payload, count: 1 }],
        allPriceOfPizzas: state.allPriceOfPizzas + action.payload.price,
        allCountOfPizzas: state.allCountOfPizzas + 1,
      };

    default:
      return state;
  }
}

export default cartReducer;
