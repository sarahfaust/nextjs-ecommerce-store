import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #eeeeee;
  margin: 2rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  line-height: 0.9;
  border: 2px solid #292f36;
`;

const LogoText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #292f36;
`;

export default function Header(props) {
  // The reduce logic I was doing here was working so far, but I wasn't sure how to display changes
  // in the cookies in the header (when the amount for a product is changed in a cart item). Tried
  // with useEffect/re-rendering on cart changes, ended up in endless loops.
  // I realized that I needed to pass

  return (
    <HeaderStyle>
      <Navigation>
        <Link href="/">
          <a>
            <Logo>
              <LogoText>BOARD</LogoText>
              <LogoText>GAMES</LogoText>
            </Logo>
          </a>
        </Link>
        <Link href="/products">
          <a>Shop Games</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/backend">
          <a>Backend</a>
        </Link>
      </Navigation>
      <Navigation>
        <Link href="/cart">
          <a>
            {props.itemSum} {props.itemSum > 1 ? 'items' : 'item'} in Cart
          </a>
        </Link>
      </Navigation>
    </HeaderStyle>
  );
}
