import styled from '@emotion/styled';
import { RoundButton } from './RoundButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
  width: 108px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export function AmountSelector(props) {
  return (
    <Container>
      <RoundButton
        onClick={props.onClickMinus}
        dataCy="product-amount-decrease"
      >
        -
      </RoundButton>
      <Amount>
        <label data-cy={props.dataCy}>{props.amount}</label>
      </Amount>
      <RoundButton onClick={props.onClickPlus} dataCy="product-amount-increase">
        +
      </RoundButton>
    </Container>
  );
}
