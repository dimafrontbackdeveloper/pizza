const initialState = {
  pizzas: [],
  activeCategory: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        pizzas: action.payload,
      };

    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
