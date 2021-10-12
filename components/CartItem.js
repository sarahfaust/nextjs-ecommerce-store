import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

const CartItemCard = styled.div`
  padding: 24px;
  border: solid 2px darkgray;
  border-radius: 2px;
  margin-bottom: 12px;
`;

const GameName = styled.span``;

export default function CartItem(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  const [amount, setAmount] = useState(props.product.amount);

  // why is this not working?
  //  first useEffect is running before the second,
  // and I think that the async/await should make it finish
  // before the second useEffect runs.
  // But productsInCart is still empty in the second useEffect.

  /*   useEffect(() => {
    const setCart = async () => {
      const cookie = await getParsedCookie('cart');
      console.log('cookie', cookie);
      setProductsInCart(cookie || []);
    };
    setCart();
  }, []); */

  useEffect(() => {
    const existingProduct = productsInCart.find(
      (productInCart) => productInCart.id === props.product.id,
    );
    existingProduct.amount = amount;
    setParsedCookie('cart', productsInCart);
  }, [amount, productsInCart, props.product.id]);

  function decreaseAmount() {
    if (amount === 0) {
      setAmount(0);
      // delete item
    } else {
      setAmount((prevAmount) => prevAmount - 1);
    }
  }

  function increaseAmount() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  return (
    <li key={props.product.id}>
      <CartItemCard>
        <GameName>{props.product.name} </GameName>
        <button onClick={decreaseAmount}>-</button>
        <label>{amount}</label>
        <button onClick={increaseAmount}>+</button>
        <button>Delete</button>
      </CartItemCard>
    </li>
  );
}
