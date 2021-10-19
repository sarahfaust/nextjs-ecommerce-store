import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 16px;
  background-color: #292f36;
  color: white;
  font-weight: bold;
`;

export function RoundButton(props) {
  return (
    <Button onClick={props.onClick} data-cy={props.dataCy}>
      {props.children}
    </Button>
  );
}
