import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie } from '../util/cookies';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
`;

const navStyles = css`
  display: flex;
  gap: 12px;
  background-color: #eeeeee;
  margin-top: 2rem;
`;

const logoStyles = css`
  margin: 0;
  color: purple;
`;

export default function Header() {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    setProductsInCart(getParsedCookie('cart') || []);
  }, []);

  const initSum = productsInCart.reduce(
    (acc, product) => acc + product.amount,
    0,
  );

  const [sum, setSum] = useState(initSum);

  // TODO:
  // Would work so far, but how do I display changes in the cookies here,
  // e.g. when the amount for a product is changed in a cart item?

  return (
    <header css={headerStyles}>
      <nav css={navStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </nav>
      <div css={navStyles}>
        <a>Cart: {sum}</a>
      </div>
    </header>
  );
}
