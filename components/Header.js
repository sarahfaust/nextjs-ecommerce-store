import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  display: flex;
  gap: 12px;
  background-color: red;
  color: yellow;
`;

export default function Header() {
  return (
    <header>
      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen',
          },
        }}
      >
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div
        css={css`
          background-color: hotpink;
          &:hover {
            color: deeppink;
          }
        `}
      >
        This has a hotpink background.
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <nav styles={navStyles}>
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
