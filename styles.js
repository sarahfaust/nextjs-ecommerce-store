import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700&display=swap');

  html,
  body {
    margin: 0;
    font-family: Archivo, sans-serif;
    background-color: #eeeeee;
  }

  a {
    color: #333333;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: darkgray;
    }
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const componentStyle = css`
  min-height: 100vh;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;
