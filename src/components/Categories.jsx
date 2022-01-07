import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setActiveCategory } from '../redux/actions/homeActions';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const activeCategory = useSelector(({ homeReducer }) => homeReducer.activeCategory);
  const dispatch = useDispatch();

  const changeActiveCategory = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              className={classNames({ active: index === activeCategory })}
              onClick={() => changeActiveCategory(index)}
              key={`${category}__${index}`}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
