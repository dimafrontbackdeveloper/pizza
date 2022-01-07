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
            console.log('find');
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
      const item = state.addedPizzas.find((item) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type &&
          item.count === 1
        ) {
          return item;
        }
      });
      // проверяем, если у этого item count===1, то нам нужно его удалить

      if (item) {
        const oldAddedPizzas = state.addedPizzas;

        const indexOfEl = oldAddedPizzas.findIndex((pizza) => {
          if (pizza.id === item.id && pizza.size === item.size && pizza.type === item.type) {
            return true;
          } else {
            return false;
          }
        });

        oldAddedPizzas.splice(indexOfEl, 1);

        return {
          ...state,
          addedPizzas: oldAddedPizzas,
          allPriceOfPizzas: state.allPriceOfPizzas - action.payload.price,
          allCountOfPizzas: state.allCountOfPizzas - 1,
        };
      }

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
              count: item.count - 1,
            };
          }

          return item;
        }),
        allPriceOfPizzas: state.allPriceOfPizzas - action.payload.price,
        allCountOfPizzas: state.allCountOfPizzas - 1,
      };

    case 'DELETE_PIZZA':
      const pizza = state.addedPizzas.find((item) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.type === action.payload.type
        ) {
          return item;
        }
      });

      const oldAddedPizzas = state.addedPizzas;

      const indexOfEl = oldAddedPizzas.findIndex((item) => {
        if (pizza.id === item.id && pizza.size === item.size && pizza.type === item.type) {
          return true;
        } else {
          return false;
        }
      });

      oldAddedPizzas.splice(indexOfEl, 1);

      return {
        ...state,
        addedPizzas: oldAddedPizzas,
        allPriceOfPizzas: state.allPriceOfPizzas - pizza.price * pizza.count,
        allCountOfPizzas: state.allCountOfPizzas - pizza.count,
      };

    default:
      return state;
  }
}

export default cartReducer;
