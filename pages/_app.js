import { css, Global } from '@emotion/react';

function App({ Component, pageProps }) {
  const globalStyles = css`
    html,
    body {
      padding: 1rem;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: red;
      text-decoration: none;
      margin-bottom: 12px;
      margin-right: 12px;
      &:active {
        color: blue;
      }
      &:hover {
        color: darkgray;
      }
    }

    p {
      margin: 0 0 12px 0;
    }

    li {
      list-style: none;
    }

    * {
      box-sizing: border-box;
    }

    nav {
      margin: 24px 0;
    }
  `;

  const componentStyle = css`
    min-height: 100vh;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eeeeee;
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} css={componentStyle} />
    </>
  );
}

export default App;
