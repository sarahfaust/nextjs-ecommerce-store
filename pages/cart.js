import { useState } from 'react';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import { getParsedCookie } from '../util/cookies';

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  /*   const currentCart = productsInCart.filter((productInCart) =>
    props.games.find((game) => {
      if (productInCart.id === game.id) {
        return { ...productInCart, ...game };
      }
      return null;
    }),
  ); */

  const currentCart = [];

  props.games.forEach((game) => {
    productsInCart.forEach((product) => {
      if (product.id === game.id) {
        currentCart.push({ ...game, ...product });
      } else {
        return null;
      }
    });
  });

  return (
    <Layout>
      <ul>
        {currentCart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { games } = await import('../util/database');

  /*   const cartCookie = JSON.parse(context.req.cookies.cart);

  const currentCart = cartCookie.map((productInCart) => {
    return games.filter((game) => {
      return productInCart.id === game.id;
    });
  });

  console.log('serverside', cartCookie);
  console.log('current contents', currentCart); */

  return {
    props: {
      games,
    },
  };
}
