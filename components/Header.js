import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  gap: 12px;
  background-color: #eeeeee;
  color: yellow;
  margin-top: 2rem;
`;

const logoStyles = css`
  margin: 0;
  color: purple;
`;

export default function Header() {
  return (
    <header>
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
    </header>
  );
}
