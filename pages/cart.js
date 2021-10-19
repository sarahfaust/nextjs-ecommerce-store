import styled from '@emotion/styled';
import Link from 'next/link';
import CartItem from '../components/CartItem';
import { ColCard, Container, h2Style } from '../styles';

const Total = styled.p`
  font-weight: 500;
  padding: 24px 0 0;
`;

export default function Cart(props) {
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

  const total = currentCart.reduce(
    (previous, current) => previous + current.amount * current.price,
    0,
  );

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style} data-cy="page-cart-heading">
          Shopping Cart
        </h2>
        {currentCart.length > 0 ? (
          <>
            <ul data-cy="cart-items">
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
              <Total data-cy="cart-total">Total: {total} €</Total>
            </div>
            <Link href="/checkout">
              <a>Go to checkout</a>
            </Link>{' '}
          </>
        ) : (
          <div>
            Your cart is still empty. Check out our offering of{' '}
            <Link href="/products">
              <a>games</a>
            </Link>{' '}
            and try filling the cart!
          </div>
        )}
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
