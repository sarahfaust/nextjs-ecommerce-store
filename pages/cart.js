import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import { getParsedCookie } from '../util/cookies';

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState([]);

  // I'm doing this because otherwise, the browser tells me that
  // it was expecting "server HTML to contain a matching <li> in <ul>"
  useEffect(() => {
    setProductsInCart(getParsedCookie('cart') || []);
  }, []);

  // TODO: change the forEach to map/filter/whatever combination of them
  /*   const filterCart = props.games.filter((game) => {
    productsInCart.map((productInCart) => {
      if (productInCart.id === game.id) {
        game.id = productInCart.id;
      }
      return productInCart;
    });
  }); */

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
