import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

export default function CartItem(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );
  const [amount, setAmount] = useState(props.product.amount);

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
    <li>
      Game: {props.product.name}, Amount: {amount}
      <button onClick={decreaseAmount}>-</button>
      <button onClick={increaseAmount}>+</button>
      <button>Delete</button>
    </li>
  );
}
