import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const homeStyles = css`
  background-color: purple;
`;

export default function Layout(props) {
  return (
    <div css={homeStyles}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
