import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = useState(0);

  const changeActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div class="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              className={classNames({ active: index === activeCategory })}
              onClick={() => changeActiveCategory(index)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
