import styled from '@emotion/styled';

const Button = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 16px;
  background-color: #404040;
  color: white;
  font-weight: bold;
`;

export function RoundButton(props) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}
