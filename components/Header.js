import { css } from '@emotion/react';
import Link from 'next/link';

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

export default function Header(props) {
  // The reduce logic I was doing here was working so far, but I wasn't sure how to display changes
  // in the cookies in the header (when the amount for a product is changed in a cart item). Tried
  // with useEffect/re-rendering on cart changes, ended up in endless loops.
  // I realized that I needed to pass

  return (
    <header css={headerStyles}>
      <nav css={navStyles}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Games</a>
        </Link>
        <Link href="/products">
          <a>About</a>
        </Link>
      </nav>
      <div css={navStyles}>
        <Link href="/cart">
          <a>
            {props.itemSum} {props.itemSum > 1 ? 'items' : 'item'} in Cart
          </a>
        </Link>
      </div>
    </header>
  );
}
