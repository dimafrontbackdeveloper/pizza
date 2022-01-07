const initialState = {
  allPriceOfPizzas: 0,
  allCountOfPizzas: 0,
  addedPizzas: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA':
      if (
        state.addedPizzas.some((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type
          ) {
            return true;
          }
        })
      ) {
        console.log('find');

        return {
          ...state,
          addedPizzas: state.addedPizzas.map((item) => {
            if (
              item.id === action.payload.id &&
              item.size === action.payload.size &&
              item.type === action.payload.type
            ) {
              console.log('deep find');
              return {
                ...item,
                count: item.count + 1,
              };
            }
            return item;
          }),
          allPriceOfPizzas: state.allPriceOfPizzas + action.payload.price,
          allCountOfPizzas: state.allCountOfPizzas + 1,
        };
      } else {
        return {
          ...state,
          addedPizzas: [...state.addedPizzas, { ...action.payload, count: 1 }],
          allPriceOfPizzas: state.allPriceOfPizzas + action.payload.price,
          allCountOfPizzas: state.allCountOfPizzas + 1,
        };
      }

    case 'CLEAR_ADDED_PIZZAS':
      return {
        ...state,
        allPriceOfPizzas: 0,
        allCountOfPizzas: 0,
        addedPizzas: [],
      };

    case 'PLUS_COUNT':
      return {
        ...state,
        addedPizzas: state.addedPizzas.map((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type
          ) {
            return {
              ...item,
              count: item.count + 1,
            };
          }

          return item;
        }),
        allPriceOfPizzas: state.allPriceOfPizzas + action.payload.price,
        allCountOfPizzas: state.allCountOfPizzas + 1,
      };

    case 'MINUS_COUNT':
      return {
        ...state,
        addedPizzas: state.addedPizzas.map((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type &&
            item.count === 1
          ) {
            return null;
          }

          if (
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.type === action.payload.type
          ) {
            return {
              ...item,
              count: item.count - 1,
            };
          }

          return item;
        }),
        allPriceOfPizzas: state.allPriceOfPizzas - action.payload.price,
        allCountOfPizzas: state.allCountOfPizzas - 1,
      };

    default:
      return state;
  }
}

export default cartReducer;
