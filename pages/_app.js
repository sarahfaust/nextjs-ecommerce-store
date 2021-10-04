import { css, Global } from '@emotion/react';

function App({ Component, pageProps }) {
  const globalStyles = css`
    html,
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: #eeeeee;
    }

    a {
      color: #333333;
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
      max-width: 250px;
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

    label {
      margin-right: 12px;
      margin-bottom: 12px;
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
