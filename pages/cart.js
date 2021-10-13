import { useState } from 'react';
import CartItem from '../components/CartItem';

export default function Cart(props) {
  const [total, setTotal] = useState(0);

  const currentCart = [];
  props.games.forEach((game) => {
    props.cart.forEach((product) => {
      if (product.id === game.id) {
        currentCart.push({ ...game, ...product });
      } else {
        return null;
      }
    });
  });

  return (
    <>
      <ul>
        {currentCart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            cart={props.cart}
            setCart={props.setCart}
          />
        ))}
      </ul>
      <div>{total}</div>
    </>
  );
}

export async function getServerSideProps() {
  const { games } = await import('../util/database');

  return {
    props: {
      games,
    },
  };
}
