import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

export default function CartItem(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  const [amount, setAmount] = useState(props.product.amount);

  // why is this not working?
  // Whe first useEffect is running before the second,
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
      Game: {props.product.name}, Amount: {amount}
      <button onClick={decreaseAmount}>-</button>
      <button onClick={increaseAmount}>+</button>
      <button>Delete</button>
    </li>
  );
}
