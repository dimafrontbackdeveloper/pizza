const initialState = {
  pizzas: [
    {
      id: 1,
      photo:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
      name: 'Чизбургер-пицца',
      types: ['тонкое', 'традиционное'],
      sizes: [26, 40],
    },
    {
      id: 2,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/b618de8dbec141289617c0bd0728ba51_292x292.jpeg',
      name: 'Двойной цыпленок',
      types: ['тонкое'],
      sizes: [26, 30, 40],
    },
    {
      id: 3,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/1673ed1b5bea4482aef8a64827207b73_292x292.jpeg',
      name: 'Додо Микс',
      types: ['традиционное'],
      sizes: [30],
    },
    {
      id: 4,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/2c71cd53e50746279f7aa0f59c7ec50f_292x292.jpeg',
      name: 'Пепперони',
      types: ['тонкое', 'традиционное'],
      sizes: [26, 40],
    },
    {
      id: 5,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg',
      name: 'Маргарита',
      types: ['традиционное'],
      sizes: [26, 40],
    },
    {
      id: 6,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/9bd4c76d4c2548c090ac6ae5a1eabae6_292x292.jpeg',
      name: 'Ветчина и грибы',
      types: ['тонкое'],
      sizes: [26, 30],
    },
    {
      id: 7,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg',
      name: 'Гавайская',
      types: ['традиционное'],
      sizes: [30, 40],
    },
    {
      id: 8,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/7a0fac09c2264f8e8928f205c7acb5cf_292x292.jpeg',
      name: 'Сырный цыпленок',
      types: ['тонкое'],
      sizes: [30, 40],
    },
    {
      id: 9,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/7e32713298574ce8a48ec86d91baec05_292x292.jpeg',
      name: 'Цыпленок ранч',
      types: ['тонкое', 'традиционное'],
      sizes: [26, 30, 40],
    },
    {
      id: 10,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_292x292.jpeg',
      name: 'Мясная',
      types: ['традиционное'],
      sizes: [26, 30, 40],
    },
    {
      id: 11,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
      name: 'Аррива!',
      types: ['тонкое', 'традиционное'],
      sizes: [40],
    },
    {
      id: 12,
      photo:
        'https://cdn.dodopizza.net/static/Img/Products/80af1cf2138447b4a9afc30df6af712c_292x292.jpeg',
      name: 'Овощи и грибы',
      types: ['традиционное'],
      sizes: [30, 40],
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
