import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  min-width: 40px;
  min-height: 40px;
  font-weight: bold;
  font-family: inherit;
  &:hover {
    background-color: darkturquoise;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 160px;
  border: solid 2px darkgrey;
  border-radius: 4px;
  background-color: white;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: white;
`;

export default function Product(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  const product = productsInCart.find(
    (productInCart) => productInCart.id === props.currentGame.id,
  );

  const initAmount = product ? product.amount : 0;

  const [amount, setAmount] = useState(initAmount);

  function addProductToCart() {
    if (amount === 0) {
      alert('Please tell us how many games you would like.');
    } else {
      const currentCart = getParsedCookie('cart') || [];
      const isInCart = currentCart.some(
        (productInCart) => productInCart.id === props.currentGame.id,
      );
      if (isInCart) {
        const existingProduct = currentCart.find(
          (productInCart) => productInCart.id === props.currentGame.id,
        );
        existingProduct.amount = amount;
        setParsedCookie('cart', currentCart);
      } else {
        const newProductsInCart = [
          ...productsInCart,
          { id: props.currentGame.id, amount: amount },
        ];
        setParsedCookie('cart', newProductsInCart);
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
      <Image
        src={`/${props.currentGame.image}.webp`}
        alt={`${props.currentGame.image} game box front`}
        width={200}
        height={200}
      />
      <h3>{props.currentGame.name}</h3>
      <p>{props.currentGame.price} €</p>
      <p>{props.currentGame.description}</p>
      <div>
        <CounterWrapper>
          <Button onClick={decreaseAmount}>-</Button>
          <AmountWrapper>
            <label>{amount}</label>
          </AmountWrapper>
          <Button
            onClick={() => {
              setAmount((prevAmount) => prevAmount + 1);
            }}
          >
            +
          </Button>
        </CounterWrapper>
      </div>
      <div>
        <Button onClick={addProductToCart}>Add to cart</Button>
      </div>
      <div>
        <Button>Go to checkout</Button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getGame } = await import('../../util/database');
  const currentGame = await getGame(context.query.productId);

  return {
    props: {
      currentGame,
    },
  };
}
