const initialState = {
  pizzas: [],
  activeCategory: 0,
  sortBy: 'популярности',
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

    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
