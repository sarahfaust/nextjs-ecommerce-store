import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const layoutStyles = css`
  margin: 0 2rem;
`;

export default function Layout(props) {
  return (
    <div css={layoutStyles}>
      <Header itemSum={props.itemSum} />
      {props.children}
      <Footer />
    </div>
  );
}
