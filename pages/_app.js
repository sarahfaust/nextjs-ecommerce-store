import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

const globalStyles = css`
  html,
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #eeeeee;
  }

  @font-face {
    font-family: 'Faustina';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('/fonts/Faustina/Faustina.woff') format('woff'),
      url('/fonts/Faustina/Faustina.ttf') format('truetype');
  }

  a {
    color: #333333;
    text-decoration: none;
    margin-bottom: 12px;
    margin-right: 12px;
    &:active {
      color: blue;
    }
    &:hover {
      color: darkgray;
    }
  }

  p {
    margin: 0 0 12px 0;
    max-width: 250px;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  nav {
    margin: 24px 0;
  }

  label {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

const componentStyle = css`
  min-height: 100vh;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eeeeee;
`;

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
    if (cart.length > 0) {
      setItemSum(cart.reduce((acc, product) => acc + product.amount, 0));
    }
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
