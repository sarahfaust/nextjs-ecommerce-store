import styled from '@emotion/styled';
import { useState } from 'react';
import CartItem from '../components/CartItem';
import { ColCard, Container, h2Style } from '../styles';

const Total = styled.p`
  font-weight: 500;
  padding: 24px 0 0;
`;

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

  /*   const totalPrice = currentCart.reduce(
    (acc, product) => acc + product.amount * product.price,
    0,
  );

  setTotal(totalPrice); */

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style}>Shopping Cart</h2>
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
        <div>
          <Total>Total: {total} €</Total>
        </div>
      </ColCard>
    </Container>
  );
}

export async function getServerSideProps() {
  const { getGames } = await import('../util/database');
  const games = await getGames();

  return {
    props: {
      games,
    },
  };
}
