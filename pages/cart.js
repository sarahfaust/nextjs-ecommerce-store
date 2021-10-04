import { useState } from 'react';
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
          <li key={product.id}>
            Game: {product.name}, Amount: {product.amount}
            <button>-</button>
            <button>+</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps(context) {
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
