import styled from '@emotion/styled';

const SquareButton = styled.button`
  background-color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  min-width: 40px;
  min-height: 40px;
  font-weight: bold;
  font-family: inherit;
  &:hover {
    background-color: darkturquoise;
  }
`;

export function Button(props) {
  return <SquareButton onClick={props.onClick}>{props.children}</SquareButton>;
}
