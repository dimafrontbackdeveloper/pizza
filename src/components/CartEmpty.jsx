import React from 'react';
import EmptyCart from './../img/empty-cart.png';

function CartEmpty() {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyCart} alt="Empty cart" />
      <a href="/" class="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
}

export default CartEmpty;