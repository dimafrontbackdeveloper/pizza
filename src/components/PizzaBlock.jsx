import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaAction } from '../redux/actions/cartActions';

function PizzaBlock({ id, name, photo, types, sizes, expectedTypes, expectedSizes, price }) {
  const dispatch = useDispatch();
  const addedPizzas = useSelector(({ cartReducer }) => cartReducer.addedPizzas);

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  let countOfPizza = 0;
  addedPizzas.forEach((item) => {
    if (item.id === id) {
      countOfPizza += item.count;
    }
  });

  const changeActiveType = (type) => {
    setActiveType(type);
  };

  const changeActiveSize = (size) => {
    setActiveSize(size);
  };

  const addPizza = (id, name, type, size, price) => {
    dispatch(addPizzaAction({ id, name, type, size, price }));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={photo} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {expectedTypes.map((type, index) => {
            if (types.some((item) => item === type)) {
              return (
                <li
                  className={classNames({ active: type === activeType })}
                  onClick={() => changeActiveType(type)}
                  key={`${type}__${index * Math.random()}`}>
                  {type}
                </li>
              );
            } else {
              return (
                <li className="untouchable" key={`${type}__${index}`}>
                  {type}
                </li>
              );
            }
          })}
        </ul>
        <ul>
          {expectedSizes.map((size, index) => {
            if (sizes.some((item) => item === size)) {
              return (
                <li
                  className={classNames({ active: size === activeSize })}
                  onClick={() => changeActiveSize(size)}
                  key={`${size * Math.random()}__${index}`}>
                  {size}
                </li>
              );
            } else {
              return (
                <li className="untouchable" key={`${size}__${index}`}>
                  {size}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          className="button button--outline button--add"
          onClick={() => addPizza(id, name, activeType, activeSize, price)}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countOfPizza > 0 && <i>{countOfPizza}</i>}
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
