import { css } from '@emotion/react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function Product(props) {
  const buttonStyles = css`
    background-color: turquoise;
    border: none;
    padding: 8px;
    border-radius: 4px;
    min-width: 32px;
    min-height: 32px;
    font-weight: bold;
    font-family: inherit;
    margin-right: 12px;
    margin-top: 12px;
    &:hover {
      background-color: darkturquoise;
    }
  `;

  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  const product = productsInCart.find(
    (productInCart) => productInCart.id === Number(props.currentGame.id),
  );

  const initAmount = product ? product.amount : 0;

  const [amount, setAmount] = useState(initAmount);

  function addProductToCart() {
    if (amount === 0) {
      alert('Please tell us how many games you would like.');
    } else {
      const currentCart = getParsedCookie('cart') || [];
      const isInCart = currentCart.some(
        (productInCart) => productInCart.id === Number(props.currentGame.id),
      );
      if (isInCart) {
        const existingProduct = currentCart.find(
          (productInCart) => productInCart.id === Number(props.currentGame.id),
        );
        existingProduct.amount = amount;
        setParsedCookie('cart', currentCart);
      } else {
        const newProductsInCart = [
          ...productsInCart,
          { id: Number(props.currentGame.id), amount: amount },
        ];
        setParsedCookie('cart', newProductsInCart);
        setParsedCookie('isUser', 'true');
        setProductsInCart(newProductsInCart);
      }
    }
  }

  function decreaseAmount() {
    if (amount === 0) {
      setAmount(0);
    } else {
      setAmount((prevAmount) => prevAmount - 1);
    }
  }

  return (
    <Layout>
      <h3>{props.currentGame.name}</h3>
      <p>{props.currentGame.price} €</p>
      <p>{props.currentGame.desc}</p>
      <div>
        <label>Amount: {amount}</label>
      </div>
      <div>
        <button css={buttonStyles} onClick={decreaseAmount}>
          -
        </button>
        <button
          css={buttonStyles}
          onClick={() => {
            setAmount((prevAmount) => prevAmount + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button css={buttonStyles} onClick={addProductToCart}>
          Add to cart
        </button>
      </div>
      <div>
        <button css={buttonStyles}>Go to checkout</button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { games } = await import('../../util/database');

  const gameId = Number(context.query.productId);

  const currentGame = games.find((game) => game.id === gameId);

  return {
    props: {
      currentGame,
    },
  };
}
