import { css } from '@emotion/react';
import styled from '@emotion/styled';
import exp from 'constants';

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

export const h1Style = css`
  margin: 24px;
  padding: 4px;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 300;
  color: #292f36;
  border: 1px solid #292f36;
`;

export const h2Style = css`
  padding-bottom: 36px;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 48px;
  margin: 36px;
  max-width: 960px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 12px 4px rgba(125, 125, 125, 0.1);
`;

export const ColCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 48px;
  margin: 36px;
  max-width: 960px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 12px 4px rgba(125, 125, 125, 0.1);
`;

export const TextStyle = styled.p`
  margin-bottom: 12px;
  line-height: 1.5;
  max-width: 320px;
`;
