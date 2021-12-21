const initialState = {
  pizzas: [
    {
      photo:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      name: 'Чизбургер-пицца',
      type: ['тонкое', 'традиционное'],
      sizes: [26, 30, 40],
    },
  ],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
