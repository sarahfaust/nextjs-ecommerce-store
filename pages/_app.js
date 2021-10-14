import { Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { componentStyle, globalStyles } from '../styles';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [itemSum, setItemSum] = useState(0);

  useEffect(() => {
    if (getParsedCookie('cart')) {
      setCart(getParsedCookie('cart'));
    }
  }, []);

  useEffect(() => {
    setParsedCookie('cart', cart);
  }, [cart]);

  useEffect(() => {
    setItemSum(cart.reduce((acc, product) => acc + product.amount, 0));
  }, [cart]);

  return (
    <>
      <Global styles={globalStyles} />
      <Layout itemSum={itemSum}>
        <Component
          {...pageProps}
          css={componentStyle}
          cart={cart}
          setCart={setCart}
        />
      </Layout>
    </>
  );
}

export default App;
